const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Add CORS headers for all responses
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: 'Method not allowed' })
    };
  }

  // Check for API key
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ ok: false, error: 'Email service not configured' })
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Parse and validate request body
    let formData;
    try {
      formData = JSON.parse(event.body || '{}');
    } catch (parseError) {
      console.error('Invalid JSON in request body:', parseError);
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ ok: false, error: 'Invalid request format' })
      };
    }

    // Validate required fields
    const { name, email, phone, serviceType } = formData;
    if (!name || !email || !phone || !serviceType) {
      console.error('Missing required fields:', { name: !!name, email: !!email, phone: !!phone, serviceType: !!serviceType });
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ ok: false, error: 'Missing required fields' })
      };
    }

    // Map service types to readable names
    const serviceNames = {
      'residential-regular': 'Residential Cleaning (Regular)',
      'residential-deep': 'Deep Cleaning',
      'commercial': 'Commercial Cleaning',
      'move-in': 'Move-In Cleaning',
      'move-out': 'Move-Out Cleaning',
      'airbnb': 'Airbnb Cleaning',
      'post-construction': 'Post-Construction Cleaning',
      'one-time': 'One-Time Cleaning'
    };

    const serviceName = serviceNames[serviceType] || serviceType;
    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Format preferred date
    const formattedDate = formData.preferredDate ? 
      new Date(formData.preferredDate + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : 'Not specified';

    // Format preferred time
    const timeLabels = {
      'morning': 'Morning (8:00 AM - 12:00 PM)',
      'afternoon': 'Afternoon (12:00 PM - 4:00 PM)',
      'evening': 'Evening (4:00 PM - 7:00 PM)'
    };
    const formattedTime = timeLabels[formData.preferredTime] || formData.preferredTime || 'Not specified';

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #f8f9fa; font-weight: bold; }
            .highlight { background-color: #eff6ff; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏠 New Booking Request</h1>
            <p>LumiMaid Cleaning Services</p>
          </div>
          
          <div class="content">
            <h2>Booking Details</h2>
            <table>
              <tr class="highlight">
                <th>Service Requested</th>
                <td><strong>${serviceName}</strong></td>
              </tr>
              <tr>
                <th>Customer Name</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Phone</th>
                <td><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <th>Service Address</th>
                <td>${formData.address || 'Not provided'}</td>
              </tr>
              <tr class="highlight">
                <th>Preferred Date</th>
                <td>${formattedDate}</td>
              </tr>
              <tr class="highlight">
                <th>Preferred Time</th>
                <td>${formattedTime}</td>
              </tr>
              <tr>
                <th>Additional Message</th>
                <td>${formData.message || 'None provided'}</td>
              </tr>
              <tr>
                <th>Submitted</th>
                <td>${submissionDate} CST</td>
              </tr>
            </table>
            
            <h3>Next Steps:</h3>
            <ul>
              <li>Contact customer within 24 hours to confirm appointment</li>
              <li>Provide detailed quote based on service requirements</li>
              <li>Schedule cleaning service at preferred date/time</li>
            </ul>
          </div>
          
          <div class="footer">
            <p>This booking request was submitted through the LumiMaid website.</p>
          </div>
        </body>
      </html>
    `;

    // Send email
    const result = await resend.emails.send({
      from: 'LumiMaid Bookings <bookings@lumimaid.com>',
      to: ['info@lumimaid.com'],
      replyTo: email,
      subject: `New Booking – ${serviceName} – ${name}`,
      html: htmlBody,
      tags: [
        { name: 'category', value: 'booking' },
        { name: 'service', value: serviceType }
      ]
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ ok: false, error: 'Failed to send email - please try again' })
      };
    }

    console.log('Email sent successfully:', { 
      id: result.data?.id, 
      service: serviceName, 
      customer: name,
      email: email 
    });

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ 
        ok: true, 
        success: true,
        message: 'Booking request sent successfully' 
      })
    };

  } catch (error) {
    console.error('Error sending booking email:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ 
        ok: false, 
        error: 'Internal server error - please try again or call (612) 513-7035' 
      })
    };
  }
};
export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  message: string;
}

export async function sendBookingEmail(data: BookingFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Use different endpoints for development vs production
    const isDev = import.meta.env.DEV;
    const endpoint = isDev ? '/api/send-booking' : '/.netlify/functions/send-booking';
    
    console.log('Sending booking request to:', endpoint);
    console.log('Form data:', { ...data, email: data.email ? '[REDACTED]' : 'missing' });
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      try {
        const result = await response.json();
        console.log('Response data:', result);
        
        if (result.success || result.ok) {
          console.log('Booking email sent successfully:', result.message || 'No message');
          return { success: true };
        } else {
          console.error('Email sending failed:', result.error || 'Unknown error');
          return { 
            success: false, 
            error: result.error || 'Failed to send email'
          };
        }
      } catch (jsonError) {
        console.error('Invalid JSON response:', jsonError);
        const responseText = await response.text();
        console.error('Raw response:', responseText);
        return { 
          success: false, 
          error: 'Server response error - please try again'
        };
      }
    } else {
      const responseText = await response.text();
      console.error('Server error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      });
      
      return { 
        success: false, 
        error: `Server error (${response.status}) - please call (612) 513-7035 to book directly`
      };
    }

  } catch (error) {
    console.error('Network error submitting booking form:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      type: typeof error
    });
    
    return { 
      success: false, 
      error: 'Unable to submit form - please call (612) 513-7035 to book directly'
    };
  }
}
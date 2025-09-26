import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Only POST' };
  const { name = '', email = '', message = '' } = JSON.parse(event.body || '{}');

  try {
    await resend.emails.send({
      // Use resend.dev for now; switch to noreply@lumimaid.com after domain verification
      from: 'LumiMaid <noreply@resend.dev>',
      to: 'info@lumimaid.com',
      subject: 'New Booking Request',
      html: `
        <h2>New Booking</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br>${String(message).replace(/\n/g,'<br>')}</p>
      `,
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: e?.message }) };
  }
}

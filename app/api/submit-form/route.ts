import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.contact || !data.aspirantType || !data.attemptYear || !data.program) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email notification only if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'UPSC Guide <onboarding@resend.dev>',
            to: process.env.ADMIN_EMAIL || 'admin@example.com',
            subject: `New Lead: ${data.name}`,
            html: `
              <h2>New Student Enquiry</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Contact:</strong> ${data.contact}</p>
              <p><strong>Aspirant Type:</strong> ${data.aspirantType}</p>
              <p><strong>Year of Attempt:</strong> ${data.attemptYear}</p>
              <p><strong>Program:</strong> ${data.program}</p>
              <p><strong>Submitted At:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.log('Email sending failed:', emailError);
      }
    }

    // Save to Google Sheets if configured
    if (process.env.GOOGLE_SHEETS_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            contact: data.contact,
            aspirantType: data.aspirantType,
            attemptYear: data.attemptYear,
            program: data.program,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (sheetsError) {
        console.log('Google Sheets save failed:', sheetsError);
      }
    }

    // Log to console for now (you can see the data in terminal)
    console.log('New Lead Received:', {
      name: data.name,
      email: data.email,
      contact: data.contact,
      aspirantType: data.aspirantType,
      attemptYear: data.attemptYear,
      program: data.program,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

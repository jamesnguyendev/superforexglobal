import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, name, subject, message } = await req.json();

  try {
    // Setup the transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `
Hi from Superforex,

You have received a new message from website:

- **Subject**: ${subject}
- **Sender**: ${name}
- **Email**: ${email}

**Content**:
${message}

Best regard,
Superforexs support.
  `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

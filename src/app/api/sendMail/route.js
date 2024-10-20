import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.shadowctrl.me",
  port: 465,
  secure: true,
  auth: {
    user: "admin@shadowctrl.me",
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmails = async (name, mail, description) => {
  const userMailOptions = {
    from: '"shadowctrl" <noreply@shadowctrl.me>',
    to: mail,
    subject: "🌟 Thank You for Your Submission!",
    text: `Hi ${name},\n\nThank you so much for reaching out to us! We truly appreciate your message and value your input. Our team is dedicated to providing you with a prompt response, and we will get back to you shortly.\n\nIf you have any urgent questions or need immediate assistance, please feel free to reach out to us directly at query@shadowctrl.me.\n\nBest regards,\nThe shadowctrl Team.`,
  };

  const adminMailOptions = {
    from: '"Form Submission @shadowctrl.me" <noreply@shadowctrl.me>',
    to: "admin@shadowctrl.me",
    subject: "New Contact Form Submission - shadowctrl.me",
    text: `New submission from ${name} - ${mail}\n\n${description}.`,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
  } catch (error) {
    throw new Error("Error sending emails");
  }
};

export async function POST(req) {
  const { data } = await req.json();

  try {
    await sendEmails(data.name, data.mail, data.description);
    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

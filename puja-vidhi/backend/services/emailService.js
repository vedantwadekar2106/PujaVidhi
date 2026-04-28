const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // ✅ comma added
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Puja Vidhi" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("📧 Email sent to:", to);
  } catch (err) {
    console.log("❌ Email error:", err.message);
  }
};

module.exports = sendEmail;
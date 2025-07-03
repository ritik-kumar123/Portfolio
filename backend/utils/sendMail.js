const nodemailer = require("nodemailer");

const sendMail = async ({ name, email, msg }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // shows sender's name and email
      to: process.env.EMAIL_USER, // your receiving address
      subject: `New message from ${name}`,
      text: msg,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

module.exports = sendMail;

const {Resend} = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);
const sendMail = async ({name, email, msg})=>{
  try{
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Sender:${email}\n\nMessage:\n${msg}`,
    });
    console.log("Email sent:successfully");
    return {success: true,response};
  }catch (error){
    console.error("Email send error:",error);
    return {success: false,error};
  }
};
 module.exports = sendMail;


"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.hostinger.com",
  port: 465,
  auth: {
    user: "info@febsigorta.com.tr",
    pass: process.env.HOST_MAIL_P,
  },
  maxConnections: 1,
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmailW() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"FEB Sigorta 👻" <info@febsigorta.com.tr>', // sender address
    to: "murath31@gmail.com, baronder@hotmail.com", // list of receivers
    subject: "Test Mesajları ✔", // Subject line
    text: "Web sitesinden gönderilen mail?", // plain text body
    html: "<b>Maraba</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendEmailW().catch(console.error);

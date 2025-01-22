const nodemailer = require('nodemailer');
require('dotenv').config();
const sendMail = async ({ to, subject, text, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: '"Project Mail Service"' + process.env.SENDER_MAIL,
      to,
      subject,
      text,
      html,
    });
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.log('Email sending error:', error);
    throw new Error('Email could not be sent');
  }
};

module.exports = { sendMail };

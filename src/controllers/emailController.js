const { sendMail } = require('../services/emailService');

const sendMailHandler = async (req, res) => {
  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res
      .status(400)
      .json({ error: 'Please fill in the required fields.' });
  }

  try {
    const result = await sendMail({ to, subject, text, html });
    res.status(200).json({
      message: 'Email sent successfully',
      success: true,
      messageId: result.messageId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendMailHandler };

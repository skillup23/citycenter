import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nameClient, phone, stilist, agreement } = req.body;

    // Replace with your actual bot token and chat ID
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `
      Новое сообщение от ${nameClient} \n
Телефон: ${phone} \n
Выбранный стилист: ${stilist} \n
Согласие на обработку ПД: ${agreement}
    `;

    try {
      // Send the message via the Telegram Bot API
      const response = await axios.post(telegramUrl, {
        chat_id: chatId,
        text: text,
      });

      if (response.data.ok) {
        return res
          .status(200)
          .json({ success: true, message: 'Message sent successfully!' });
      } else {
        return res
          .status(500)
          .json({ success: false, message: 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      return res
        .status(500)
        .json({ success: false, message: 'Error sending message.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}

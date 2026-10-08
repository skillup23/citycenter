import axios from 'axios';
import https from 'node:https';

// family: 0 позволяет системе выбирать доступный стек автоматически.
// Если на сервере задана переменная FORCE_IPV6=true, принудительно берем IPv6.
const isIpv6 = process.env.FORCE_IPV6 === 'true';
const httpsAgent = new https.Agent({
  family: isIpv6 ? 6 : 0,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nameClient, phone, stilist, comment, agreement } = req.body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `
      Новое сообщение от ${nameClient} \n
Телефон: ${phone} \n
Выбранный стилист: ${stilist} \n
Комментарий: ${comment} \n
Согласие на обработку ПД: ${agreement}
    `;

    try {
      const response = await axios.post(
        telegramUrl,
        {
          chat_id: chatId,
          text: text,
        },
        {
          httpsAgent,
          timeout: 10000,
        },
      );

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

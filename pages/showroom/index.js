import Layout from '@/components/Layout';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function ShowRoom() {
  const [userInput, setUserInput] = useState({
    name: '',
    phone: '',
    agreement: false,
    error: '',
    success: false,
  });

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'agreement') {
      setUserInput({
        ...userInput,
        [name]: e.target.checked,
      });
    } else {
      setUserInput({
        ...userInput,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearToast();

    if (!userInput.agreement) {
      showToast('Необходимо согласиться с обработкой данных', 'error');
      return;
    }

    try {
      const response = await axios.post('/api/send-telegram', userInput);

      if (response.status === 200) {
        showToast('Сообщение успешно отправлено!', 'success');
        setUserInput({ name: '', phone: '', agreement: '' });
      } else {
        showToast('Произошла ошибка при отправке', 'error');
      }
    } catch (error) {
      showToast('Произошла ошибка при отправке', 'error');
    }
  };

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      clearToast();
    }, 3000);
  };

  const clearToast = () => {
    setToastMessage('');
    setToastType('');
  };

  return (
    <Layout title="Шоурум для VIP‑клиентов">
      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="title_main mt-10">Шоурум для VIP‑клиентов</h1>

          <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4">
            <div className="flex">
              <label className="text-2xl">Ваше имя:</label>
              <input
                type="text"
                name="name"
                className="ml-4 p-1 text-black"
                value={userInput.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex">
              <label className="text-2xl">Номер телефона:</label>
              <input
                type="tel"
                name="phone"
                value={userInput.phone}
                onChange={handleChange}
                className="ml-4 p-1 text-black"
                required
              />
            </div>
            <div className="flex">
              <label className="flex">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={userInput.agreement}
                  onChange={handleChange}
                  className="w-10"
                  required
                />
                <p>
                  Я согласен на обработку{' '}
                  <Link href={'#'} className="hover:underline">
                    персональных данных
                  </Link>
                </p>
              </label>
            </div>
            <button
              type="submit"
              className="bg-white text-black hover:bg-black hover:text-white"
            >
              Отправить
            </button>
          </form>

          {toastMessage && (
            <div className={`toast ${toastType}`} onClick={clearToast}>
              {toastMessage}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ShowRoom;

export const styles = {
  toast: `
 position: fixed;
 bottom: 20px;
 right: 20px;
 padding: 15px 20px;
 border-radius: 5px;
 font-size: 14px;
 cursor: pointer;
 z-index: 9999;
 `,
  success: `
 background-color: #d4edda;
 border: 1px solid #c3e6cb;
 color: #155724;
 `,
  error: `
 background-color: #f8d7da;
 border: 1px solid #f5c6cb;
 color: #721c24;
 `,
};

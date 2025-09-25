import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function FormShowRoom() {
  const [userInput, setUserInput] = useState({
    nameClient: '',
    phone: '',
    stilist: '',
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
        setUserInput({
          nameClient: '',
          phone: '',
          stilist: '',
          agreement: false,
          error: '',
          success: false,
        });
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
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-20 flex flex-col gap-16"
      >
        <div className="flex gap-40">
          <input
            type="text"
            name="nameClient"
            className="w-1/3 px-2 text-[2.3vw] bg-[#1e1a1b] text-white placeholder:text-white border-b-2 border-white"
            value={userInput.nameClient}
            onChange={handleChange}
            required
            placeholder="ИМЯ"
          />
          <input
            type="tel"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
            className="w-1/3 px-2 text-[2.3vw] bg-[#1e1a1b] text-white placeholder:text-white border-b-2 border-white"
            required
            placeholder="ТЕЛЕФОН"
          />
        </div>
        <div className="flex w-full">
          <select
            name="stilist"
            id="stilist"
            value={userInput.stilist}
            onChange={handleChange}
            className="w-1/3 px-2 text-[2.3vw] bg-[#1e1a1b] text-white placeholder:text-white border-b-2 border-white"
            required
          >
            <option value="">выбрать стилиста</option>
            <option value="АННА ПИНЧУК">АННА ПИНЧУК</option>
            <option value="ГАЛИНА ДЕБРОВА">ГАЛИНА ДЕБРОВА</option>
            <option value="МАРИНА КЛИМЕНКО">МАРИНА КЛИМЕНКО</option>
            <option value="АНЖЕЛИКА ВАРТАНЬЯН">АНЖЕЛИКА ВАРТАНЬЯН</option>
            <option value="ЛИЛИАНА МУС">ЛИЛИАНА МУС</option>
            <option value="СВЕТЛАНА КОШИКОВА">СВЕТЛАНА КОШИКОВА</option>
          </select>
        </div>
        <div className="w-full flex gap-40">
          <label className="flex w-1/3 gap-4 items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={userInput.agreement}
              onChange={handleChange}
              className="w-8 h-8"
              required
            />
            <p className="text-[1.4vw]">
              Я согласен на обработку{' '}
              <Link
                href={'/docs/Политика перс данных.pdf'}
                target="_blank"
                className="hover:underline"
              >
                персональных данных
              </Link>
            </p>
          </label>
          <button
            type="submit"
            className="w-1/3 text-[2.3vw] bg-white text-[#1e1a1b] hover:bg-[#1e1a1b] hover:text-white border-white border"
          >
            Отправить
          </button>
        </div>
      </form>

      {toastMessage && (
        <div className={`toast text-[2vw] ${toastType}`} onClick={clearToast}>
          {toastMessage}
        </div>
      )}
    </>
  );
}

export default FormShowRoom;

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

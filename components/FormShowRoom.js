import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

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
        className="w-full mt-6 sm:mt-20 flex flex-col gap-8 sm:gap-16"
      >
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 lg:gap-40">
          <input
            type="text"
            name="nameClient"
            className="w-full sm:w-1/3 px-2 text-2xl sm:text-[2.3vw] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            value={userInput.nameClient}
            onChange={handleChange}
            required
            placeholder="ИМЯ"
          />
          <input
            type="tel"
            pattern="[0-9]*"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
            className="w-full sm:w-1/3 px-2 text-2xl sm:text-[2.3vw] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            required
            placeholder="ТЕЛЕФОН"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row ">
          <select
            name="stilist"
            id="stilist"
            value={userInput.stilist}
            onChange={handleChange}
            className="w-full sm:w-1/3 px-1 sm:px-2 text-2xl sm:text-[2.3vw] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            required
          >
            <option value="">ВЫБРАТЬ СТИЛИСТА</option>
            <option value="АННА ПИНЧУК">АННА ПИНЧУК</option>
            <option value="ГАЛИНА ДЕБРОВА">ГАЛИНА ДЕБРОВА</option>
            <option value="МАРИНА КЛИМЕНКО">МАРИНА КЛИМЕНКО</option>
            <option value="АНЖЕЛИКА ВАРТАНЬЯН">АНЖЕЛИКА ВАРТАНЬЯН</option>
            <option value="ЛИЛИАНА МУС">ЛИЛИАНА МУС</option>
            <option value="СВЕТЛАНА КОШИКОВА">СВЕТЛАНА КОШИКОВА</option>
          </select>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-12 lg:gap-40">
          <label className="flex w-full sm:w-1/3 gap-4 items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={userInput.agreement}
              onChange={handleChange}
              className="w-8 h-8 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              required
            />
            <p className="text-lg sm:text-[1.4vw]">
              Я согласен на обработку{' '}
              <Link
                href={'/docs/Политика перс данных.pdf'}
                target="_blank"
                className="underline"
              >
                персональных данных
              </Link>
            </p>
          </label>
          <button
            type="submit"
            className="w-full sm:w-1/3 py-2 sm:py-2 mb-10 sm:mb-0 text-2xl sm:text-[2.3vw] bg-white text-[#1e1a1b] hover:bg-[#1e1a1b] hover:text-white border-white border"
          >
            Отправить
          </button>
        </div>
      </form>

      {toastMessage && (
        <div
          className={`toast mb-4 text-lg text-center sm:text-start sm:text-[2vw] ${toastType}`}
          onClick={clearToast}
        >
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
 bottom: 10px;
 right: 20px;
 padding: 10px 15px;
 border-radius: 5px;
 font-size: 16px;
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

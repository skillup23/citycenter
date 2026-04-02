import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

function FormShowRoom() {
  const [userInput, setUserInput] = useState({
    nameClient: '',
    phone: '',
    stilist: '',
    comment: '',
    agreement: false,
    error: '',
    success: false,
  });

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const [buttomText, setButtomText] = useState('Отправить');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'agreement') {
      setUserInput({
        ...userInput,
        [name]: e.target.checked,
      });
    } else if (name === 'phone') {
      // 1. Очищаем от всего, кроме цифр и самого первого плюса
      let cleaned = value.replace(/(?!^\+)[^\d]/g, '');

      // 2. Если в начале 8 — меняем на +7
      if (cleaned.startsWith('8')) {
        cleaned = '+7' + cleaned.substring(1);
      }
      // 3. Если в начале 7 (без плюса) — добавляем плюс
      else if (cleaned.startsWith('7') && !cleaned.startsWith('+7')) {
        cleaned = '+7' + cleaned.substring(1);
      }
      // 4. Если в начале 9 добавляем плюс +79
      else if (cleaned.startsWith('9') && !cleaned.startsWith('+79')) {
        cleaned = '+79' + cleaned.substring(1);
      }

      // 5. Ограничиваем длину (+7 и 10 цифр = 12 символов)
      if (cleaned.length <= 12) {
        setUserInput({
          ...userInput,
          [name]: cleaned,
        });
      }
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
    setButtomText('Отправка...');

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
          comment: '',
          agreement: false,
          error: '',
          success: false,
        });
        setButtomText('Отправить');
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
    }, 10000);
  };

  // const showToast2 = () => {
  //   setToastMessage('Сообщение успешно отправлено!');
  //   setToastType('success');
  //   setTimeout(() => {
  //     clearToast();
  //   }, 10000);
  // };

  const clearToast = () => {
    setToastMessage('');
    setToastType('');
  };

  return (
    <div className="relative mb-6 sm:mb-0">
      {/* <div onClick={showToast2}>тест</div> */}
      <form
        onSubmit={handleSubmit}
        className="w-full mt-6 sm:mt-20 flex flex-col gap-8 sm:gap-16"
      >
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 lg:gap-40">
          <input
            type="text"
            name="nameClient"
            className="w-full sm:w-1/3 px-2 text-2xl sm:text-[2.3vw] 2xl:text-[44px] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            value={userInput.nameClient}
            onChange={handleChange}
            required
            placeholder="ИМЯ"
          />
          <input
            type="tel"
            pattern="^\+7[0-9]{10}$"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
            className="w-full sm:w-1/3 px-2 text-2xl sm:text-[2.3vw] 2xl:text-[44px] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            required
            placeholder="ТЕЛЕФОН"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-20 lg:gap-40">
          <select
            name="stilist"
            id="stilist"
            value={userInput.stilist}
            onChange={handleChange}
            className="w-full sm:w-1/3 px-1 sm:px-2 text-2xl sm:text-[2.3vw] 2xl:text-[44px] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            required
          >
            <option value="">ВЫБРАТЬ СТИЛИСТА</option>
            <option value="АННА ПИНЧУК">АННА ПИНЧУК</option>
            <option value="ГАЛИНА ДЕБРОВА">ГАЛИНА ДЕБРОВА</option>
            <option value="МАРИНА КЛИМЕНКО">МАРИНА КЛИМЕНКО</option>
            <option value="АНЖЕЛИКА ВАРТАНЬЯН">АНЖЕЛИКА ВАРТАНЬЯН</option>
            <option value="ЛИЛИАНА МУС">ЛИЛИАНА МУС</option>
            <option value="СВЕТЛАНА КОШИКОВА">СВЕТЛАНА КОШИКОВА</option>
            <option value="РЫБАЛКИНА ЮЛИЯ">РЫБАЛКИНА ЮЛИЯ</option>
          </select>
          <input
            type="text"
            name="comment"
            className="w-full sm:w-1/3 px-2 text-2xl sm:text-[2.3vw] 2xl:text-[44px] bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            value={userInput.comment}
            onChange={handleChange}
            placeholder="КОММЕНТАРИЙ"
          />
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
            <p className="text-lg sm:text-[1.4vw] 2xl:text-[28px] leading-none">
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
            className="w-full sm:w-1/3 mt-auto py-2 sm:py-4 text-2xl sm:text-[2.3vw] 2xl:text-4xl bg-white text-[#1e1a1b] hover:bg-[#1e1a1b] hover:text-white border-white border"
          >
            {buttomText}
          </button>
        </div>
      </form>

      {toastMessage && (
        <div
          className={`absolute md:relative w-full bottom-6 p-4 bg-white text-[#1e1a1b] text-[5.5vw] text-center sm:text-[2vw] 2xl:text-4xl z-50 animate-slideUp ${toastType}`}
          onClick={clearToast}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default FormShowRoom;

// export const styles = {
//   toast: `
//  bottom: 10px;
//  right: 20px;
//  padding: 10px 15px;
//  border-radius: 5px;
//  font-size: 16px;
//  cursor: pointer;
//  z-index: 9999;
//  background-color: #ffffff;
//  `,
//   success: `
//  border: 1px solid #c3e6cb;
//  color: #155724;
//  `,
//   error: `
//  border: 1px solid #f5c6cb;
//  color: #721c24;
//  `,
// };

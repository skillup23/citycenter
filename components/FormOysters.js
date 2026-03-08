import axios from "axios";
import Link from "next/link";
import { useState } from "react";

function FormOysters() {
  const [userInput, setUserInput] = useState({
    nameClient: "",
    phone: "",
    promocod: "",
    agreement: false,
    error: "",
    success: false,
  });

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [buttomText, setButtomText] = useState("Отправить");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "agreement") {
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
    setButtomText("Отправка...");

    if (!userInput.agreement) {
      showToast("Необходимо согласиться с обработкой данных", "error");
      return;
    }

    try {
      const response = await axios.post(
        "/api/send-telegram-oysters",
        userInput,
      );

      if (response.status === 200) {
        showToast(
          "Сообщение успешно отправлено! \n Ожидайте звонка из ресторана.",
          "success",
        );
        setUserInput({
          nameClient: "",
          phone: "",
          promocod: "",
          agreement: false,
          error: "",
          success: false,
        });
      } else {
        showToast("Произошла ошибка при отправке", "error");
      }
    } catch (error) {
      showToast("Произошла ошибка при отправке", "error");
    }
  };

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setButtomText("Отправить");
      clearToast();
    }, 30000);
  };

  const clearToast = () => {
    setToastMessage("");
    setToastType("");
  };

  return (
    <div className="h-full relative">
      <form onSubmit={handleSubmit} className="h-full gap-8 sm:gap-16">
        <div className="h-full flex flex-col gap-28 2xl:gap-[120px]">
          <input
            type="text"
            name="nameClient"
            className="w-11/12 px-2 text-[2.4vw] leading-none 2xl:text-4xl bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
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
            className="w-11/12 px-2 text-[2.4vw] leading-none 2xl:text-4xl bg-[#1e1a1b] text-white placeholder:text-white rounded-none border-b-2 border-white"
            required
            placeholder="ТЕЛЕФОН"
          />
          <input
            type="text"
            name="promocod"
            className="w-11/12 px-2 text-[2.4vw] leading-none 2xl:text-4xl bg-[#1e1a1b] text-[#FBF79F] placeholder:text-[#FBF79F] rounded-none border-b-2 border-white"
            value={userInput.promocod}
            onChange={handleChange}
            required
            placeholder="ПРОМОКОД"
          />

          <label className="flex w-11/12 gap-4 items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={userInput.agreement}
              onChange={handleChange}
              className="-mt-1 w-8 h-8 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              required
            />
            <p className="text-[2vw] 2xl:text-4xl">
              Я согласен на{" "}
              <Link
                href={"/docs/Политика перс данных.pdf"}
                target="_blank"
                className="underline"
              >
                обработку персональных данных
              </Link>
            </p>
          </label>

          <button
            type="submit"
            className="w-full mt-auto py-2 sm:py-4 text-2xl sm:text-[2.3vw] 2xl:text-4xl bg-white text-[#1e1a1b] hover:bg-[#FBF79F]"
          >
            {buttomText}
          </button>
        </div>
      </form>

      {toastMessage && (
        <div
          className={`absolute w-full bottom-0 p-4 bg-white text-[#1e1a1b] text-lg text-center sm:text-[2vw] 2xl:text-4xl z-50 animate-slideUp ${toastType}`}
          onClick={clearToast}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default FormOysters;

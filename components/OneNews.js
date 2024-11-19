import Image from 'next/image';
import React from 'react';

function OneNews({ img1, img2, img3, img4, text }) {
  return (
    <div className="w-full flex flex-col items-start sm:flex-row gap-8 py-8 sm:py-10 flex-wrap border-b-2">
      {!img1 ? (
        ''
      ) : (
        <Image
          src={img1}
          alt="Новость"
          width={420}
          sizes="100%"
          priority
          className="w-full sm:w-[30%]"
        />
      )}
      {!img2 ? (
        ''
      ) : (
        <Image
          src={img2}
          alt="Новость"
          width={420}
          sizes="100%"
          priority
          className="w-full sm:w-[30%]"
        />
      )}
      {!img3 ? (
        ''
      ) : (
        <Image
          src={img3}
          alt="Новость"
          width={420}
          sizes="100%"
          priority
          className="w-full sm:w-[30%]"
        />
      )}
      {!img4 ? (
        ''
      ) : (
        <Image
          src={img4}
          alt="Новость"
          width={420}
          sizes="100%"
          priority
          className="w-full sm:w-[30%]"
        />
      )}
      <div className="w-full sm:w-[60%] font-classic text-base lg:text-lg xl:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OneNews;

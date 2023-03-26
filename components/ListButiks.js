import React from 'react';
import ImageLink from '@/components/ImageLink';
import text from '../public/butiks/Бренды.png';
import Image from 'next/image';

//получаем данные со старниц бутиков и их категорию
const ListButiks = ({ butiks, category }) => {
  return (
    <div className="grid grid-cols-3 gap-y-12 justify-between items-center my-24 mr-32 ml-5">
      {butiks &&
        butiks
          .filter((item) => item.category === `${category}`) //*фильтруем по категории для отображения нужных на странице
          .map(({ id, logo, url }) => (
            <ImageLink
              key={id}
              href={`/women_clothing/${id}`}
              src={logo}
              width={220}
              alt={url}
            />
          ))}
      <Image
        src={text}
        alt="slide1"
        width="0"
        height="0"
        sizes="100%"
        className="absolute top-1/4 -right-5 w-1/12"
      />
    </div>
  );
};

export default ListButiks;

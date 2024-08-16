import Image from 'next/image';
import ImageLink from './ImageLink';
import Link from 'next/link';
import eventText from '@/public/event_city/смотреть-фотоотчет.png';

const Event = ({ link, img, text }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
      <ImageLink href={link} src={img} width="72" alt={text} cssClass="" />

      <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">{text}</h4>
      <Link href={link}>
        <Image
          src={eventText}
          alt="Событие 1"
          width={300}
          sizes="100%"
          className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
        />
      </Link>
    </div>
  );
};

export default Event;

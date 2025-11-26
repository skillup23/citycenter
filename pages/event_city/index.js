import ImageLink from '@/components/ImageLink';
import Layout from '@/components/Layout';
import { eventArray } from '@/public/data/data';
import eventText from '@/public/event_city/смотреть-фотоотчет.png';
import Image from 'next/image';
import Link from 'next/link';

function EventCity() {
  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-10">МЕРОПРИЯТИЯ</h2>

          <div className="flex mt-2 sm:mt-14 flex-wrap gap-y-6 sm:gap-y-14">
            {eventArray.map((item) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0"
                key={item.id}
              >
                <ImageLink
                  href={item.link}
                  src={item.img}
                  width="128"
                  alt={item.text}
                  cssClass=""
                  target={item.target}
                />

                <h4 className="max-w-[432px] text-center text-3xl md:text-4xl mt-3 sm:mt-6 overflow-hidden whitespace-nowrap text-ellipsis">
                  {item.text}
                </h4>
                <Link href={item.link} target={item.target}>
                  <Image
                    src={eventText}
                    alt="Событие 1"
                    width={300}
                    sizes="100%"
                    className="m-auto mt-3 sm:mt-6 hover:scale-95 ease-in duration-200"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EventCity;

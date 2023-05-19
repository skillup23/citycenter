import React from 'react';
import text from '@/public/scenarios/text.png';
import Image from 'next/image';
import Link from 'next/link';

function Scenario({ schema, schemaMob }) {
  return (
    <div>
      <div className="my-12 md:my-24 mr-14 md:mr-24 lg:mr-20 xl:mr-32 ml-5">
        <Image
          src={schema}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="hidden sm:block w-11/12 ml-auto"
        />
        <Image
          src={schemaMob}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="block sm:hidden w-full ml-auto"
        />
        <h3 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl -mt-[68px] md:-mt-12 lg:-mt-16 xl:-mt-24 text-right w-[250px] sm:w-[320px] lg:w-[450px] xl:w-[550px]">
          И ВСЕ ЭТО <br></br>В ОДНОМ МЕСТЕ<br></br>
          <Link href="88612134705">8 (861) 213 47 05</Link>
        </h3>
        <Image
          src={text}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-[160px] sm:top-1/4 left-0 w-[60px] sm:w-1/12"
        />
      </div>
    </div>
  );
}

export default Scenario;

import React from 'react';
import text from '@/public/scenarios/text.png';
import Image from 'next/image';
import Link from 'next/link';

function Scenario({ scena }) {
  return (
    <div>
      <div className="my-24 mr-32 ml-5">
        <Image
          src={scena}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="w-11/12 ml-auto"
        />
        <h3 className="text-8xl -mt-24 text-right w-[550px]">
          И ВСЕ ЭТО <br></br>В ОДНОМ МЕСТЕ<br></br>
          <Link href="88612134705">8 (861) 213 47 05</Link>
        </h3>
        <Image
          src={text}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-1/4 left-0 w-1/12"
        />
      </div>
    </div>
  );
}

export default Scenario;

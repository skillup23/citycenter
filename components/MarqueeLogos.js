import { logosData } from "@/public/data/data";
import Image from "next/image";
import Link from "next/link";

export default function MarqueeLogos() {
  // Создаем два одинаковых массива для бесконечной анимации
  const logosDuplicated = [...logosData, ...logosData];

  return (
    <div className="relative overflow-hidden py-8 ">
      <div className="marquee-container relative">
        {/* Первая бегущая строка */}
        <div className="marquee-track flex animate-marquee whitespace-nowrap">
          {logosDuplicated.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="inline-flex mx-6 sm:mx-8 transition-transform duration-300"
            >
              <Link href={logo.url} rel="noopener noreferrer" className="block">
                <div className="relative w-24 h-12 md:w-40 md:h-16 flex items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    width={120}
                    height={80}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index < 8}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Вторая бегущая строка для плавного перехода */}
        {/* <div className="marquee-track flex animate-marquee2 whitespace-nowrap absolute top-0">
          {logosDuplicated.map((logo, index) => (
            <div
              key={`${logo.id}-${index}-duplicate`}
              className="inline-flex mx-6 sm:mx-8 transition-transform duration-300 "
            >
              <Link href={logo.url} rel="noopener noreferrer" className="block">
                <div className="relative w-24 h-12 md:w-40 md:h-16 flex items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    width={120}
                    height={80}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

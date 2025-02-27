import ImageLink from "@/components/ImageLink";
import Image from "next/image";
import text from "../public/butiks/Бренды.png";

//получаем данные со страниц бутиков и их категорию
const ListButiks = ({ butiks, category, butiksUrl, noBrend, children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 justify-between items-center justify-items-center lg:justify-items-start my-12 md:my-24 mx-5 lg:mr-32 lg:ml-5">
      {butiks &&
        butiks
          .filter((item) => item.category.includes(`${category}`)) //*фильтруем по категории для отображения нужных на странице
          .map(({ id, logo, url }) => (
            <ImageLink
              key={id}
              href={`/butiks/${butiksUrl}/${id}`}
              src={logo}
              // width={56}
              alt={url}
            />
          ))}
      {noBrend == true ? (
        ""
      ) : (
        <Image
          src={text}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-[10%] -right-5 w-1/12 hidden lg:block"
        />
      )}

      {children}
    </div>
  );
};

export default ListButiks;

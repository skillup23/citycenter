import Image from "next/image";

function MenuOystersBlock({ menu1, menu2, menu3, menu4, menu5, menu6 }) {
  return (
    <div className="mt-6 flex gap-6">
      <div className="flex flex-col gap-6">
        <Image
          src={menu1}
          alt="Меню ресторана"
          width="768"
          height="666"
          className="hover:scale-[1.02] ease-in duration-200"
        />
        <div className="flex gap-6">
          <Image
            src={menu2}
            alt="Меню ресторана"
            width="372"
            height="441"
            className="hover:scale-[1.02] ease-in duration-200"
          />
          <Image
            src={menu3}
            alt="Меню ресторана"
            width="372"
            height="441"
            className="hover:scale-[1.02] ease-in duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <Image
            src={menu4}
            alt="Меню ресторана"
            width="372"
            height="441"
            className="hover:scale-[1.02] ease-in duration-200"
          />
          <Image
            src={menu5}
            alt="Меню ресторана"
            width="372"
            height="441"
            className="hover:scale-[1.02] ease-in duration-200"
          />
        </div>
        <Image
          src={menu6}
          alt="Меню ресторана"
          width="768"
          height="666"
          className="hover:scale-[1.02] ease-in duration-200"
        />
      </div>
    </div>
  );
}

export default MenuOystersBlock;

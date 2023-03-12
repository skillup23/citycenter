import React from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import SliderBytik from "@/components/SliderBytik";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3000/api/butiks/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { butik: data },
  };
};

function ButikWomen({ butik }) {
  const router = useRouter();
  const {
    url,
    logo,
    description1,
    description2,
    floor,
    tel,
    telUrl,
    instagram,
    image,
  } = butik || {};
  // const { image1, image2 } = image || {};

  if (!butik) {
    return (
      <Layout title={url}>
        <h2 className='text-3xl text-center mt-20'>
          Данного бутика не существует...
        </h2>
        <div className='flex'>
          <button
            type='button'
            className='bg-white py-3 px-6 text-black m-auto mt-10 text-2xl'
            onClick={() => router.back()}
          >
            Вернуться назад
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={url}>
      <section className='mt-10'>
        <div className='container mx-auto flex gap-10'>
          <div className='w-1/2'>
            <SliderBytik data={image} dots={true} />
          </div>

          <div className='w-1/2 flex flex-col justify-between items-start mr-8 pb-2'>
            <Image
              src={logo}
              alt={url}
              width={200}
              height='0'
              sizes='100%'
              className='self-center'
            />
            <div>
              <p className='text-xl text-justify tracking-wide'>
                {description1}
              </p>
              <p className='text-xl text-justify tracking-wide mt-6'>
                {description2}
              </p>
            </div>
            <div>
              <div className='flex flex-row w-fill items-center mt-6'>
                <FaMapMarkerAlt className='text-3xl mr-5' />
                <h4 className='text-2xl'>{floor}</h4>
              </div>
              <div className='flex flex-row w-fill items-center mt-2'>
                <FaPhoneAlt className='text-2xl mr-5' />
                <Link href={telUrl} className='text-2xl'>
                  {tel}
                </Link>
              </div>
              <div className='flex flex-row w-fill items-center mt-2'>
                <BsInstagram className='text-3xl mr-5' />
                <Link
                  href={`https://www.instagram.com/${instagram}`}
                  target='_blank'
                  className='text-2xl'
                >
                  @{instagram}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ButikWomen;

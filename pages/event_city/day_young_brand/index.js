import React from 'react';
import { dayYoungBrand } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function DayYoungBrand() {
  return (
    <ImageGallery
      title={'День модного бренда C Ксенией Генераленко'}
      array={dayYoungBrand}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/R369/E1eCq9L1G/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://cloud.mail.ru/public/R369/E1eCq9L1G'}
    />
  );
}

export default DayYoungBrand;

import React from 'react';
import { giorgioFakoshima } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function Birthday() {
  return (
    <ImageGallery
      title={'Giorgio x Fakoshima'}
      array={giorgioFakoshima}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/1Dyc/TnuWahYYa/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://cloud.mail.ru/public/1Dyc/TnuWahYYa'}
    />
  );
}

export default Birthday;

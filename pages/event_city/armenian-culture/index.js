import React from 'react';
import { armenianCulture } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function ArmenianCulture() {
  return (
    <ImageGallery
      title={'Армянская культура'}
      array={armenianCulture}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/8L3X/JtQihUYa9/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://cloud.mail.ru/public/8L3X/JtQihUYa9'}
    />
  );
}

export default ArmenianCulture;

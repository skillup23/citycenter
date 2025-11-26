import React from 'react';
import { birthday2025 } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function Birthday() {
  return (
    <ImageGallery
      title={'ДЕНЬ РОЖДЕНИЯ СИТИ ЦЕНТРА'}
      array={birthday2025}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/3ux2/2D6L7LZY2/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://cloud.mail.ru/public/3ux2/2D6L7LZY2'}
    />
  );
}

export default Birthday;

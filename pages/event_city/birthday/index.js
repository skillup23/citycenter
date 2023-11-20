import React from 'react';
import { birthday } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function Birthday() {
  return (
    <ImageGallery
      title={'ДЕНЬ РОЖДЕНИЯ СИТИ ЦЕНТРА'}
      array={birthday}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/oNbe/aNtq45hoq/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://aksenovmike.gallery.photo/gallery/city-center1/'}
    />
  );
}

export default Birthday;

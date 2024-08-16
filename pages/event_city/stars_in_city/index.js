import React from 'react';
import { starsInCity } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function StarsInCity() {
  return (
    <ImageGallery
      title={'Звезды в Сити'}
      array={starsInCity}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/bsWF/cemdZ8aCQ/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://cloud.mail.ru/public/bsWF/cemdZ8aCQ'}
    />
  );
}

export default StarsInCity;

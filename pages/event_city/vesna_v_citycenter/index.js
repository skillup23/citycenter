import React from 'react';
import { mart } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function VesnaVCitycenter() {
  return (
    <ImageGallery
      title={'ВЕСНА В ТРК «СИТИ ЦЕНТР»'}
      array={mart}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/4LDF/wVShYKeyF/image%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://disk.yandex.ru/d/dns2FAWwmw680w'}
    />
  );
}

export default VesnaVCitycenter;

import React from 'react';
import { champion } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function Champion() {
  return (
    <ImageGallery
      title={'КАК ВОСПИТАТЬ ЧЕМПИОНА'}
      array={champion}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/YDSK/EogtTFc6L/'
      }
      linkEnd={'.jpg'}
      linkCloud={'https://cloud.mail.ru/public/YDSK/EogtTFc6L'}
    />
  );
}

export default Champion;

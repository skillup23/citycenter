import React from 'react';
import { flamenko } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function Flamenko() {
  return (
    <ImageGallery
      title={'ФОТОВЫСТАВКА «ФЛАМЕНКО»'}
      array={flamenko}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/TfHX/NzSFysuJg/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://cloud.mail.ru/public/TfHX/NzSFysuJg'}
    />
  );
}

export default Flamenko;

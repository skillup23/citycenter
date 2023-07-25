// import Layout from '@/components/Layout';
// import Popup from '@/components/Popup';
// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { june } from '@/public/data/data';
import ImageGallery from '@/components/ImageGallery';

function June() {
  return (
    <ImageGallery
      title={'ДЕНЬ ЗАЩИТЫ ДЕТЕЙ'}
      array={june}
      linkBegin={
        'https://thumb.cloud.mail.ru/weblink/thumb/xw1/fKxs/Levse2U8M/foto%20%28'
      }
      linkEnd={'%29.jpg'}
      linkCloud={'https://disk.yandex.ru/d/2friRrVMLOp54Q'}
    />
  );
}

export default June;

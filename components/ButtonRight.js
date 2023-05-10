import React from 'react';
import phone from '@/public/site_img/phone-link.png';
import mail from '@/public/site_img/mail-link.png';
import event from '@/public/site_img/ikonka-event.png';
import ImageLink from './ImageLink';

function ButtonRight() {
  return (
    <div className="fixed top-1/3 right-2 z-50 w-12 md:w-16 lg:w-20">
      <ImageLink
        href="tel:88612134705"
        src={phone}
        alt="Телефон"
        width={20}
        cssClass=""
      />
      <ImageLink
        href="mailto:info@citycenter.ru"
        src={mail}
        alt="Почта"
        width={20}
        cssClass="mt-3"
      />
      <ImageLink
        href="/event_city"
        src={event}
        alt="События"
        width={20}
        cssClass="mt-3"
      />
    </div>
  );
}

export default ButtonRight;

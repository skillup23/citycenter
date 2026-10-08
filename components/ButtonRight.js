import event from '@/public/site_img/ikonka-event.png';
import mail from '@/public/site_img/mail-link.png';
import phone from '@/public/site_img/phone-link.png';
import ImageLink from './ImageLink';

function ButtonRight() {
  return (
    // Внизу справа на всех экранах: на трети высоты кнопки закрывали текст баннеров
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-4 z-50 w-11 md:w-12">
      <ImageLink
        href="tel:88612134700"
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
        cssClass="mt-2 md:mt-3"
      />
      <ImageLink
        href="/event_city"
        src={event}
        alt="События"
        width={20}
        cssClass="mt-2 md:mt-3"
      />
    </div>
  );
}

export default ButtonRight;

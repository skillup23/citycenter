import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { shopList, eventArray } from '@/public/data/data';
import { butiks } from '@/public/data/butiks';

const SITE = 'https://www.citycenter.ru';

// Словарь статических разделов верхнего уровня
const STATIC_ROUTES = {
  butiks: { label: 'Бутики', href: '/#butiki' },
  contacts: { label: 'Контакты', href: '/contacts' },
  'cookie-policy': {
    label: 'Политика использования cookie',
    href: '/cookie-policy',
  },
  documents: { label: 'Юридическая информация', href: '/documents' },
  event_city: { label: 'События', href: '/event_city' },
  events: { label: 'Кинотеатр', href: '/events' },
  marketing: { label: 'Рекламодателям', href: '/marketing' },
  news: { label: 'Новости и акции', href: '/news' },
  parking: { label: 'Парковка', href: '/parking' },
  rent: { label: 'Арендаторам', href: '/rent' },
  restoran: { label: 'Рестораны и кафе', href: '/restoran' },
  scenarios: { label: 'Сценарии', href: '/scenarios' },
  services: { label: 'Сервисы', href: '/services' },
  showroom: { label: 'Шоурум', href: '/showroom' },
};

// Приводим текст к аккуратному виду (если он передан капсом, например «КНИГИ» -> «Книги»)
function formatCrumbLabel(text) {
  if (!text) return '';
  const clean = String(text).trim();
  if (clean === clean.toUpperCase() && clean.length > 4) {
    return clean.charAt(0) + clean.slice(1).toLowerCase();
  }
  return clean;
}

export default function Breadcrumbs({ currentTitle }) {
  const { asPath } = useRouter();
  const cleanPath = asPath.split(/[?#]/)[0];

  // На главной странице крошки не показываем
  if (cleanPath === '/' || !cleanPath) return null;

  const segments = cleanPath.split('/').filter(Boolean);
  const items = [{ label: 'Главная', href: '/' }];

  let accumulatedPath = '';

  segments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // 1. Первый сегмент (/butiks, /contacts, /event_city и т.д.)
    if (index === 0) {
      if (STATIC_ROUTES[segment]) {
        items.push({
          label: STATIC_ROUTES[segment].label,
          href: STATIC_ROUTES[segment].href,
        });
      } else {
        items.push({
          label: formatCrumbLabel(currentTitle) || segment,
          href: accumulatedPath,
        });
      }
      return;
    }

    // 2. Вложенные страницы внутри /butiks/[category]/[slug]
    if (segments[0] === 'butiks') {
      // Второй сегмент — категория (например, women_clothing или books)
      if (index === 1) {
        if (segment === 'books') {
          items.push({ label: 'Книги', href: accumulatedPath });
          return;
        }
        const categoryObj = shopList.find(
          (shop) => shop.link === `/butiks/${segment}`,
        );
        items.push({
          label: categoryObj
            ? formatCrumbLabel(categoryObj.title)
            : formatCrumbLabel(currentTitle) || segment,
          href: accumulatedPath,
        });
        return;
      }

      // Третий сегмент — карточка конкретного бутика (например, twinset-milano)
      if (index === 2) {
        const butikObj = butiks.find(
          (b) =>
            b.slug === segment ||
            b.url === segment ||
            String(b.id) === String(segment),
        );
        items.push({
          label: butikObj?.name || formatCrumbLabel(currentTitle) || segment,
          href: accumulatedPath,
        });
        return;
      }
    }

    // 3. Вложенные страницы внутри /event_city/[slug]
    if (segments[0] === 'event_city' && index === 1) {
      const eventObj = eventArray.find(
        (ev) => ev.link.replace(/\/$/, '') === accumulatedPath,
      );
      items.push({
        label: eventObj
          ? formatCrumbLabel(eventObj.text)
          : formatCrumbLabel(currentTitle) || segment,
        href: accumulatedPath,
      });
      return;
    }

    // 4. Любые другие вложенные страницы (news/[id], services/[slug] и т.д.)
    const butikFallback = butiks.find(
      (b) =>
        b.slug === segment ||
        b.url === segment ||
        String(b.id) === String(segment),
    );
    items.push({
      label:
        (isLast && formatCrumbLabel(currentTitle)) ||
        butikFallback?.name ||
        segment,
      href: accumulatedPath,
    });
  });

  // JSON-LD микроразметка для поисковых систем (Яндекс / Google)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: item.href.startsWith('http') ? item.href : `${SITE}${item.href}`,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <nav
        aria-label="Хлебные крошки"
        className="container mx-auto px-5 sm:px-0 pt-4 pb-4 text-sm sm:text-xl text-gray-400"
      >
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={`${item.href}-${index}`}
                className="flex items-center gap-1.5 sm:gap-2"
              >
                {index > 0 && <span className=" select-none">/</span>}
                {isLast ? (
                  <span className="font-medium truncate max-w-[220px] sm:max-w-none">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-100 hover:scale-105 ease-in duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// Проверки по аудиту сайта: запускать против работающего `next start`.
// BASE=http://localhost:3100 npm run check
const BASE = process.env.BASE || 'http://localhost:3000';

const results = [];
const cache = new Map();

async function get(path) {
  if (cache.has(path)) return cache.get(path);
  const res = await fetch(BASE + path, { redirect: 'manual' });
  const page = { status: res.status, headers: res.headers, html: await res.text() };
  cache.set(path, page);
  return page;
}

function check(name, fn) {
  results.push({ name, fn });
}

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

// ---------------------------------------------------------------- проверки

check('главная отвечает 200', async () => {
  const { status } = await get('/');
  assert(status === 200, `статус ${status}`);
});

// #2: Метрика грузится только после согласия — в серверном HTML её нет
check('#2 в HTML нет загрузчика Метрики', async () => {
  const { html } = await get('/');
  assert(!html.includes('mc.yandex.ru'), 'найден mc.yandex.ru');
});

// #5
check('#5 lang="ru"', async () => {
  const { html } = await get('/');
  assert(/<html[^>]*lang="ru"/.test(html), 'нет <html lang="ru">');
});

// #3, #4: первый экран — слайдер: тизер и два баннера
const heroHtml = async () => {
  const { html } = await get('/');
  return html.match(/<section[^>]*data-hero-slider[^]*?<\/section>/)?.[0] ?? '';
};

check('#4 первый слайд — тизер с постером, без звука', async () => {
  const hero = await heroHtml();
  const video = hero.match(/<video[^>]*poster="\/video\/teaser-poster\.jpg"[^>]*>/)?.[0];
  assert(video, 'в слайдере нет <video poster="/video/teaser-poster.jpg">');
  for (const attr of ['muted', 'playsinline']) {
    assert(new RegExp(`\\s${attr}[\\s=>]`, 'i').test(video), `у видео нет ${attr}`);
  }
  // по кругу крутится слайдер, а не видео: иначе тизер не закончится
  assert(!/\sloop[\s=>]/i.test(video), 'у тизера стоит loop');
});

check('#4 в слайдере оба баннера 16:9', async () => {
  const hero = await heroHtml();
  for (const banner of ['banner-1_16x9.webp', 'banner-2_16x9.webp']) {
    assert(hero.includes(banner), `нет баннера ${banner}`);
  }
});

check('#4 полной версии ролика нет', async () => {
  const { html } = await get('/');
  assert(!html.includes('Смотреть ролик'), 'осталась кнопка «Смотреть ролик»');
  assert(!html.includes('promo-1080'), 'осталась ссылка на promo-1080.mp4');
});

// #8–#11: SEO-теги на основных страницах
const PAGES = [
  '/', '/contacts', '/parking', '/rent', '/marketing', '/showroom', '/services',
  '/events', '/event_city', '/news', '/documents', '/butiks/children',
];
const SITE = 'https://www.citycenter.ru';
const meta = (html, attr, name) =>
  html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`))?.[1];

check('#8 description есть и не повторяется', async () => {
  const seen = new Map();
  for (const p of PAGES) {
    const d = meta((await get(p)).html, 'name', 'description');
    assert(d, `${p}: нет description`);
    assert(!seen.has(d), `${p}: description как у ${seen.get(d)}`);
    seen.set(d, p);
  }
});

check('#10 og:image с абсолютным адресом', async () => {
  for (const p of PAGES) {
    const img = meta((await get(p)).html, 'property', 'og:image');
    assert(img?.startsWith('https://'), `${p}: og:image = ${img}`);
  }
});

check('#10 canonical совпадает с адресом страницы', async () => {
  for (const p of PAGES) {
    const c = (await get(p)).html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1];
    const want = p === '/' ? `${SITE}/` : SITE + p;
    assert(c === want, `${p}: canonical = ${c}`);
  }
});

check('#9 ровно один JSON-LD ShoppingCenter', async () => {
  for (const p of PAGES) {
    const blocks = [...(await get(p)).html.matchAll(/<script type="application\/ld\+json"[^>]*>([^<]*)<\/script>/g)];
    assert(blocks.length === 1, `${p}: JSON-LD блоков ${blocks.length}`);
    assert(JSON.parse(blocks[0][1])['@type'] === 'ShoppingCenter', `${p}: не ShoppingCenter`);
  }
});

check('#11 в title нет старого написания', async () => {
  for (const p of PAGES) {
    const t = (await get(p)).html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    assert(!t.includes('&quot;СИТИ ЦЕНТР&quot;'), `${p}: ${t}`);
  }
});

// #7
check('#7 ровно один H1 на странице', async () => {
  for (const p of PAGES) {
    const n = ((await get(p)).html.match(/<h1[\s>]/g) || []).length;
    assert(n === 1, `${p}: H1 — ${n}`);
  }
});

// #6: robots.txt и полная карта сайта
check('#6 robots.txt ссылается на sitemap', async () => {
  const { html } = await get('/robots.txt');
  assert(html.includes('Sitemap: https://www.citycenter.ru/sitemap.xml'), 'нет строки Sitemap:');
});

check('#6 в sitemap не меньше 50 адресов, все отвечают 200', async () => {
  const { html } = await get('/sitemap.xml');
  const locs = [...html.matchAll(/<loc>https:\/\/www\.citycenter\.ru([^<]*)<\/loc>/g)].map((m) => m[1]);
  assert(locs.length >= 50, `адресов ${locs.length}`);
  const bad = [];
  for (const p of locs) {
    const { status } = await get(p || '/');
    if (status !== 200) bad.push(`${p} ${status}`);
  }
  assert(!bad.length, bad.join(', '));
});

check('несуществующий бутик — 404, а не 500', async () => {
  const { status } = await get('/butiks/clocks/99999');
  assert(status === 404, `статус ${status}`);
});

// #15, #16, #21, #22: навигация
const titleOf = (html) => html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';

check('#15 /events — «Кинотеатр», /event_city — «События»', async () => {
  assert(titleOf((await get('/events')).html).startsWith('Кинотеатр'), '/events: ' + titleOf((await get('/events')).html));
  assert(titleOf((await get('/event_city')).html).startsWith('События'), '/event_city: ' + titleOf((await get('/event_city')).html));
});

check('#16 якорь #butiki, старый #bitiki работает', async () => {
  const { html } = await get('/');
  assert(!html.includes('href="/#bitiki"'), 'ссылки ведут на /#bitiki');
  assert(html.includes('id="butiki"'), 'нет id="butiki"');
  assert(html.includes('id="bitiki"'), 'нет id="bitiki"');
});

check('#21 ссылка «Все новости и акции»', async () => {
  const { html } = await get('/');
  assert(/<a[^>]*href="\/news"[^>]*>[^<]*Все новости и акции/.test(html), 'нет ссылки на /news');
});

check('#22 нет ссылок по http://', async () => {
  const { html } = await get('/');
  assert(!html.includes('href="http://'), 'найдена ссылка http://');
});

// #14: служебные заголовки и кэш
check('#14 нет X-Powered-By', async () => {
  const { headers } = await get('/');
  assert(!headers.get('x-powered-by'), `X-Powered-By: ${headers.get('x-powered-by')}`);
});

check('#14 видео кэшируется надолго', async () => {
  const res = await fetch(BASE + '/video/teaser-poster.jpg', { method: 'HEAD' });
  const maxAge = Number((res.headers.get('cache-control') || '').match(/max-age=(\d+)/)?.[1] ?? 0);
  assert(maxAge >= 86400, `Cache-Control: ${res.headers.get('cache-control')}`);
});

// #13: sizes="100%" браузер не понимает и грузит картинку на ширину экрана (до 3840 px)
check('#13 на главной нет sizes="100%"', async () => {
  const n = ((await get('/')).html.match(/sizes="100%"/g) || []).length;
  assert(n === 0, `sizes="100%" — ${n} шт.`);
});

// ---------------------------------------------------------------- запуск

let failed = 0;
for (const { name, fn } of results) {
  try {
    await fn();
    console.log(`PASS  ${name}`);
  } catch (e) {
    failed++;
    console.log(`FAIL  ${name}: ${e.message}`);
  }
}
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exitCode = failed ? 1 : 0;

export { get, assert };

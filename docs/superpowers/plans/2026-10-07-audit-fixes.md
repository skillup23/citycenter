# Доработки citycenter.ru — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Исправить 22 пункта аудита, разобрать падения процесса и поставить промо-ролик на первый экран главной.

**Architecture:** Правки в существующем Next.js 13 (pages router, Tailwind). Новые компоненты `HeroVideo` и `VideoModal`, генератор sitemap в `prebuild`, общие SEO-теги в `Layout`. Проверка — node-скрипт `scripts/check-audit.mjs`, который ходит по запущенному `next start` и проверяет HTML/заголовки; плюс визуальная проверка во встроенном браузере на 1440 и 375 px.

**Tech Stack:** Next.js 13.1.6, React 18, Tailwind 3, ffmpeg (кодирование видео, вне проекта), Node 24 (локально).

**Spec:** `docs/superpowers/specs/2026-10-07-audit-fixes-design.md`

## Global Constraints

- Название в текстах, title, description, разметке: **ТРК «Сити Центр»**.
- Next.js не обновлять; новых npm-зависимостей не добавлять.
- Сервер не трогать; nginx — только файл `deploy/nginx-citycenter.conf`.
- Файл `.env` не коммитить и не менять.
- Каждая задача — отдельный коммит в ветке `audit-fixes`, сообщение на русском, в конце `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Исходники видео: `C:\Users\k1\AppData\Roaming\Claude\scratch-workspaces\35b10b00-8ea5-477b-8ed7-8d5ded0f3489\b266f929-929f-4487-8cc7-092f6d50b3ec\scratch-2026-10-01-3f3aea\out\citycenter-promo.mp4` и `…\citycenter-promo-3min.mp4`; оригиналы не изменять.

## Review Focus

- Повторный визит после «Отклонить» и после «Принять»: Метрика не грузится / грузится сразу, баннер не показывается — проверка в Task 2.
- Телефон с режимом энергосбережения (iOS Low Power), где autoplay запрещён: постер виден, кнопка «Смотреть ролик» работает — Task 4 (проверка `play()` rejection).
- Открыть и закрыть модальное окно несколько раз подряд: звук предыдущего показа не продолжается, прокрутка страницы восстанавливается — Task 5.
- Медленная сеть (DevTools «Slow 4G»): первый экран не пустой до загрузки видео — постер, Task 4.
- Ссылки, разосланные раньше (`/#bitiki`, `/events`, `/event_city`), продолжают открываться — Task 9.

---

### Task 1: Каркас проверок и локальный запуск

**Files:**
- Create: `scripts/check-audit.mjs`
- Modify: `package.json` (скрипт `"check": "node scripts/check-audit.mjs"`)

**Interfaces:**
- Produces: `check(name: string, fn: () => Promise<void>)`; `get(path: string) → {status, headers, html}` с базой `process.env.BASE || 'http://localhost:3000'`; код выхода 1, если хоть одна проверка упала. Последующие задачи дописывают проверки в этот файл.

- [ ] **Step 1:** `npm ci`, `npm run build`, `npx next start -p 3000` (в фоне). Ожидается: сборка без ошибок, главная отвечает 200.
- [ ] **Step 2:** Написать каркас и первую проверку `главная отвечает 200`. `npm run check` → PASS.
- [ ] **Step 3:** Коммит «Скрипт проверок по аудиту».

### Task 2: Метрика только после согласия, lang="ru" (#2, #5)

**Files:** Modify `pages/_document.js`, `scripts/check-audit.mjs`

- [ ] **Step 1: Проверки:** HTML главной не содержит `mc.yandex.ru` (SSR-разметка); содержит `<html lang="ru"`.
- [ ] **Step 2:** `npm run check` → обе FAIL.
- [ ] **Step 3:** В `_document.js` удалить inline-скрипт Метрики и `<noscript>`-пиксель; `lang="ru"`. `CookieBanner` не менять.
- [ ] **Step 4:** Rebuild + check → PASS. В браузере (чистый профиль): до клика нет запросов к `mc.yandex.ru`; «Принять» → `tag.js` загружен; перезагрузка → Метрика сразу, баннера нет; «Отклонить» в новом профиле → после перезагрузки запросов нет.
- [ ] **Step 5:** Коммит.

### Task 3: Видео для веба

**Files:** Create `public/video/teaser-1080.webm`, `teaser-1080.mp4`, `teaser-720.mp4`, `teaser-poster.jpg`, `promo-1080.mp4`, `promo-poster.jpg`; `scripts/encode-video.sh` (команды ffmpeg, для повторяемости).

- [ ] **Step 1:** Кодировать: тизер без звука (`-an`), H.264 `-crf 26 -preset slow -movflags +faststart`, VP9 `-crf 36 -b:v 0`, 720p — `-vf scale=1280:-2`; промо — H.264 `-crf 24`, AAC 128k, `+faststart`; постеры — кадр с 1-й секунды тизера и с 2-й секунды промо, `-q:v 4`.
- [ ] **Step 2:** Проверить размеры: teaser ≤ 3 МБ каждый, 720p ≤ 1,5 МБ, постеры ≤ 150 КБ, промо ≈ 20 МБ (допуск до 30 МБ). При превышении — поднять CRF на 2 и повторить.
- [ ] **Step 3:** Коммит.

### Task 4: HeroVideo на первом экране (#3, #4)

**Files:** Create `components/HeroVideo.js`; Modify `pages/index.js` (заменить блок `SliderMain` и скрытый мобильный блок), `components/Header.js` (мобильный логотип), `scripts/check-audit.mjs`

**Interfaces:**
- Produces: `<HeroVideo onOpen={() => void} />`; кнопка с текстом «Смотреть ролик», `aria-haspopup="dialog"`.

- [ ] **Step 1: Проверки:** на главной есть `<video` с `poster="/video/teaser-poster.jpg"`, `muted`, `playsinline`, `loop`; есть кнопка «Смотреть ролик».
- [ ] **Step 2:** check → FAIL.
- [ ] **Step 3:** Реализовать: контейнер `aspect-video w-full`, `<source media="(max-width: 767px)" src="/video/teaser-720.mp4">`, затем webm и mp4 1080; `preload="metadata"`; при `matchMedia('(prefers-reduced-motion: reduce)')` не вызывать `play()`; `play().catch(() => {})` — постер остаётся. Кнопка поверх видео внизу слева, ≥ 44×44, видимый `focus-visible`. Импорт `SliderMain` из `index.js` убрать, файл компонента не удалять.
- [ ] **Step 4:** Логотип: на < 1024 px в шапке виден логотип ТРК (сейчас `logoBlackMob` 0×0) — задать размеры контейнеру/`width`+`height`.
- [ ] **Step 5:** check → PASS; браузер 375 и 1440: видео играет, постер до загрузки, логотип виден.
- [ ] **Step 6:** Коммит.

### Task 5: VideoModal с полной версией

**Files:** Create `components/VideoModal.js`; Modify `pages/index.js`

**Interfaces:**
- Consumes: `HeroVideo onOpen`.
- Produces: `<VideoModal open={boolean} onClose={() => void} />`.

- [ ] **Step 1:** Реализовать: `role="dialog" aria-modal="true" aria-label="Промо-ролик ТРК «Сити Центр»"`; `<video controls autoPlay playsInline poster="/video/promo-poster.jpg" src={open ? '/video/promo-1080.mp4' : undefined}>`; закрытие — Esc, крестик (`aria-label="Закрыть"`), клик по фону; при закрытии видео ставится на паузу и размонтируется; `document.body.style.overflow` восстанавливается; фокус возвращается на кнопку «Смотреть ролик».
- [ ] **Step 2:** Браузер: до клика нет запросов к `promo-1080.mp4`; открыть → звук и контролы; Esc → тишина, прокрутка работает; открыть/закрыть 3 раза подряд — без наложения звука.
- [ ] **Step 3:** Коммит.

### Task 6: SEO-теги в Layout (#8, #9, #10, #11)

**Files:** Modify `components/Layout.js`, все страницы, вызывающие `Layout` без `description`; Create `public/og/default.jpg` (1200×630 из постера промо); `scripts/check-audit.mjs`

**Interfaces:**
- Produces: `Layout({ title, description, image?, isHome })`; canonical/og:url = `https://www.citycenter.ru` + `router.asPath` без query и hash.

- [ ] **Step 1: Проверки** для `/`, `/contacts`, `/parking`, `/rent`, `/marketing`, `/showroom`, `/services`, `/events`, `/event_city`, `/news`, `/documents`, `/butiks/children`: description есть и нигде не повторяется; есть `og:image` с абсолютным URL; `link rel="canonical"` совпадает с адресом страницы; на каждой странице ровно один `application/ld+json` с `"@type":"ShoppingCenter"`; title не содержит `ТРК "СИТИ ЦЕНТР"`.
- [ ] **Step 2:** check → FAIL.
- [ ] **Step 3:** Реализовать: суффикс title — ` — ТРК «Сити Центр»`; JSON-LD: name «ТРК «Сити Центр»», address (Краснодар, ул. Индустриальная, 2, Краснодарский край, RU), geo 45.0015 / 38.96194, telephone `+7-861-213-47-00`, email `info@citycenter.ru`, openingHours `Mo-Su 10:00-22:00`, url, `sameAs` [`https://vk.com/trkcitycentr`, `https://t.me/ciiitycenter`]; `twitter:card` = `summary_large_image`. Description для каждой страницы — 1 предложение по содержанию страницы, ≤ 160 символов; для `[id]`-страниц бутиков и услуг — из названия объекта.
- [ ] **Step 4:** check → PASS. Коммит.

### Task 7: Заголовки H1 (#7)

**Files:** Modify `components/DocumentsPage.js` (H1 → H2 при использовании на главной: проп `headingLevel`), `pages/parking/index.js`, `pages/events/index.js`, `pages/event_city/index.js`, `scripts/check-audit.mjs`

- [ ] **Step 1: Проверка:** на страницах из Task 6 ровно один `<h1`.
- [ ] **Step 2–4:** FAIL → реализовать (на `/documents` H1 остаётся) → PASS. Коммит.

### Task 8: Sitemap и robots (#6)

**Files:** Create `scripts/generate-sitemap.mjs`; Modify `package.json` (`"prebuild": "node scripts/generate-sitemap.mjs"`), `public/robots.txt`; `public/sitemap.xml` (генерируется, коммитится); `scripts/check-audit.mjs`

- [ ] **Step 1: Проверки:** `robots.txt` содержит `Sitemap: https://www.citycenter.ru/sitemap.xml`; в sitemap ≥ 50 `<loc>`; каждый `<loc>` (выборка всех) отвечает 200 на локальном сервере.
- [ ] **Step 2:** FAIL.
- [ ] **Step 3:** Генератор: статические страницы — обход `pages/` (кроме `_*`, `api`, `404`, динамических `[id]`); динамические — `id` из `public/data/butiks.js` и данных услуг, которые используют соответствующие `getStaticPaths`/страницы; `lastmod` — дата последнего git-коммита файла страницы (для динамических — файла данных), `git log -1 --format=%cs`.
- [ ] **Step 4:** PASS. Коммит.

### Task 9: Навигация (#15, #16, #21, #22)

**Files:** Modify `components/Header.js`, `components/Footer.js`, `pages/index.js`, `pages/events/index.js`, `pages/event_city/index.js`, `scripts/check-audit.mjs`

- [ ] **Step 1: Проверки:** title `/events` начинается с «Кинотеатр», `/event_city` — с «События»; в HTML главной нет `href="/#bitiki"`, есть `id="butiki"` и `id="bitiki"`; есть ссылка `href="/news"` с текстом «Все новости и акции»; нет `href="http://`.
- [ ] **Step 2–4:** FAIL → реализовать → PASS. Браузер: `/#bitiki` и `/#butiki` прокручивают к бутикам. Коммит.

### Task 10: Главная — лишнее и мобильная вёрстка (#17, #18, #19, #20)

**Files:** Modify `pages/index.js`, `components/ButtonRight.js`, `components/ImageLink.js` при необходимости, `components/Header.js`

- [ ] **Step 1:** Убрать `<DocumentsPage />` с главной (ссылка «Юридическая информация» уже есть в меню).
- [ ] **Step 2:** Красный баннер: `px-4`, убрать `&nbsp;` между всеми словами (оставить только в «Сити&nbsp;Центре»), кегль на < 640 px — `text-lg`.
- [ ] **Step 3:** `ButtonRight` на < 640 px: иконки 40 px, прижаты к нижнему правому углу (`bottom-4 right-3`, `top` только с `md:`), не перекрывают шапку и логотипы.
- [ ] **Step 4:** #18 — воспроизвести «пустые экраны» при быстрой прокрутке на 1440 px в собранной версии. Если воспроизводится — найти причину (вероятно, `priority`/ленивые картинки без размеров) и исправить; если нет — отметить в отчёте, что не воспроизводится.
- [ ] **Step 5:** Браузер 375 px: интерактивные элементы ≥ 44 px в шапке и плавающих кнопках (скрипт в консоли считает элементы < 32 px — ожидается 0 в шапке и `ButtonRight`). Коммит.

### Task 11: Скорость (#12, #13, #14)

**Files:** Modify `components/YandexMap.js` (или обёртка в `pages/index.js`), `pages/index.js`, `components/MarqueeLogos.js`, `components/Header.js`, `next.config.js`, `scripts/check-audit.mjs`

- [ ] **Step 1: Проверки:** заголовок `X-Powered-By` отсутствует; ответ `/_next/static/...` (любой chunk из HTML) содержит `Cache-Control` с `immutable`.
- [ ] **Step 2:** Карта: монтировать `YMaps`, когда контейнер в 300 px от экрана (IntersectionObserver), до этого — блок той же высоты (500 px) с ссылкой «Открыть в Яндекс Картах» (`https://yandex.ru/maps/?pt=38.96194,45.0015&z=17&l=map`).
- [ ] **Step 3:** `sizes`: логотипы в шапке и бегущей строке — фактическая ширина (`"100px"`, `"128px"`); шоурум — `sizes="100vw"` у обоих вариантов, мобильный вариант грузится только на < 640 px (через `<picture>`/`getImgProps` недоступен в 13.1 — использовать два `Image` с `sizes="(max-width: 639px) 100vw, 0px"` и обратным); афиша и новости — `sizes="(max-width: 640px) 50vw, 25vw"`; убрать `priority` со всего, что ниже первого экрана.
- [ ] **Step 4:** `next.config.js`: `poweredByHeader: false`; `headers()` для `/video/:path*` — `public, max-age=31536000, immutable`.
- [ ] **Step 5:** check → PASS. Браузер: при открытии главной без прокрутки нет запросов к `api-maps.yandex.ru`; нет `w=3840` у логотипов; общий вес главной до прокрутки — записать (было ~3 МБ / 144 запроса). Коммит.

### Task 12: Конфиг nginx и падения процесса (#1, #14, #23)

**Files:** Create `deploy/nginx-citycenter.conf`, `deploy/README.md`

- [ ] **Step 1:** Конфиг на основе текущего `sites-enabled/default` (лежит в `../sites-enabled/default`): server 80 → 301 на `https://www.citycenter.ru$request_uri`; server 443 `citycenter.ru` → 301 на www; основной server 443 `www.citycenter.ru` с теми же certbot-путями, `proxy_pass http://localhost:3000`, `add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;`, `server_tokens off;`, gzip для text/css/js/json/svg, `location /_next/static/` с `expires 1y`.
- [ ] **Step 2:** Проверка синтаксиса — `docker run --rm -v …:/etc/nginx/conf.d nginx nginx -t` если Docker есть; иначе ручная вычитка и пометка в README.
- [ ] **Step 3:** #23: подготовить для пользователя команду чтения логов (`pm2 logs citycenter --lines 200 --nostream; pm2 describe citycenter; free -m; dmesg | grep -i -E 'killed process|out of memory' | tail`), по выводу описать причину и предложение в `deploy/README.md`. Порядок выкладки (git push ветки → на сервере `git pull`, `npm ci`, `npm run build`, `pm2 restart citycenter`, замена конфига nginx + `nginx -t` + `systemctl reload nginx`) — там же, как инструкция, не выполнять.
- [ ] **Step 4:** Коммит.

### Task 13: Итоговая проверка

- [ ] **Step 1:** `npm run build` чистый, `npm run check` — всё PASS.
- [ ] **Step 2:** Пройти «Проверки» всех 22 пунктов чек-листа на 1440 и 375 px; скриншоты главной до/после.
- [ ] **Step 3:** Обновить чек-лист-артефакт: отметить, что сделано в ветке, что ждёт выкладки (nginx, #23).

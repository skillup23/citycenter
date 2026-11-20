// Генерация public/sitemap.xml перед сборкой (npm run build → prebuild).
// Статические страницы — по файлам pages/, бутики и сервисы — по public/data/butiks.js.
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.citycenter.ru';
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PAGES = join(ROOT, 'pages');
const DATA = join(ROOT, 'public', 'data', 'butiks.js');

// Раздел сайта → категория в данных (как в pages/butiks/*/index.js)
const BUTIK_SECTIONS = {
  books: 'books',
  children: 'children',
  clocks: 'clocks',
  cosmetics: 'cosmetics',
  game: 'gameCategory',
  gifts_and_books: 'giftsAndBook',
  glasses: 'glasses',
  interior: 'interior',
  kafe: 'kafeAndRestoran',
  men_clothing: 'manClothing',
  shoes_and_bags: 'shoesAndBags',
  underwear: 'underwear',
  women_clothing: 'womenClothing',
};

const IGNORED_PATHS = [
  '/butiks/women_clothing/vipavenue',
  '/butiks/kafe/oysters',
];

function lastCommitDate(file) {
  try {
    const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      cwd: ROOT,
    })
      .toString()
      .trim();
    return d || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function staticPages(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name !== 'api') out.push(...staticPages(full));
      continue;
    }
    if (
      !name.endsWith('.js') ||
      name.startsWith('_') ||
      name.startsWith('[') ||
      name === '404.js'
    )
      continue;

    const route =
      '/' +
      relative(PAGES, full)
        .split(sep)
        .join('/')
        .replace(/(\/)?index\.js$/, '')
        .replace(/\.js$/, '');

    const cleanRoute = route === '/' ? '/' : route.replace(/\/$/, '');

    // Пропускаем временно отключенные страницы
    if (IGNORED_PATHS.includes(cleanRoute)) continue;

    out.push({
      path: cleanRoute,
      file: full,
    });
  }
  return out;
}

// butiks.js — ES-модуль без импортов; package.json без "type": "module", поэтому грузим как data: URL
const { butiks } = await import(
  'data:text/javascript;charset=utf-8,' +
    encodeURIComponent(readFileSync(DATA, 'utf8'))
);

const dataDate = lastCommitDate(DATA);
const urls = staticPages(PAGES).map(({ path, file }) => ({
  path,
  lastmod: lastCommitDate(file),
}));

for (const [section, category] of Object.entries(BUTIK_SECTIONS)) {
  for (const b of butiks.filter((b) => b.category.includes(category))) {
    const slug = b.slug || b.url || b.id;
    urls.push({ path: `/butiks/${section}/${slug}`, lastmod: dataDate });
  }
}
for (const b of butiks.filter((b) => b.category.includes('services'))) {
  const slug = b.slug || b.url || b.id;
  urls.push({ path: `/services/${slug}`, lastmod: dataDate });
}

urls.sort((a, b) =>
  a.path === '/' ? -1 : b.path === '/' ? 1 : a.path.localeCompare(b.path),
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) =>
      `  <url>\n    <loc>${SITE}${path === '/' ? '/' : path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} адресов`);

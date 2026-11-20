import { butiks } from '@/public/data/butiks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

// Словарь соответствия category из butiks.js -> путь в pages/
const CATEGORY_ROUTES = {
  womenClothing: '/butiks/women_clothing',
  manClothing: '/butiks/men_clothing',
  children: '/butiks/children',
  underwear: '/butiks/underwear',
  clocks: '/butiks/clocks',
  shoesAndBags: '/butiks/shoes_and_bags',
  cosmetics: '/butiks/cosmetics',
  interior: '/butiks/interior',
  giftsAndBook: '/butiks/gifts_and_books',
  glasses: '/butiks/glasses',
  kafeAndRestoran: '/butiks/kafe',
  gameCategory: '/butiks/game',
  services: '/services',
};

// Человекочитаемые названия категорий для бейджей в выдаче
const CATEGORY_LABELS = {
  womenClothing: 'Женская одежда',
  manClothing: 'Мужская одежда',
  children: 'Для детей',
  underwear: 'Бельё и купальники',
  clocks: 'Ювелирные изделия и часы',
  shoesAndBags: 'Обувь и сумки',
  cosmetics: 'Косметика и парфюмерия',
  interior: 'Интерьер',
  giftsAndBook: 'Подарки и аксессуары',
  glasses: 'Оптика и электроника',
  kafeAndRestoran: 'Рестораны и кафе',
  gameCategory: 'Развлечения',
  services: 'Сервисы',
};

// Быстрые подсказки, когда строка поиска пустая
const QUICK_TAGS = [
  'Одежда',
  'Обувь',
  'Часы',
  'Косметика',
  'Кафе',
  '1 этаж',
  '2 этаж',
  '3 этаж',
];

function getButikHref(item) {
  const firstCat = (item.category || '').trim().split(/\s+/)[0];
  const basePath = CATEGORY_ROUTES[firstCat] || '/butiks';
  const slug = item.slug || item.url;
  return `${basePath}/${slug}`;
}

function getButikCategoryLabel(item) {
  const firstCat = (item.category || '').trim().split(/\s+/)[0];
  return CATEGORY_LABELS[firstCat] || '';
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Автофокус при открытии и блокировка скролла фона
  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Мгновенная фильтрация по названию, описанию (брендам внутри), этажу и категории
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return butiks
      .map((item) => {
        const name = (item.name || '').toLowerCase();
        const desc1 = (item.description1 || '').toLowerCase();
        const desc2 = (item.description2 || '').toLowerCase();
        const desc3 = (item.description3 || '').toLowerCase();
        const floor = (item.floor || '').toLowerCase();
        const catLabel = getButikCategoryLabel(item).toLowerCase();

        // Приоритет: сначала совпадения в названии, потом в категории/этаже, потом в описании
        let score = 0;
        let matchHint = '';

        if (name.includes(q)) {
          score += 10;
        }
        if (catLabel.includes(q) || floor.includes(q)) {
          score += 5;
        }
        if (desc1.includes(q) || desc2.includes(q) || desc3.includes(q)) {
          score += 2;
          if (!name.includes(q)) {
            matchHint = 'Найдено в описании / брендах';
          }
        }

        return score > 0 ? { ...item, score, matchHint } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex flex-col items-center pt-4 sm:pt-10 px-3 sm:px-6"
      onClick={onClose}
    >
      {/* Окно поиска */}
      <div
        className="w-full max-w-3xl bg-[#1e191a] border border-neutral-700 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Верхняя строка ввода */}
        <div className="flex items-center px-4 sm:px-6 py-3.5 sm:py-4 border-b border-neutral-800 gap-3">
          <FiSearch className="text-2xl text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по бутикам, брендам (например, Diesel, Breitling) или этажу..."
            className="w-full bg-transparent text-white placeholder-neutral-400 text-base sm:text-xl focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="text-sm uppercase tracking-wider text-neutral-400 hover:text-white px-2 py-1"
            >
              Очистить
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть поиск"
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <FiX className="text-2xl sm:text-3xl" />
          </button>
        </div>

        {/* Тело модального окна: либо подсказки, либо список результатов */}
        <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-6">
          {!query.trim() ? (
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
                Популярные запросы
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 text-base border border-neutral-700 text-neutral-200 hover:bg-white hover:text-black hover:border-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-neutral-400">
              <p className="text-lg">По запросу «{query}» ничего не найдено</p>
              <p className="text-sm mt-1">
                Попробуйте ввести название бутика, бренд или номер этажа
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
                Найдено: {results.length}
              </p>
              <ul className="divide-y divide-neutral-800">
                {results.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={getButikHref(item)}
                      onClick={onClose}
                      className="flex items-center justify-between gap-4 py-3 px-2 hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-sm shrink-0 flex items-center justify-center p-1.5 relative overflow-hidden">
                          {item.logo ? (
                            <Image
                              src={item.logo}
                              alt={item.name}
                              width={72}
                              height={48}
                              className="object-contain max-h-full w-auto"
                            />
                          ) : (
                            <span className="text-xs text-black font-bold text-center">
                              {item.name}
                            </span>
                          )}
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-base sm:text-lg tracking-wider font-semibold text-white group-hover:underline truncate">
                            {item.name}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-400 mt-0.5">
                            <span>{getButikCategoryLabel(item)}</span>
                            {item.matchHint && (
                              <span className="text-amber-400/90">
                                • {item.matchHint}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {item.floor && (
                        <span className="shrink-0 text-xs sm:text-sm px-2.5 py-1 border border-neutral-700 text-neutral-300">
                          {item.floor}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

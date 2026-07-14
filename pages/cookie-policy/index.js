import Layout from '@/components/Layout';

const CookiePolicy = () => {
  return (
    <Layout title="Политика использования файлов cookie">
      <section className="mt-2">
        <div className="min-h-screen py-8 px-4">
          <div className="max-w-3xl mx-auto bg-white p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Политика использования файлов cookie
            </h1>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Что такое файлы cookie?
                </h2>
                <p className="mb-3">
                  Файлы cookie — это небольшие текстовые файлы, которые
                  сохраняются на вашем устройстве при посещении веб-сайтов. Они
                  помогают сайтам работать более эффективно и предоставлять
                  персонализированный контент.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  📊 Яндекс.Метрика
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="font-medium text-blue-800 mb-2">
                    На нашем сайте используется Яндекс.Метрика
                  </p>
                  <p className="text-blue-700">
                    Это сервис для анализа посещаемости сайта от компании
                    Яндекс.
                  </p>
                </div>

                <h3 className="text-lg font-medium mb-2">
                  Какие данные собирает Яндекс.Метрика:
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Источники трафика (откуда пришли пользователи)</li>
                  <li>
                    Поведение на сайте (просмотренные страницы, время на сайте)
                  </li>
                  <li>
                    Демографические данные (возраст, пол, интересы - если
                    доступно)
                  </li>
                  <li>Географическое местоположение (страна, город)</li>
                  <li>
                    Устройства и браузеры, которые используются для доступа к
                    сайту
                  </li>
                  <li>Действия на сайте (клики, прокрутки, заполнение форм)</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">
                  Как используются данные:
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Для анализа посещаемости и популярности страниц</li>
                  <li>Для улучшения пользовательского опыта</li>
                  <li>Для оптимизации контента и навигации сайта</li>
                  <li>Для понимания интересов нашей аудитории</li>
                </ul>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-medium mb-2">🔒 Важная информация:</p>
                  <p className="text-sm">
                    Яндекс.Метрика собирает данные в обезличенном виде. Мы не
                    получаем ваши персональные данные (имя, email, телефон),
                    только агрегированную статистику.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Типы используемых cookie
                </h2>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Обязательные cookie
                    </h3>
                    <p className="text-sm text-gray-600">
                      Необходимы для работы сайта. Без них некоторые функции
                      могут быть недоступны.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Аналитические cookie (Яндекс.Метрика)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Используются для сбора информации о том, как посетители
                      используют сайт. Эти данные помогают улучшать работу
                      сайта.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Как управлять cookie?
                </h2>
                <p className="mb-3">
                  Вы имеете полный контроль над использованием cookie:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Принять все cookie</strong> - нажмите{' '}
                    <strong>Принять</strong> в баннере на сайте
                  </li>
                  <li>
                    <strong>Отключить Яндекс.Метрику</strong> - используйте
                    официальный инструмент от Яндекс:{' '}
                    <a
                      href="https://yandex.ru/support/metrica/general/opt-out.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Отключить Яндекс.Метрику
                    </a>
                  </li>
                  <li>
                    <strong>Удалить существующие cookie</strong> - через
                    настройки вашего браузера
                  </li>
                  <li>
                    <strong>Заблокировать все cookie</strong> - в настройках
                    безопасности браузера
                  </li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-800">
                    Обратите внимание: если вы отключите аналитические cookie,
                    мы не сможем получать данные для улучшения сайта, но
                    основная функциональность сайта останется доступной.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Контакты</h2>
                <p className="mb-2">
                  Если у вас есть вопросы о нашей политике использования cookie,
                  вы можете связаться с нами:
                </p>
                <p className="text-sm text-gray-600">
                  По электронной почте: kirichenko_s@alpha-am.ru
                </p>
              </section>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Эта политика может периодически обновляться. Рекомендуем
                  проверять эту страницу для получения актуальной информации.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                  Используя наш сайт, вы соглашаетесь с использованием cookie в
                  соответствии с этой политикой.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;

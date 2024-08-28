import DocumentPdf from '@/components/DocumentPdf';
import { useState } from 'react';

const { default: Layout } = require('@/components/Layout');

function Documents() {
  const [isGeneralDocs, setGeneralDocs] = useState(true);
  const [isPersonalData, setPersonalData] = useState(false);
  const [isArchDocs, setArchDocs] = useState(false);

  function activeGeneralDocs() {
    setGeneralDocs(true);
    setPersonalData(false);
    setArchDocs(false);
  }

  function activePersonalData() {
    setGeneralDocs(false);
    setPersonalData(true);
    setArchDocs(false);
  }

  function activeArchDocs() {
    setGeneralDocs(false);
    setPersonalData(false);
    setArchDocs(true);
  }

  return (
    <Layout title="Юридическая информация">
      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="title_main mt-10">Юридическая информация</h1>
          <ul className="mt-6 lg:mt-14 flex flex-wrap w-full items-center justify-between">
            <div
              onClick={activeGeneralDocs}
              className={`link_kino w-full sm:w-1/3 text-base sm:text-xl md:text-2xl cursor-pointer ${
                isGeneralDocs ? 'bg-black text-white' : ''
              }`}
            >
              Общие документы
            </div>
            <div
              onClick={activePersonalData}
              className={`link_kino w-full sm:w-1/3 text-base sm:text-xl md:text-2xl cursor-pointer ${
                isPersonalData ? 'bg-black text-white' : ''
              }`}
            >
              Персональные данные
            </div>
            <div
              onClick={activeArchDocs}
              className={`link_kino w-full sm:w-1/3 text-base sm:text-xl md:text-2xl cursor-pointer ${
                isArchDocs ? 'bg-black text-white' : ''
              }`}
            >
              Архив документов
            </div>
          </ul>

          <div
            className={`${
              isGeneralDocs ? '' : 'hidden'
            } mt-14 flex flex-col gap-4 md:gap-8`}
          >
            <DocumentPdf
              href={
                '/docs/Правила для Арендаторов ТРК «Сити Центр». Версия от 17.06.2024 .pdf'
              }
              title={'Правила для Арендаторов ТРК «Сити Центр»'}
              date={'Версия от 17.06.2024'}
            />
            <DocumentPdf
              href={
                '/docs/Регламент Работ для Арендаторов ТРК «Сити Центр». Версия от 27.05.2024 .pdf'
              }
              title={
                'Регламент Работ для Арендаторов ТРК\u00A0«Сити\u00A0Центр»'
              }
              date={'Версия от 27.05.2024'}
            />
            <DocumentPdf
              href={'/docs/Правила посещения ТРК СИТИ ЦЕНТР от 28.08.2024.pdf'}
              title={'Правила посещения ТРК\u00A0«Сити\u00A0Центр»'}
              date={'Версия от 28.08.2024'}
            />
          </div>

          <div
            className={`${
              isPersonalData ? '' : 'hidden'
            } mt-14 flex flex-col gap-4 md:gap-8`}
          >
            <DocumentPdf
              href={'#'}
              title={`Политика обработки персональных данных в\u00A0ТРК\u00A0«Сити\u00A0Центр»`}
              date={'Версия от 17.06.2024'}
            />
          </div>

          <div
            className={`${
              isArchDocs ? '' : 'hidden'
            } mt-14 flex flex-col gap-4 md:gap-8`}
          >
            <DocumentPdf
              href={
                '/docs/arch/Правила для Арендаторов ТРК «Сити Центр». Версия от 28.05.2024 .pdf'
              }
              title={'Правила для Арендаторов ТРК «Сити Центр»'}
              date={'Версия от 28.05.2024'}
            />
            <DocumentPdf
              href={
                '/docs/arch/Регламент Работ для Арендаторов ТРК «Сити Центр». Версия от 09.04.2024 .pdf'
              }
              title={
                'Регламент Работ для Арендаторов ТРК\u00A0«Сити\u00A0Центр»'
              }
              date={'Версия от 09.04.2024'}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Documents;

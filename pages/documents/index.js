import DocumentsPage from '@/components/DocumentsPage';

const { default: Layout } = require('@/components/Layout');

function Documents() {
  return (
    <Layout
      description="Юридическая информация ТРК «Сити Центр»: правила посещения, правила и регламенты для арендаторов, документы о персональных данных."
      title="Юридическая информация">
      <section className="mt-10">
        <DocumentsPage />
      </section>
    </Layout>
  );
}

export default Documents;

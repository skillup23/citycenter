import DocumentsPage from '@/components/DocumentsPage';

const { default: Layout } = require('@/components/Layout');

function Documents() {
  return (
    <Layout title="Юридическая информация">
      <section className="mt-10">
        <DocumentsPage />
      </section>
    </Layout>
  );
}

export default Documents;

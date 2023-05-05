import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Сase.png';
import Scenario from '@/components/Scenario';

function Case() {
  return (
    <Layout title="ОСОБЫЙ СЛУЧАЙ">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario scena={schema} />
        </div>
      </section>
    </Layout>
  );
}

export default Case;

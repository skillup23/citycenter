import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Romantik.png';
import Scenario from '@/components/Scenario';

function Metting() {
  return (
    <Layout title="РОМАНТИЧЕСКОЕ СВИДАНИЕ">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario scena={schema} />
        </div>
      </section>
    </Layout>
  );
}

export default Metting;

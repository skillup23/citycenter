import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Romantik2025.png';
import schemaMob from '@/public/scenarios/Romantik_mob2025.png';
import Scenario from '@/components/Scenario';

function Metting() {
  return (
    <Layout title="РОМАНТИЧЕСКОЕ СВИДАНИЕ">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario schema={schema} schemaMob={schemaMob} />
        </div>
      </section>
    </Layout>
  );
}

export default Metting;

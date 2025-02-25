import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Сase-2025.png';
import schemaMob from '@/public/scenarios/Сase_mob-2025.png';
import Scenario from '@/components/Scenario';

function Case() {
  return (
    <Layout title="ОСОБЫЙ СЛУЧАЙ">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario schema={schema} schemaMob={schemaMob} />
        </div>
      </section>
    </Layout>
  );
}

export default Case;

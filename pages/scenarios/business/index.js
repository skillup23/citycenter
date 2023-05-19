import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Bissnes.png';
import schemaMob from '@/public/scenarios/Bissnes_mob.png';
import Scenario from '@/components/Scenario';

function Business() {
  return (
    <Layout title="ДЕЛОВАЯ ВСТРЕЧА">
      <section className="mt-10">
        <div className="lg:container mx-auto">
          <Scenario schema={schema} schemaMob={schemaMob} />
        </div>
      </section>
    </Layout>
  );
}

export default Business;

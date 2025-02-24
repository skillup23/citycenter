import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Holyday2025.png';
import schemaMob from '@/public/scenarios/Holyday_mob2025.png';
import Scenario from '@/components/Scenario';

function Holyday() {
  return (
    <Layout title="СЕМЕЙНЫЙ ПРАЗДНИК">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario schema={schema} schemaMob={schemaMob} />
        </div>
      </section>
    </Layout>
  );
}

export default Holyday;

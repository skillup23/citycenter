import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Bissnes.png';
import Scenario from '@/components/Scenario';

function Business() {
  return (
    <Layout title="ДЕЛОВАЯ ВСТРЕЧА">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario scena={schema} />
        </div>
      </section>
    </Layout>
  );
}

export default Business;

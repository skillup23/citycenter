import Layout from '@/components/Layout';
import React from 'react';
import schema from '@/public/scenarios/Holyday.png';
import Scenario from '@/components/Scenario';

function Holyday() {
  return (
    <Layout title="СЕМЕЙНЫЙ ПРАЗДНИК">
      <section className="mt-10">
        <div className="container mx-auto">
          <Scenario scena={schema} />
        </div>
      </section>
    </Layout>
  );
}

export default Holyday;

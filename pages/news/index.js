import Layout from "@/components/Layout";
import OneNews from "@/components/OneNews";
import { arrayNews } from "@/public/data/news";

function News() {
  return (
    <Layout
      title="НОВОСТИ"
      description="Новогодние праздники в ТРК «СИТИ ЦЕНТР». Новогодний базар «Русские сказки»"
    >
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10 sm:mb-0">НОВОСТИ</h1>

          {arrayNews.map(({ id, img1, img2, img3, img4, text }) => (
            <OneNews
              key={id}
              id={id}
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              text={text}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default News;

"use client";

import { Layout } from "../../Components";
import Title from "../../Components/Common/Title";
import NewsCard from "../../Components/News/Cards";
import { news } from "../../helpers/data";

function News() {
  return (
    <Layout>
      <div className="w-full   py-[1rem]">
        <Title
          text="text-primary"
          title="MEDIA MENTIONS"
          bg="bg"
          border="border-green"
        />
      </div>
      <div className="w-full">
        <div className="flex max-w-[90%] flex-wrap mt-[rem] mb-[2rem]  mx-auto">
          {news?.map((item) => (
            <div className="w-full md:w-[22%] mt-[rem]">
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default News;

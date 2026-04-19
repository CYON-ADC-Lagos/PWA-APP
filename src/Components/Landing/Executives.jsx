"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Title from "../Common/Title";
import { executives } from "../../helpers/data";
import ExecutivesCard from "../Shared/ExecutiveCard";
import Layout from "../Layout";

function Executives() {
  const pathname = usePathname() || "/";
  const isExecutivesPage = pathname === "/executives";

  return (
    <Layout>
      <div className="w-full  my-[3rem] py-[1rem]">
        <Title
          text="text-primary"
          title="MEET THE EXECUTIVES"
          bg="bg"
          border="border-green"
        />

        <div className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%]  py-[2rem]">
          {isExecutivesPage
            ? executives?.map((item, i) => (
                <ExecutivesCard key={i} item={item} />
              ))
            : executives?.slice(0, 4).map((item, i) => (
                <ExecutivesCard key={i} item={item} />
              ))}
        </div>
        {isExecutivesPage ? (
          ""
        ) : (
          <div className="w-full text-center">
            <Link
              href="/executives"
              className="bg-primary-shade  mx-auto my-8 text-white font-bold  rounded-[25px] py-[.5rem] px-[2rem]"
            >
              View more..
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Executives;

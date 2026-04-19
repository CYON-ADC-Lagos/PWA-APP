"use client";

import Title from "../Common/Title";
import ExecutivesCard from "../Shared/ExecutiveCard";

function DeanExecutives({ data }) {
  return (
    <div>
      <div className="w-full  mb-[3rem] py-[1rem]">
        <Title
          text="text-primary"
          title="MEET THE EXECUTIVES"
          bg="bg"
          border="border-green"
        />

        <div className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%]  py-[2rem]">
          {data?.map((item) => (
            <ExecutivesCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeanExecutives;

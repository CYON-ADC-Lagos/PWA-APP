"use client";

import {
  DownloadIcon,
  DocumentIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";

function Download() {
  return (
    <div className="bg-[#CFB471] py-[3rem] mb-10 md:my-20">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto ">
        <h2 className="text-center   text-white font-extrabold text-[1.7rem]">
          DOWNLOADS
        </h2>
        <hr className="w-[90px] mx-auto border-b mt-3 mb-[1rem] border-green border-4 bg-primary"></hr>
        <div className="flex  justify-around md:justify-between flex-wrap mx-auto">
          <div className="cursor-pointer mb-7 hover:-translate-y-1 transition-transform">
            <DocumentTextIcon className="w-[80px] mx-auto md:w-[200px] text-white" />
            <h4 className="font-bold flex text-white text-sm md:text-xl">
              {" "}
              <DownloadIcon className=" w-3 md:w-6 " />
              Download ADC Program of the year.
            </h4>
          </div>
          <div className="cursor-pointer mb-7 hover:-translate-y-1 transition-transform">
            <DocumentIcon className="w-[80px] mx-auto md:w-[200px] text-green" />
            <h4 className="font-bold flex text-white text-sm md:text-xl">
              {" "}
              <DownloadIcon className=" w-3 md:w-6 " />
              Download ADC constitution.
            </h4>
          </div>
          <div className="cursor-pointer mb-4 hover:-translate-y-1 transition-transform">
            <DocumentTextIcon className="w-[80px] mx-auto md:w-[200px] text-white" />
            <h4 className="font-bold flex text-white text-sm md:text-xl">
              {" "}
              <DownloadIcon className=" w-3 md:w-6 " />
              Download ADC ***
            </h4>
          </div>
          <div className="cursor-pointer mb-4">
            <DocumentTextIcon className="hover:-translate-y-1 transition-transform w-[80px] mx-auto md:w-[200px] text-white" />
            <h4 className="font-bold flex text-white text-sm md:text-xl">
              {" "}
              <DownloadIcon className=" w-3 md:w-6 " />
              Download ADC ***
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;

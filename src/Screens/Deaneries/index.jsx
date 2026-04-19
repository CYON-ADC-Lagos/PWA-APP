"use client";

import { useParams } from "next/navigation";
import {
  DeanExecutives,
  DeanHero,
  Events,
  Layout,
  Parishes,
} from "../../Components";
import { deanery, mediaLinks } from "../../helpers/data";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

function Deaneries() {
  const params = useParams();
  const name = params?.name ? decodeURIComponent(params.name) : "";

  const filtered = deanery.filter((item) => item?.name === name);

  return (
    <Layout>
      <DeanHero deanery={name} img={filtered[0]} />
      <DeanExecutives data={filtered[0]?.deanExco} />
      <Parishes data={filtered[0]?.parishes} />
      <Events events={filtered[0]?.deaneryEvents} type="EVENTS" />
      <div className="flex max-w-[90%] flex-wrap my-[5rem] lg:max-w-[85%] mx-auto ">
        <div className=" md:w-[50%] mb-[2rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Contact Us.
          </h2>
          <p className="md:w-[80%]">
            For enquiries, sponsorship, feedback, kindly reach out to us. A team
            member will respond swiftly.
          </p>
        </div>
        <div className=" md:w-[50%]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Get in touch with us
          </h2>

          <div className="flex mb-3">
            <PhoneIcon className="w-4 mr-3" />
            <p>0800000000</p>
          </div>
          <div className="flex mb-3">
            <MailIcon className="w-4 mr-3" />
            <p>DDDD@gmail.com</p>
          </div>
          <div className="flex gap-2  mt-4 ">
            {mediaLinks?.map(({ path, title, icon }, i) => (
              <a
                key={i}
                target="_blank"
                href={path}
                className="cursor-pointer shadow-md"
                rel="noreferrer"
              >
                <img
                  src={icon}
                  alt={`CYON ${title}`}
                  className="w-7 h-7 md:w-10 md:h-10  p-1 md:p-2 bg-white  rounded-full grayscale hover:grayscale-0 hover:scale-110  hover:-translate-y-1 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Deaneries;

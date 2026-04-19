"use client";

import _img_About1 from "../../Assests/about1.png";
const About1 = _img_About1 && typeof _img_About1 === 'object' && 'src' in _img_About1 ? _img_About1.src : _img_About1;

function AboutHero() {
  return (
    <div className="w-full md:h-[450px]  bg-[#F4EDDD]  mb-[4rem] pt-[3rem]">
      <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[52%]   md:mr-[6rem] mb-[2rem]">
          <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-green ">
            CYON Lagos Archdiocese is the hub of over 1 million Catholic Youths.
          </h4>
          <p className="mt-[1rem]  text-[1rem] leading-7">
            The vibrant and dynamic community of over 1 million youths. Making
            tremendous impact on the lives of young people through our various
            initiatives and programs, retreats and conferences to sports and
            cultural events,we have become the hub of Catholic youth culture in
            Lagos Archdiocese.
          </p>
          <p className="mt-[1rem]">
            Join us today and be a part of the CYON Lagos Archdiocese family!
          </p>
        </div>
        <div className="md:h-[400px] md:w-[38%] w-full -mb-[4rem] md:mb-0">
          <img src={About1} alt="" className="h-full object-cover w-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;

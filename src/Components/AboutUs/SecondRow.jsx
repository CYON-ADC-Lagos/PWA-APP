"use client";

import _img_About1 from "../../Assests/Adc20.jpeg";
const About1 = _img_About1 && typeof _img_About1 === 'object' && 'src' in _img_About1 ? _img_About1.src : _img_About1;

function SecondRow() {
  return (
    <div className="flex-reverse flex flex-wrap mb-[4rem] mt-[8rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
      <div className="mb-[4rem]  md:h-[400px] w-full  md:w-[52%]">
        <img src={About1} alt="" className="md:h-full w-full  object-cover" />
      </div>
      <div className="md:w-[40%] mb-[4rem] w-full  md:ml-[6rem] flex items-center">
        <div className="   ">
          <h4 className="text-[1.5rem] md:text-[2rem]  leading-8 font-extrabold text-green">
            WHO WE ARE.
          </h4>
          <p className="mt-[1rem]  text-[1rem] leading-7">
            As a community,embraced in unity and love, we created a powerful
            force that can bring positive change to our world. This unique
            opportunity to embody these values from diverse backgrounds as we
            share a common faith and a desire to make a difference in our
            community. By working together, we can create a culture that
            inspires others to do the same.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondRow;

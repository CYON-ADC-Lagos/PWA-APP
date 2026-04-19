"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { servicesList } from "../../helpers/data";

const OtherServices = ({
  requestData,

  goBack,
  next,
  onChange,
  activeItem,
}) => {
  const [loading, setLoading] = useState(false);

  const services = servicesList.filter(({ name }) => name !== activeItem);
  // const selectedServices = servicesList.map(({ value, name }, i) => [...(requestData[value] ? [name] : [])]);

  const submitRequest = () => {
    next();
    setLoading(true);
  };
  return (
    <motion.div
      whileInView={{ y: [-100, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="mx-auto w-[80%] h-screen flex items-center"
    >
      <div className="w-full">
        <h2 className="text-primary text-xl font-base md:text-2xl mb-6">
          Which of our other services would you be interested in?
        </h2>
        <div className="space-y-4 mb-8">
          {services?.map(({ name, value }, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <input
                type="checkbox"
                name={value}
                checked={requestData[value]}
                onChange={onChange}
                className="checkbox checkbox-xs checkbox-primary border outline-none rounded-sm"
              />
              <p className="lowercase">{name}</p>
            </div>
          ))}
        </div>

        {/* <label className="block text-primary mt-2"> Full Name</label> */}
        {/* <Controls goBack={goBack} next={next} start={start} end={end} /> */}
        <div className="text-center flex justify-center md:justify-end my-[1rem]">
          <div className="flex gap-4">
            <button className="btn w-[150px] btn-primary" onClick={goBack}>
              Back
            </button>

            <button
              className={`${
                loading && "loading"
              } btn w-[150px] bg-green text-white disabled:bg-[#bcbcbc] disabled:text-primary`}
              onClick={submitRequest}
            >
              {loading ? "" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OtherServices;

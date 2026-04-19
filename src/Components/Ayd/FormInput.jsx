"use client";

import React from "react";
import Controls from "./Controls";
import { motion } from "framer-motion";
import _img_AYDLogo from "../../Assests/AYD1.png";
const AYDLogo = _img_AYDLogo && typeof _img_AYDLogo === 'object' && 'src' in _img_AYDLogo ? _img_AYDLogo.src : _img_AYDLogo;

const FormInput = ({
  requestData,
  name,
  label,
  placeholder,
  goBack,
  next,
  onChange,
  disable,
  start,
  end,
  activeStep,
  setStep,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (activeStep < 4 && !disable) return setStep(activeStep + 1);
    }
  };

  return (
    <motion.div
      whileInView={{ y: [-100, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="mx-auto w-[90%] md:w-[80%] h-screen flex flex-col justify-center items-center"
    >
      <div className="bg-white w-[100px]">
        <a href="/" className="bg-white">
          <img
            src={AYDLogo}
            alt="AYD log"
            className="object-contain w-[200px] bg-white mx-auto h-[200px]"
          />
        </a>
      </div>
      <div className="w-full">
        <h2 className="text-primary text-xl font-base md:text-2xl">{label}</h2>
        <input
          type="text"
          name={name}
          value={requestData[name]}
          className="border focus:border-primary w-full p-4 rounded-md my-4 normal-case focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={handleKeyPress}
        />
        {/* <label className="block text-primary mt-2"> Full Name</label> */}
        <Controls
          goBack={goBack}
          next={next}
          start={start}
          end={end}
          disable={disable}
        />
      </div>
    </motion.div>
  );
};

export default FormInput;

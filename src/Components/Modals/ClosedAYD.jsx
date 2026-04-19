"use client";

import { motion } from "framer-motion";
import React from "react";
import _img_AYDLogo from "../../Assests/AYD2.png";
// import AYD from "../../Assests/magazine.pdf";
import { DownloadIcon } from "@heroicons/react/outline";
const AYDLogo = _img_AYDLogo && typeof _img_AYDLogo === 'object' && 'src' in _img_AYDLogo ? _img_AYDLogo.src : _img_AYDLogo;

const ClosedAYD = () => {
  const handleDownload = () => {
    // const pdfUrl = AYD;
    const link = document.createElement("a");
    // link.href = pdfUrl;
    link.download = "AYD Magazine 2024.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="parallax">
      <div className="modal">
        <div className="modal-box p-0  max-w-[100vw] w-[100vw] rounded-none max-h-[100vh] h-[100vh]">
          <section className="h-full">
            <div className="flex">
              <div className="w-[100%] md:w-[80%] mx-auto">
                <div className="w-full">
                  <motion.div
                    whileInView={{ y: [-100, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    className="mx-auto w-[80%] h-screen flex flex-col mt-[8rem]"
                  >
                    <div className=" text-white mb-[2rem]">
                      <a href="/">
                        <img
                          src={AYDLogo}
                          alt="AYD log"
                          className="object-contain w-[200px] mx-auto h-[100px]"
                        />
                      </a>
                    </div>
                    {/* <div className="w-full">
                      <div
                        onClick={handleDownload}
                        className="mx-auto cursor-pointer text-white bg-green flex w-[250px] md:w-[300px] py-3 rounded-[5px]  mt-[3rem] text-center"
                      >
                        <DownloadIcon className="w-5 h-5 mr-[.5rem]  ml-[.5rem] text-white" />{" "}
                        <p className="text-[.8rem] md:text-[1rem] text-center">
                          Download AYD 2024 Magazine
                        </p>
                      </div>
                    </div> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClosedAYD;

"use client";

import React, { useState } from "react";
import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { postDeanery } from "../../../Redux/Api";
import Loader from "../../../Components/Loader";

const CreateDeanery = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [deaneryData, setDeaneryData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setDeaneryData({
      ...deaneryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateDeanery = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await postDeanery(deaneryData);
      if (data) {
        setLoading(false);

        setShow(true);
        setDeaneryData({
          name: "",
        });
      }
    } catch (error) {
      setLoading(false);

      // Handle error
      console.error("Error fetching data:", error.response);
    }
  };

  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"Create Deanery"}
        />
      </div>

      <div>
        <form
          className="w-[97%] my-[2rem] px-[1rem] mx-auto"
          onSubmit={handleCreateDeanery}
        >
          <div className="flex flex-wrap justify-between">
            <div className="mt-[18px] w-full ">
              <label className="mb-[15px] text-[.8rem]">Name </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="name"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={deaneryData.name}
                  placeholder="St. John Catholic Church, Ado"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>

          {show && (
            <h4 className="mt-[2rem] text-green text-center">
              Deanery Successfully Created!
            </h4>
          )}

          <div className="flex md:w-[400px] mx-auto justify-center items-center h-[48px] mt-[3rem] rounded-[5px] text-white bg-green">
            <button
              type="submit"
              // disabled={true}
              className="border-none outline-none cursor-pointer"
            >
              {loading ? <Loader /> : "CREATE"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateDeanery;

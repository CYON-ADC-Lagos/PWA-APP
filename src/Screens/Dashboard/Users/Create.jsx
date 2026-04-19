"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries, postParish } from "../../../Redux/Api";
import Loader from "../../../Components/Loader";

const CreateUser = () => {
  const router = useRouter();
  const navigate = (to) => router.push(to);

  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [, setDeaneries] = useState([]);
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateParish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await postParish(signUpData);
      if (data) {
        setLoading(false);
        setShow(true);
        setSignUpData({
          firstName: "",
          lastName: "",
          email: "",
        });
        navigate("/dashboard/parishes");
      } else {
        return;
      }
    } catch (err) {
      if (err.response?.data?.msg) {
        setLoading(false);
        alert(err.response?.data?.msg);
        console.error("Error fetching data:", err.response);
      }
    }
  };

  const fetchAllDeanery = async () => {
    try {
      const { data } = await fetchAllDeaneries();
      if (data) {
        setDeaneries(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAllDeanery();
  }, []);

  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"Create Parish"}
        />
      </div>

      <div>
        <form
          className="w-[97%] my-[2rem] px-[1rem] mx-auto"
          onSubmit={handleCreateParish}
        >
          <div className="flex flex-wrap justify-between">
            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Name </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="name"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.name || ""}
                  placeholder="St. John Catholic Church, Ado"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Address </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="location"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.location || ""}
                  placeholder="Enter address"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          {show && (
            <h4 className="mt-[2rem] text-green text-center">
              User Successfully Created!
            </h4>
          )}

          <div className="flex md:w-[400px] mx-auto justify-center items-center h-[48px] mt-[3rem] rounded-[5px] text-white bg-green">
            <button
              type="submit"
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

export default CreateUser;

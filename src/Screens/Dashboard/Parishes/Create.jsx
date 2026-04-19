"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries, postParish } from "../../../Redux/Api";
import Loader from "../../../Components/Loader";
import { safeFetchList, apiErrorMessage } from "../../../helpers/api";

const CreateParish = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [deaneries, setDeaneries] = useState([]);
  const [loadingDeaneries, setLoadingDeaneries] = useState(false);
  const [deaneryError, setDeaneryError] = useState(null);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    hasPaid: 0,
    location: "",
    deaneryId: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setSignUpData({ ...signUpData, deaneryId: event.target.value });
  };

  const handleCreateParish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await postParish(signUpData);
      if (data) {
        setLoading(false);
        setShow(true);

        signUpData({
          name: "",
          email: "",
          hasPaid: 0,
          location: "",
          deaneryId: "",
        });
      }
    } catch (err) {
      if (err.response?.data?.msg) {
        setLoading(false);
        alert(err.response?.data?.msg);
        // Handle error
        console.error("Error fetching data:", err.response);
      }
    }
  };

  const fetchAllDeanery = async () => {
    setLoadingDeaneries(true);
    setDeaneryError(null);
    const { items, error } = await safeFetchList(fetchAllDeaneries);
    setDeaneries(items);
    setDeaneryError(error);
    setLoadingDeaneries(false);
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
                  value={signUpData.name}
                  placeholder="St. John Catholic Church, Ado"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Deanery </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <select
                  name="deaneryId"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px] disabled:opacity-60"
                  value={signUpData.deaneryId}
                  onChange={handleSelectChange}
                  disabled={loadingDeaneries || !!deaneryError || deaneries.length === 0}
                >
                  <option value="">
                    {loadingDeaneries
                      ? "Loading deaneries…"
                      : deaneryError
                      ? "Unable to load deaneries"
                      : deaneries.length === 0
                      ? "No deaneries available"
                      : "Select Deanery"}
                  </option>
                  {deaneries.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              {deaneryError && (
                <p className="mt-1 text-xs text-red-600">
                  {deaneryError}{" "}
                  <button
                    type="button"
                    onClick={fetchAllDeanery}
                    className="underline"
                    disabled={loadingDeaneries}
                  >
                    Retry
                  </button>
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">AYD Payment </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <select
                  name="hasPaid"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.hasPaid}
                  placeholder=""
                  onChange={(e) => handleChange(e)}
                >
                  <option>AYD Payment</option>
                  <option value={1}>True</option>
                  <option value={0}>False</option>
                </select>
              </div>
            </div>

            <div className="mt-[18px] w-full md:w-[49%]">
              <label className="mb-[15px] text-[.8rem]">Address </label>
              <div className="w-full flex rounded-[10px] shadow-sm  mt-[.5rem] h-[54px] justify-between items-center ">
                <input
                  name="location"
                  className="w-full border-none rounded-[10px] outline-none h-full px-[22px]"
                  value={signUpData.location}
                  placeholder="Enter address"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          {show && (
            <h4 className="mt-[2rem] text-green text-center">
              Parish Successfully Created!
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

export default CreateParish;

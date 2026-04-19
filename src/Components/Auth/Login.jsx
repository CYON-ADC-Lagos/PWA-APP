"use client";

import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { isEmpty, isValidEmail } from "../../helpers/utils";
import { userLogin } from "../../Redux/Features/authSlice";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const navigate = (to) => router.push(to);

  const [isAuth, setIsAuth] = useState(null);
  const loading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const [, setIsValid] = useState(true);
  const [loginData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem("user");
        setIsAuth(raw ? JSON.parse(raw)?.token || null : null);
      } catch (_) {
        setIsAuth(null);
      }
    }
  }, []);

  const disableBtn = isEmpty(loginData.email) || isEmpty(loginData.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: loginData.email?.trim().toLowerCase(),
      password: loginData?.password ?? "",
    };
    if (!payload.email || !payload.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    dispatch(userLogin({ payload, navigate }));
  };

  const handleChange = (e) => {
    setSignUpData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      if (isValidEmail(loginData.email)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {};

  return (
    <div className="w-[438px]  flex flex-col justify-center sm:w-[500px] px-[50px]">
      <div className=" mb-[37px] flex items-center  justify-between ">
        <div
          className={`  w-[30px] flex align-middle text-[#344054] items-center h-[30px] rounded-[50%] bg-[#F2F4F7] text-center cursor-pointer`}
          onClick={goBack}
        >
          <IoChevronBack
            size={18}
            color=""
            className={` mx-auto  text-center`}
          />
        </div>
        <div className="align-center text-center">
          <h4 className=" text-center text-kdark3 text-[24px]">Login</h4>
        </div>
        <div
          className=" w-[30px] flex align-middle items-center h-[30px] rounded-[50%] bg-[#F2F4F7] text-center cursor-pointer"
          onClick={goHome}
        >
          <HiX
            size={18}
            color=""
            className="text-[#344054] mx-auto  text-center"
          />
        </div>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-[18px]">
          <label className="mb-[15px]">Email </label>
          <div className="w-full flex  mt-[.5rem] h-[54px] border border-[#CBD5E0] justify-between items-center ">
            <input
              name="email"
              className="w-full border-none outline-none h-full px-[22px]"
              value={loginData.email}
              placeholder="e.g Anthonysam@gmail.com"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="mt-[18px]">
          <label className="mb-[15px]">Password</label>
          <div className=" mt-[.5rem] w-full flex h-[54px] border border-[#CBD5E0] justify-between items-center ">
            <input
              name="password"
              type="password"
              className="w-full border-none outline-none h-full px-[22px]"
              value={loginData.password}
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <p className="text-[red] text-center mt-[1rem]">{error?.msg}</p>
        <div
          className={`flex justify-center items-center w-full h-[48px] mt-[21px] rounded-[5px] text-white ${
            disableBtn ? "bg-[#b9b8b8]" : "bg-green"
          }`}
        >
          <button
            type="submit"
            disabled={disableBtn}
            className="border-none outline-none cursor-pointer w-full"
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </div>
      </form>
      <div
        className={`flex text-[#718096] w-[100%] justify-center absolute bottom-[2rem] right-auto left-auto  mt-[50px] cursor-pointer text-[16px]`}
      >
        <p className="text-left ml-[5rem] w-full">
          {" "}
          Don&apos;t have an account?{" "}
          <span className="text-[#F04438]"> Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;

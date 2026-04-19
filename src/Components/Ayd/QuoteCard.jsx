"use client";

import React from "react";

const QuoteCard = ({
  setActiveItem,
  data: { title, description, icon },
  quote,
}) => {
  return (
    <>
      <div className="flex flex-col py-8 px-5 rounded-md bg-white text-black text-center hover:bg-secondary border shadow-md hover:text-white justify-between">
        <div>
          <img src={icon} alt="icon" className="w-[50%] mx-auto" />

          <h5 className="my-[2rem] font-bold">{title}</h5>
          <p className=" my-[2rem] text-sm">{description}</p>
        </div>
        {quote ? (
          <label
            htmlFor="my-modal-3"
            className="flex btn btn-block rounded-[5px] bg-primary mx-auto normal-case hover:text-white modal-button border-none"
            onClick={() => setActiveItem(title)}
          >
            GET STARTED
          </label>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default QuoteCard;

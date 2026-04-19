"use client";

function Card({ title, text, icon }) {
  return (
    <div className="bg-white w-[95%] flex items-center md:w-[46%]  text-center rounded-md px-[3rem] py-[1rem]">
      <div>{icon}</div>
      <div className="w-full pt-[1rem]">
        <h3 className="text-green text-center font-semibold">
          Total Number of {title}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;

"use client";

import { CalendarIcon, HomeIcon } from "@heroicons/react/solid";

function ParishCard({ items }) {
  return (
    <div className="bg-white py-[2rem] w-[250px] h-[250px] text-center rounded-[50%] hover:-translate-y-1 transition-transform">
      <HomeIcon className="w-10 text-green mx-auto mb-4" />
      <h4 className="text-green font-extrabold">{items?.name}</h4>
      <p className="text-primary">{items?.location || "Location"}</p>
      <div className="flex justify-center">
        <CalendarIcon className="w-4 text-green mr-2" />
        <span className="text-green ">{items?.meeting} Sunday Monthly</span>
      </div>
    </div>
  );
}

export default ParishCard;

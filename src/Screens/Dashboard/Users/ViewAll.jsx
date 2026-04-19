"use client";

import React, { useEffect, useState } from "react";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries, fetchAllParish } from "../../../Redux/Api";

function ViewParishes() {
  const [parish, setParishes] = useState([]);
  const [deaneries, setDeaneries] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchParishes = async () => {
    try {
      const { data } = await fetchAllParish();
      if (data) {
        setParishes(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDeanery = async () => {
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
    fetchParishes();
  }, []);

  useEffect(() => {
    fetchDeanery();
  }, []);

  const getDeaneryName = (id) => {
    const deanName = deaneries.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };
  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"View Parishes"}
        />
      </div>
      <div>
        <table class="table-fixed border w-[80%] mx-auto mt-[2.5rem]">
          <thead>
            <tr className="border-b">
              <th className=" py-[.5rem]">Name</th>
              <th className=" py-[.5rem]">Deanery</th>
              <th className=" py-[.5rem]">HasPaid</th>
            </tr>
          </thead>
          <tbody>
            {parish &&
              parish?.map((item) => (
                <tr className="text-center">
                  <td className="text-center border py-[.5rem]">
                    {item?.name}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {getDeaneryName(item?.deaneryId)}
                  </td>
                  <td className="text-center border py-[.5rem]">
                    {item?.hasPaid === false ? "No" : "Yes"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default ViewParishes;

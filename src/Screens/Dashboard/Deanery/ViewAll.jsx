"use client";

import React, { useEffect, useState } from "react";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries } from "../../../Redux/Api";

function ViewDeanries() {
  const [deaneries, setDeaneries] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
    fetchDeanery();
  }, []);

  deaneries.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"View Deaneries"}
        />
      </div>
      <div>
        <table className="table-fixed border w-[80%] mx-auto mt-[2rem]">
          <thead>
            <tr className="border-b">
              <th className=" py-[.5rem] w-[90px]">S/N</th>
              <th className=" py-[.5rem]">Name</th>
              <th className=" py-[.5rem]">Phone</th>
            </tr>
          </thead>
          <tbody>
            {deaneries &&
              deaneries?.map((item, index) => (
                <tr className="text-center border-b" key={index}>
                  <td>{index + 1}</td>

                  <td className="text-center uppercase border py-[.5rem]">
                    {item?.name}
                  </td>
                  <td>{item?.phoneNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default ViewDeanries;

"use client";

import React, { useEffect, useState } from "react";
import ExportButton from "../../../Components/Common/ExportButton";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries, fetchAllParish } from "../../../Redux/Api";

function ViewParishes() {
  const [parish, setParishes] = useState([]);
  const [deaneries, setDeaneries] = useState([]);
  const [newParishes, setNewParishes] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    // eslint-disable-next-line
  }, []);

  const getDeaneryName = (id) => {
    const deanName = deaneries.filter((item) => item.id.includes(id));
    return deanName[0]?.name;
  };

  useEffect(() => {
    alterArray();
    // eslint-disable-next-line
  }, [parish]);

  const alterArray = async () => {
    parish?.forEach((item, index, arr) => {
      const deaneryId = getDeaneryName(item?.deaneryId);
      arr[index] = {
        ...item,
        deaneryId: deaneryId,
      };

      setNewParishes(arr);
    });
  };

  // Sorting the array by the 'name' property
  newParishes.sort((a, b) => {
    if (a.deaneryId < b.deaneryId) {
      return -1;
    }
    if (a.deaneryId > b.deaneryId) {
      return 1;
    }
    return 0;
  });

  const filteredItems = newParishes?.filter((parish) =>
    parish?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onInputChange = (search) => {
    setSearchTerm(search);
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
      <div className="flex justify-end w-[90%] mx-auto mt-[1rem]">
        <ExportButton data={newParishes} fileName={"AYD Registered Parishes"} />
      </div>
      <div className="w-full">
        <div className="flex my-4 rounded-[5px] bg-primary mx-auto items-center w-[80%] md:w-[400px]">
          <input
            placeholder="Search Parish name "
            onChange={(e) => onInputChange(e.target.value)}
            className="py-[.5rem] rounded-tl-[5px] ounded-bl-[5px] w-[80%] px-[1rem] outline-none border-none "
          />
          <p className="px-[.5rem] text-white">Search</p>
        </div>
        {newParishes?.length !== 0 && (
          <table className="table-fixed border w-[96%] mx-auto mb-[2.5rem] ">
            <thead>
              <tr className="border-b text-[10px] md:text-[14px]">
                <th className=" py-[.5rem]  w-[30px] md:w-[90px]">S/N</th>
                <th className=" py-[.5rem]  w-[120px] md:w-auto">Name</th>
                <th className=" py-[.5rem] w-[50px]  md:w-[90px]">Deanery</th>
                <th className=" py-[.5rem] w-[30px] md:w-[90px]">Paid</th>
                <th className=" py-[.5rem] w-[20px] md:w-[90px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems &&
                filteredItems?.map((item, index) => (
                  <tr className="text-center" key={index}>
                    <td className="text-center text-[.6rem] md:text-[1rem] border py-[.5rem] w-[90px]">
                      {index + 1}
                    </td>
                    <td className="text-center text-[.6rem] md:text-[1rem] border py-[.5rem]">
                      {item?.name}
                    </td>
                    <td className="text-center  text-[.5rem] md:text-[1rem] border py-[.5rem]">
                      {item?.deaneryId}
                    </td>
                    <td className="text-center text-[.6rem] md:text-[1rem] border py-[.5rem]">
                      {item?.hasPaid === true ? "Yes" : "No"}
                    </td>
                    <td className="text-center border  text-[10px] md:text-[14px] py-[.5rem]">
                      <a
                        href={`/dashboard/parishes/${item?.id} `}
                        className="text-[green] hover:cursor-pointer"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default ViewParishes;

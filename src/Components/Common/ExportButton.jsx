"use client";

import React from "react";
import { exportToExcel } from "../../helpers/utils";

const ExportButton = ({ data, fileName }) => {
  const handleExport = () => {
    exportToExcel(data, fileName); // 'myData' will be the name of the Excel file
  };

  return (
    <button
      className="bg-green text-white hover:bg-primary px-[2rem] py-[.5rem] rounded-md"
      onClick={handleExport}
    >
      Export to Excel
    </button>
  );
};

export default ExportButton;

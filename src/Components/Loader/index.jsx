"use client";

import React from "react";
import "./Loader.css";
function Loader({ big }) {
  return <div class={big ? "lds-dual-ring2" : "lds-dual-ring"}></div>;
}

export default Loader;

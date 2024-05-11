import React from "react";
import Brands from "../components/Brands";
import Sidebar from "../components/Sidebar";

const BrandsPage = () => {
  return (
    <div className={`overflow-hidden`}>
      <Sidebar />
      <Brands />
    </div>
  );
};

export default BrandsPage;

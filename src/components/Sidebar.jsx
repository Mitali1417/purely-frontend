import React from "react";
import brandsData from "../brands.json";
import { styles } from "../style";

const Sidebar = () => {
  return (
    <div className=" hidden sm:flex relative z-10">
      <div
        className={`fixed top-0 bottom-0 left-0 w-[15rem] lg:w-[22rem] flex flex-col overflow-y-auto bg-[#bb96d2] px-[1rem]`}
        style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
      >
        {brandsData.AffordableSkincare.map((item) => (
          <a
            href={item.URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full`}
          >
            <div
              key={item.id}
              className="flex justify-center items-center my-[0.5rem] w-full h-fit hover:shadow-2xl border-[2px] border-white hover:border-[#BB96D2] transition-all duration-700 ease-in-out bg-white rounded-lg p-[1rem]"
            >
              <img
                src={item.Logo}
                className="w-fit h-[2.5rem] lg:h-[3rem]"
                alt={item.Brand}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

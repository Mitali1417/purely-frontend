import React from "react";
import Guide from "../components/Guide";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styles } from "../style";

const GuidePage = () => {
  return (
    <div className={`${styles.flexCenter} flex-col bg-[#AA7CC7] `}>
    <Navbar/>
    <Guide/>
    <Footer/>
    </div>
  );
};

export default GuidePage;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GuideSection from "../section/GuideSection";
import MustHave from "../components/MustHave";
import LuxSection from "../section/LuxSection";
import IndianBrands from "../section/IndianBrands";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className={`bg-[#AA7CC7]`}>
      <Navbar />
      <Hero />
      <GuideSection />
      <MustHave />
      <IndianBrands />
      <LuxSection />
      <Footer/>
    </div>
  );
};

export default HomePage;

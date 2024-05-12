import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GuideSection from "../section/GuideSection";
import MustHave from "../components/MustHave";
import IndianBrands from "../section/IndianBrands";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GuideSection />
      <MustHave />
      <IndianBrands />
      <Footer />
    </>
  );
};

export default HomePage;

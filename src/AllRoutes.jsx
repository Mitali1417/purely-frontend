import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GuidePage from "./pages/GuidePage";
import BrandsPage from "./pages/BrandsPage";
import ProtectedRoute from "./components/ProtectedRoute"; 

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guide" element={<ProtectedRoute><GuidePage /></ProtectedRoute>} />
        <Route path="/brands" element={<ProtectedRoute><BrandsPage /></ProtectedRoute>} />
        <Route path="/connect" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

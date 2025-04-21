import React from "react";
import {BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import InterviewScreen from "../components/InterviewScreen";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InterviewScreen />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

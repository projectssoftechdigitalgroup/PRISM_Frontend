import React from "react";
import {BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import InterviewScreen from "../components/InterviewScreen";
import Auth from "../pages/Auth";
import AuthContextProvider from "../context/AuthContextProvider";
import ProtectedRoute from "./ProtectedRoutes";

const AppRoute = () => {
  return (
    <AuthContextProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/*" element={
          <ProtectedRoute>

          <InterviewScreen />
          </ProtectedRoute>
          } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
};

export default AppRoute;

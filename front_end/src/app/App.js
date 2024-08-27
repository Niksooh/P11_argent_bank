import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import LoginPage from "../pages/Login";
import Footer from "../layouts/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

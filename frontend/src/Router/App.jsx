import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import "../App.css";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Profile } from "../Pages/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import QuizComponent from "../Pages/Quizz";
import "../assets/css/quizz.css";
import Dashboard from "../Pages/Dashboard";
import ResetPassword from "../Pages/ResetPassword";
import SendResetPassword from "../Pages/SendResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profil" element={<Profile />}></Route>
          <Route path="/quiz/:stack" element={<QuizComponent />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/resetPassword/:id" element={<ResetPassword />}></Route>
          <Route
            path="/sendresetpassword"
            element={<SendResetPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

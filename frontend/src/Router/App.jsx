import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import "../App.css";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Profile } from "../Pages/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Dashboard from "../Pages/Dashboard";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="343194206733-mortn374l872cl807nbln24khv30hu7m.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profil" element={<Profile />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;

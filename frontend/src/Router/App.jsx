import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import Profile from "../pages/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="343194206733-mortn374l872cl807nbln24khv30hu7m.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/register/:type" element={<Register />}></Route>
            <Route path="/login/" element={<Login />}></Route>
            <Route path="/profil" element={<Profile />}></Route>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import '../App.css'
import { Register } from "../pages/Register";
import { Login } from "../Pages/Login";
import { Profile } from "../Pages/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import QuizComponent from "../components/quizz";
import '../assets/css/quizz.css'

function App() {
 
  return (
    
    <>
      <GoogleOAuthProvider clientId="343194206733-mortn374l872cl807nbln24khv30hu7m.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/register/:type" element={<Register />}></Route>
            <Route path="/login/:type" element={<Login />}></Route>
            <Route path="/profil" element={<Profile />}></Route>
            <Route path="/quiz" element={<QuizComponent language='css'  />}></Route>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;

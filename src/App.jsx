import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import { Content } from "./Content.jsx";
import { ChiSiamo } from "./ChiSiamo.jsx";
import MainNav from "./MainNav.jsx";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/languages" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

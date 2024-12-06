import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { languages } from "./data/languages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import { Content } from "./Content.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<HomePage />} />
        <Route path="/languages" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

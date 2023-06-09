import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LikePage from "./pages/LikePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/favoris" element={<LikePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

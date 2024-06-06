import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Price_page from "./pages/Pricinig.jsx";
import Login from "./pages/Login.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricinig" element={<Price_page />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

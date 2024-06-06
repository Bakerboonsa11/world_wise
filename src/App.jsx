import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home_page";
import Product from "./pages/product.jsx";
import Price from "./pages/pricing.jsx";

function App() {
  return (
    <>
      <h1>this is a home page </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Price />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

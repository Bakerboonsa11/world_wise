import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Price_page from "./pages/Pricinig.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricinig" element={<Price_page />} />
          {/* <Route path="AppLayout" element={<AppLayout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

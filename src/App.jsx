import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Price_page from "./pages/Pricinig.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import CityList from "./components/CityList.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricinig" element={<Price_page />} />
          <Route path="Login" element={<Login />} />
          <Route path="App" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<p>countriess</p>} />
            <Route path="Form" element={<p>forms</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

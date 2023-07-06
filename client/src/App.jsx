import React, { useRef, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/Product/ProductPage";
import { iphone_14_pro_max, iphone_14_pro } from "./productsDetails";

import "./App.css";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/iphone_14_pro_max"
          element={<ProductPage product={iphone_14_pro_max} />}
        />
        <Route
          path="/products/iphone_14_pro"
          element={<ProductPage product={iphone_14_pro} />}
        />
      </Routes>
    </Router>
  );
}

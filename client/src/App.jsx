import React, { useRef, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductPage } from "./pages/Product/ProductPage";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import {
  iphone_14_pro_max,
  iphone_14_pro,
  iphone_14,
  iphone_13_pro_max,
  iphone_13_pro,
  iphone_13,
  iphone_12,
} from "./productsDetails";

import "./App.css";
export default function App() {
  return (
    <Router>
      <Routes>
        {/* main routes*/}
        <Route path="/" element={<Home />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/*product routes */}

        <Route
          path="/products/iphone_14_pro_max"
          element={<ProductPage product={iphone_14_pro_max} />}
        />
        <Route
          path="/products/iphone_14_pro"
          element={<ProductPage product={iphone_14_pro} />}
        />
        <Route
          path="/products/iphone_14"
          element={<ProductPage product={iphone_14} />}
        />
        <Route
          path="/products/iphone_13_pro_max"
          element={<ProductPage product={iphone_13_pro_max} />}
        />
        <Route
          path="/products/iphone_13_pro"
          element={<ProductPage product={iphone_13_pro} />}
        />
        <Route
          path="/products/iphone_13"
          element={<ProductPage product={iphone_13} />}
        />
        <Route
          path="/products/iphone_12"
          element={<ProductPage product={iphone_12} />}
        />
      </Routes>
    </Router>
  );
}

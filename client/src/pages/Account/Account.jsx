import React from "react";
import "./Account.css";
import { Navbar, Footer } from "../../components/index";
import { useCookies } from "react-cookie";

export const Account = () => {
  return (
    <main>
      <Navbar />
      <h1>My account</h1>
      <Footer />
    </main>
  );
};

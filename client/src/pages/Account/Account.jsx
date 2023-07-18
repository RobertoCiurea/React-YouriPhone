import React from "react";
import "./Account.css";
import { Navbar, Footer } from "../../components/index";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export const Account = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  return (
    <main className="account-body">
      {!cookies.access_token ? (
        <div className="message">
          <h1>Nu esti logat in cont</h1>
          <h3>
            Logheaza-te
            <Link to="/auth/login">acum!</Link>
          </h3>
        </div>
      ) : (
        <>
          <Navbar />
          <h1>My account</h1>
          <Footer />
        </>
      )}
    </main>
  );
};

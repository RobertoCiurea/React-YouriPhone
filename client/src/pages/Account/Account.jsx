import React, { useEffect, useState } from "react";
import "./Account.css";
import axios from "axios";
import { Navbar, Footer } from "../../components/index";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export const Account = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  //get userid
  const currentSearch = location.search;
  const id = currentSearch.split("=")[1];
  console.log(id);
  //query user data

  async function getUserData() {
    const response = await axios.post("http://localhost:3000/auth/myaccount", {
      id,
    });
    const userData = response.data.user;
    setUsername(userData.username);
    setEmail(userData.email);
    console.log(userData);
  }

  ``;
  useEffect(() => {
    getUserData();
  }, []);

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
          <div className="account-details">
            <h1>My account</h1>
            <h2>Username: {username}</h2>
            <h2>Email:{email}</h2>
          </div>
          <Footer />
        </>
      )}
    </main>
  );
};

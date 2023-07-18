import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Navbar.css";
import Logo from "../../assets/icons/logo.svg";
export const Navbar = ({ targetRef, dialogRef }) => {
  const [hamburger, setHamburger] = useState(false);
  //auth
  const [cookies, , removeToken] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logOut = () => {
    removeToken(["access_token"]);
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  function toggleHamburger() {
    setHamburger((prevSetHamburger) => !prevSetHamburger);
  }

  let toggleClassCheck = hamburger ? " active" : "";

  //scroll to element

  const handleScroll = () => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  //modal
  //account path
  const userId = window.localStorage.userID;
  const path = `/myaccount/?userid=${userId}`;
  function toggleDialog() {
    dialogRef.current.show();
  }
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Your iPhone</h1>
      </div>

      <nav className="nav">
        <ul className={`navbar-list${toggleClassCheck}`}>
          <li>
            <Link to="/">Acasa</Link>
          </li>
          <li>
            <Link to="/#about"> Despre</Link>
          </li>
          <li>
            <a onClick={toggleDialog}>Cos</a>
          </li>
          {!cookies.access_token ? (
            <li className="button">
              <Link to="/auth/login">Log in</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={path}>My Account</Link>
              </li>
              <li>
                <button className="button-danger" onClick={logOut}>
                  {" "}
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>
        <div
          className={`hamburger-toggle${toggleClassCheck}`}
          onClick={toggleHamburger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

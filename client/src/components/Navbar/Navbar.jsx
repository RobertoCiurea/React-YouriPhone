import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/icons/logo.svg";
export const Navbar = ({ targetRef, modalRef, dialogRef }) => {
  const [hamburger, setHamburger] = useState(false);

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

  function toggleModal(e) {
    e.preventDefault();
    modalRef.current.showModal();
  }

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
          <li className="button">
            <a onClick={toggleModal}>Login</a>
          </li>
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

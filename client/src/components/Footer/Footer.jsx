import React from "react";
import "./Footer.css";
import { Logo, Facebook, Instagram, Twitter } from "./index";
export const Footer = () => {
  return (
    <section className="footer">
      <div className="left-section">
        <div className="logo">
          <img src={Logo} alt="Your iPhone Logo" />
          <h1 className="title">Your Iphone</h1>
        </div>

        <nav className="footer-navbar">
          <ul className="footer-list">
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="middle-section">
        <div className="social-list">
          <img src={Facebook} alt="Facebook icon" />
          <img src={Instagram} alt="Instagram icon" />
          <img src={Twitter} alt="Twitter icon" />
        </div>
        <p> youriphone.com Copyright© 2023 </p>
      </div>
      <div className="right-section">
        <h1 className="footer-title">
          Ti-ai ales <span className="yellow-mark">telefonul?</span>
        </h1>
      </div>
    </section>
  );
};

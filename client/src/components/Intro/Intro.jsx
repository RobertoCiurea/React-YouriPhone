import React from "react";
import "./Intro.css";
import Banner from "../../assets/banners/iphone_14_banner.png";
export const Intro = () => {
  return (
    <section className="intro-section">
      <div className="content">
        <h1 className="title">
          Alege-ti iPhone-ul potrivit <span className="purple-mark">acum!</span>
        </h1>
        <p>
          Profita acum de gama noastra larga de telefoane iPhone si de
          accesorii.
        </p>
        <p>
          Alege produsul care ti se potriveste si nu ezita sa dai comanda. Pe
          langa acesta poti profita de unul dintre pachetele noastre
          promotionale!
        </p>
        <div className="flex">
          <h3>
            Telefon + <span className="purple-mark">Accesoriu</span>
            <h1 className="equal-sign">=</h1>
          </h3>
          <h1 className="sub-title">
            <span className="yellow-mark">10%</span>
            <br />
            reducere
          </h1>
        </div>
      </div>
      <img src={Banner} alt="Iphone 14 Banner" />
    </section>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./Grid.css";
import {
  Iphone_11,
  Iphone_11_pro,
  Iphone_11_pro_max,
  Iphone_12,
  Iphone_12_pro,
  Iphone_12_pro_max,
  Iphone_13,
  Iphone_13_pro,
  Iphone_13_pro_max,
  Iphone_14,
  Iphone_14_pro,
  Iphone_14_pro_max,
} from "./index";
export const Grid = ({ gridRef }) => {
  return (
    <section className="grid-section" ref={gridRef}>
      <div className="grid">
        {/*14*/}
        <div className="grid-item">
          <img src={Iphone_14_pro_max} alt="Iphone 14 Pro Max" />
          <div className="details">
            iPhone 14 Pro Max
            <button>
              <Link to="/products/iphone_14_pro_max">Detalii</Link>
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img src={Iphone_14_pro} alt="Iphone 14 Pro " />
          <div className="details">
            iPhone 14 Pro
            <button>
              <Link to="/products/iphone_14_pro">Detalii</Link>
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img src={Iphone_14} alt="Iphone 14" />
          <div className="details">
            iPhone 14
            <button>
              <Link to="/products/iphone_14">Detalii</Link>
            </button>
          </div>
        </div>
        {/*13 */}
        <div className="grid-item">
          <img src={Iphone_13_pro_max} alt="Iphone 13 Pro Max" />
          <div className="details">
            iPhone 13 Pro Max
            <button>
              <Link to="/products/iphone_13_pro_max">Detalii</Link>
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img src={Iphone_13_pro} alt="Iphone 13 Pro" className="big-image" />
          <div className="details">
            iPhone 13 Pro
            <button>
              <Link to="/products/iphone_13_pro">Detalii</Link>
            </button>
          </div>
        </div>

        <div className="grid-item">
          <img src={Iphone_13} alt="Iphone" />
          <div className="details">
            iPhone 13
            <button>
              <Link to="/products/iphone_13">Detalii</Link>
            </button>
          </div>
        </div>
        {/*12 */}
        <div className="grid-item">
          <img src={Iphone_12_pro_max} alt="Iphone 12 Pro Max" />
          <div className="details">
            iPhone 12 Pro Max
            <button>Detalii</button>
          </div>
        </div>

        <div className="grid-item">
          <img src={Iphone_12_pro} alt="Iphone 12 Pro" className="big-image" />
          <div className="details">
            iPhone 12 Pro
            <button>Detalii</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={Iphone_12} alt="Iphone 12" />
          <div className="details">
            iPhone 12
            <button>Detalii</button>
          </div>
        </div>

        {/*11*/}
        <div className="grid-item">
          <img
            src={Iphone_11_pro_max}
            alt="Iphone 11 Pro Max"
            className="big-image"
          />
          <div className="details">
            iPhone 11 Pro Max
            <button>Detalii</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={Iphone_11_pro} alt="Iphone 11 Pro " className="big-image" />
          <div className="details">
            iPhone 11 Pro
            <button>Detalii</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={Iphone_11} alt="Iphone 11 " />
          <div className="details">
            iPhone 11
            <button>Detalii</button>
          </div>
        </div>
      </div>
    </section>
  );
};

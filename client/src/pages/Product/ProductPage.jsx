import React, { useRef, useState } from "react";
import { Navbar, Footer, Modal, ShoppingCart } from "../../components/index";
import "./Product.css";
export const ProductPage = ({ product }) => {
  const images = product.photos;
  const [color, setColor] = useState(0);
  const [items, setItems] = useState([]);

  function addItems(product) {
    setItems((currentItems) => {
      return [
        ...currentItems,
        {
          id: crypto.randomUUID(),
          title: product.title,
          price: product.price,
          image: product.coverPhoto,
        },
      ];
    });
    console.log(items);
  }

  const modalRef = useRef(null);
  const dialogRef = useRef(null);
  return (
    <div className="container">
      <Navbar modalRef={modalRef} dialogRef={dialogRef} />
      <ShoppingCart dialogRef={dialogRef} items={items} setItems={setItems} />
      <Modal modalRef={modalRef} />
      <section className="product-section">
        <img src={images[color]} alt="Iphone 14 Pro max" />
        <div className="product-content">
          <h1>{product.title}</h1>
          <div className="color-options">
            <button
              className="purple-button"
              onClick={() => setColor(1)}
            ></button>
            <button
              className="gold-button"
              onClick={() => setColor(2)}
            ></button>
            <button
              className="silver-button"
              onClick={() => setColor(3)}
            ></button>
            <button
              className="black-button"
              onClick={() => setColor(0)}
            ></button>
          </div>
          <h3 className="cut-deal">
            {" "}
            <s>{product.cutPrice} Lei </s>
          </h3>
          <h2>{product.price} Lei</h2>
          <button className="buy-button" onClick={() => addItems(product)}>
            Adauga in cos
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

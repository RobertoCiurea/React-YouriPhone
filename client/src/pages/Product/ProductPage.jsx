import React, { useRef, useState } from "react";
import { Navbar, Footer, Modal, ShoppingCart } from "../../components/index";
import "./Product.css";
export const ProductPage = ({ product }) => {
  const images = product.photos;
  const classColors = product.colors;
  const [color, setColor] = useState(0);
  const [items, setItems] = useState([]);

  //add products to shopping cart
  function addItems(product) {
    setItems((currentItems) => {
      return [
        ...currentItems,
        {
          id: crypto.randomUUID(),
          title: product.title,
          price: product.price,
          image: images[color],
        },
      ];
    });
  }

  const modalRef = useRef(null);
  const dialogRef = useRef(null);
  return (
    <div className="container">
      <Navbar modalRef={modalRef} dialogRef={dialogRef} />
      <main className="main-section">
        <ShoppingCart dialogRef={dialogRef} items={items} setItems={setItems} />
        <Modal modalRef={modalRef} />
        <section className="product-section">
          <img src={images[color]} alt="Iphone 14 Pro max" />
          <div className="product-content">
            <h1>{product.title}</h1>
            <div className="color-options">
              {classColors.map((classColor, index) => {
                {
                  return (
                    <button
                      key={index}
                      className={classColor}
                      onClick={() => setColor(index)}
                    ></button>
                  );
                }
              })}
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
      </main>
    </div>
  );
};

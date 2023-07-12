import React, { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import "./ShoppingCart.css";
export const ShoppingCart = ({ dialogRef, items, setItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    items?.map((item) => {
      totalPrice += item.price;
    });
    setTotal(Math.floor(totalPrice));
  }, [items]);

  function closeDialog() {
    dialogRef.current.close();
  }

  function deleteItem(id) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  }
  return (
    <dialog className="dialog" ref={dialogRef}>
      <div className="dialog-content">
        <button className="close-dialog" onClick={closeDialog}>
          <img src={CloseIcon} alt="Close dialog" />
        </button>
        {items?.length > 0 ? (
          items.map((item) => {
            return (
              <div className="item-container" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="cover-image"
                />
                <div className="item-content">
                  <h3>{item.title}</h3>
                  <p>{item.price} Lei</p>
                </div>
                <button className="delete-item">
                  <img
                    src={CloseIcon}
                    alt="Delete item icon"
                    onClick={() => deleteItem(item.id)}
                  />
                </button>
              </div>
            );
          })
        ) : (
          <h3>Nu exista produse in cos</h3>
        )}
        <h2>Total: {total} Lei</h2>
      </div>
    </dialog>
  );
};

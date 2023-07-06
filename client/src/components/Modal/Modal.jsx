import React from "react";
import CloseIcon from "../../assets/icons/close.svg";
import "./Modal.css";
export const Modal = ({ modalRef }) => {
  function closeModal(e) {
    e.preventDefault();
    modalRef.current.close();
  }
  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>
          <img src={CloseIcon} alt="Close modal" />
        </button>
        <form>
          <h1>Login</h1>
          <input type="text" placeholder="Username . . . " />
          <input type="password" placeholder="Parola . . . " />
          <button className="login">Login</button>
          <p>Nu ai cont?</p>
          <a href="#">Creaaza-ti acum un cont</a>
        </form>
      </div>
    </dialog>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../assets/icons/newsletter.svg";
import "./Newsletter.css";

export const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([]);
  const inputRef = useRef("");

  //popup

  //toastify notification
  const notify = () =>
    toast.success("😎 Email trimis cu succes!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  function handleNewsletter(e) {
    e.preventDefault();
    setNewsletters((currentNewsletters) => {
      return [...currentNewsletters, inputRef.current.value];
    });
    inputRef.current.value = "";

    notify();
  }

  return (
    <section className="newsletter-section">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>
        Aboneaza-te la Newsletter-ul
        <span className="yellow-mark"> nostru!</span>
      </h1>
      <div className="newsletter-input">
        <form onSubmit={handleNewsletter}>
          <input
            ref={inputRef}
            type="email"
            placeholder="Email-ul tau..."
            required
          />
          <button type="submit">
            <img src={Button} alt="Submit Email Button" />
          </button>
        </form>
      </div>
    </section>
  );
};

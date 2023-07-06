import React, { useEffect, useRef, useState } from "react";
import Button from "../../assets/icons/newsletter.svg";
import "./Newsletter.css";

export const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([]);
  const inputRef = useRef("");

  //popup
  const [sent, setSent] = useState(false);

  function handleNewsletter(e) {
    e.preventDefault();
    setNewsletters((currentNewsletters) => {
      return [...currentNewsletters, inputRef.current.value];
    });
    inputRef.current.value = "";

    setSent(true);

    //hide popup
    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

  return (
    <section className="newsletter-section">
      {sent && (
        <div className="popup">
          <p>Email trimis cu succes!</p>
        </div>
      )}
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

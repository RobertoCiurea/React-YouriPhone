import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
export const Form = ({
  username,
  email,
  password,
  setUsername,
  setEmail,
  setPassword,
  title,
  onSubmit,
}) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [show, setShow] = useState(true);
  const passwordRef = useRef(null);

  function showPassword(e) {
    e.preventDefault();
    setShow((prevShow) => !prevShow);
    passwordRef.current.type = show ? "text" : "password";
  }
  return (
    <div className="form-content">
      {!cookies.access_token ? (
        <form onSubmit={onSubmit}>
          <h1>{title}</h1>
          <input
            type="text"
            placeholder="Username . . . "
            name="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Email . . . "
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-input">
            <input
              type="password"
              name="password"
              value={password}
              required
              ref={passwordRef}
              placeholder="Parola . . . "
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="show-password" onClick={showPassword}>
              {show ? "SHOW" : "HIDE"}
            </button>
          </div>
          <button className="login" type="submit">
            {title}
          </button>
          {title === "Login" ? (
            <>
              <p>Nu ai cont?</p>
              <Link to="/auth/register">Creaaza-ti acum un cont</Link>
            </>
          ) : (
            <>
              <p>Ai deja cont?</p>
              <Link to="/auth/login">Logheaza-te chiar acum!</Link>
            </>
          )}
          <Link to="/">Acasa</Link>
        </form>
      ) : (
        <div className="center">
          <h1>Esti deja logat</h1>
          <Link to="/">Acasa</Link>
        </div>
      )}
    </div>
  );
};

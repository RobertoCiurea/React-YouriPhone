import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
export const Form = ({
  username,
  email,
  passowrd,
  setUsername,
  setEmail,
  setPassowrd,
  title,
}) => {
  return (
    <div className="form-content">
      <form>
        <h1>{title}</h1>
        <input
          type="text"
          placeholder="Username . . . "
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email . . . "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={passowrd}
          placeholder="Parola . . . "
          onChange={(e) => setPassowrd(e.target.value)}
        />
        <button className="login">{title}</button>
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
      </form>
    </div>
  );
};

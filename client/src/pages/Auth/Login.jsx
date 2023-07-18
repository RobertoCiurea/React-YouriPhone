import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";
import { Form } from "../../components/Form/Form";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        email,
        password,
      });
      const passwordValid = response.data.passwordValid;
      const userFound = response.data.userFound;
      if (!userFound) {
        alert("Username sau email incorect! Incearca din nou");
      } else {
        if (!passwordValid) {
          alert("Parola nu este corecta! Incearca din nou");
        } else {
          setCookies("access_token", response.data.token);
          window.localStorage.setItem("userID", response.data.userID);
          const userId = window.localStorage.userID;
          const path = "/myaccount";
          const userLocation = `${path}/?userid=${userId}`;
          navigate(userLocation);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    //add form component for login
    <Form
      username={username}
      email={email}
      password={password}
      setUsername={setUsername}
      setEmail={setEmail}
      setPassword={setPassword}
      title="Login"
      onSubmit={onSubmit}
    />
  );
};

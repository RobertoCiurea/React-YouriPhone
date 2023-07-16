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
  const userId = window.localStorage.userID;
  const path = `/myaccount/?userid=${userId}`;
  async function onSubmit(e) {
    e.preventDefault();

    try {
      const resposne = await axios.post("http://localhost:3000/auth/login", {
        username,
        email,
        password,
      });
      setCookies("access_token", resposne.data.token);
      window.localStorage.setItem("userID", resposne.data.userID);
      console.log(resposne.data.user);
      navigate(path);
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

import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Auth.css";
import axios from "axios";
import { Form } from "../../components/Form/Form";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  //toastify notification

  const notFound = () => {
    toast.error("😮 Username sau email incorect! Incearca din nou", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const invalidPassword = () => {
    toast.error("😫 Parola nu este corecta! Incearca din nou", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
        notFound();
      } else {
        if (!passwordValid) {
          invalidPassword();
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
    <>
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
        theme="light"
      />
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
    </>
  );
};

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Auth.css";
import axios from "axios";
import { Form } from "../../components/Form/Form";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });

      //toastify notifications
      const succes = () => {
        toast.success("🤩 Inregistrare completa!", {
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
      const alertNotification = () => {
        toast.error("😤 Acest username sau email este deja folosit", {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
      const userFound = response.data.userFound;
      if (!userFound) {
        succes();
      } else {
        alertNotification();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //add form component for register
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
        title="Register"
        onSubmit={onSubmit}
      />
    </>
  );
};

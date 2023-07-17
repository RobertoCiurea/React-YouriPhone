import React, { useState } from "react";
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
      const userFound = response.data.userFound;
      if (!userFound) {
        alert("Inregistrare completa!");
      } else {
        alert("Acest username sau email este deja folosit");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //add form component for register
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
  );
};

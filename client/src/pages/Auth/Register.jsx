import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { Form } from "../../components/Form/Form";
export const Register = () => {
  const [username, setUsername] = useState("a");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });

      alert("Registration completed");
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

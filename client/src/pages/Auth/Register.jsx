import React, { useState } from "react";
import "./Auth.css";
import { Form } from "../../components/Form/Form";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    />
  );
};

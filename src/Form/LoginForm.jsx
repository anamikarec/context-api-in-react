import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Form } from "./Form";

const LoginForm = () => {
  const { handleLogin } = useContext(AppContext);

  const [username, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username);
  };
  return (
    <>
      <Form onSubmit={onSubmit} title="login">
        <input
          placeholder="name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form>
    </>
  );
};

export { LoginForm };

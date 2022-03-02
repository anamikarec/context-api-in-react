import React, { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

const Status = () => {
  const { isAuth, token } = useContext(AppContext);
  console.log(token);
  return <div>{isAuth ? `token is ${token}` : `User is not logged in.`}</div>;
};

export { Status };

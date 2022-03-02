import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const handleLogin = (username) => {
    setIsAuth(true);
    setToken(Date.now() + username);
  };

  const value = { isAuth, setIsAuth, handleLogin, token };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };

import React, { useState } from "react";
const LoginContext = React.createContext(null);
const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;

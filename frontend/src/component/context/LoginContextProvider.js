import React, { useState } from "react";
export const LoginContext = React.createContext(null);
const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userUid, setUserUid] = useState("");
  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userUid,
        setUserUid,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;

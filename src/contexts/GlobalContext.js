import { createContext, useState } from "react";
export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState();

  return (
    <GlobalContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

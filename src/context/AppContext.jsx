import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSessionValid, setIsSessionValid] = useState(null);
  return (
    <AppContext.Provider value={{ isSessionValid, setIsSessionValid }}>
      {children}
    </AppContext.Provider>
  );
};

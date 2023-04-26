import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [location, setLocation] = useState(false);
  const [loader, setLoader] = useState(false);
  
  return (
    <Context.Provider value={{ location, setLocation, loader, setLoader }}>{children}</Context.Provider>
  );
}

import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const GlobalContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <ContextProvider.Provider
      value={{
        toggle,
        setToggle,
        setting,
        setSetting,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useWrapContext = () => useContext(ContextProvider);

export default GlobalContextProvider;

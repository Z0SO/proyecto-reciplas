import React from "react";

import { createContext, useContext, useState } from "react";

const StateContext = createContext(); // inicalizacion de la API context

// se definen los estados iniciales
const initialState = {
  userProfile: false,
};

// creacion de contextProvider

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(false);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setactiveMenu, // es equivalente a declarar el objeto como "activeMenu: activeMenu"
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};

import React, { createContext, useState } from "react";

export const CalContex = createContext();

const Store = ({ children }) => {
  const [cal, setCal] = useState({
    sign: "",
    num: 0,
    res: 0,
    all: 0,
  });

  return (
    <CalContex.Provider value={[cal, setCal]}>{children}</CalContex.Provider>
  );
};

export default Store;

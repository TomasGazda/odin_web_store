import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function StatusProvider({ children }) {
  const value = useState([]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}
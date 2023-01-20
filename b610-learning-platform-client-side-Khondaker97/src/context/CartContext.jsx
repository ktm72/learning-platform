import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext(null);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const userLog = {};
  console.log(cart);
  let value = { cart, setCart, userLog };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartProvider;

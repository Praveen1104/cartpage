import React, { createContext, useContext, useReducer } from "react";
import data from './../static/data.json'
import { Cartreducer } from "./Cartreducer";
const datas = data;
const cart = createContext();
function Context({ children }) {
  const products = datas;
  const [state, dispatch] = useReducer(Cartreducer, {
    products: products,
    cart: [],
  });
  return <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>;
}
export const Cartstate = () => {
  return useContext(cart);
};

export default Context;

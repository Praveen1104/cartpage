import React from "react";
import "./Menucard.css";
import Singlecard from "./Singlecard";
import { Cartstate } from "../context/Context";
function Menucard() {
  const { state:{products}, dispatch } = Cartstate();


  return (
    <div className="card">
      {products.map((product) => (
        <>
          <span className="title">{product.cat_name}</span>
          <Singlecard product={product} key={product.id} />
        </>
      ))}
    </div>
  );
}

export default Menucard;

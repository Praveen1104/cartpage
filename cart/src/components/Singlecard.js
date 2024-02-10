import React from "react";
import "./singlecard.css";
import Addbutton from "./Addbutton";

function Singlecard({ product: { sub_categories } }) {
  return (
    <div className="singlecard">
      {sub_categories.map((p) => (
        <div>
          <p className="subcat">{p.sub_cat_name}</p>
          <Addbutton sub_categories={p} key={p.sub_cat_id}/>
        </div>
      ))}
    </div>
  );
}

export default Singlecard;

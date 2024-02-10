import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Menuitem.css";
import { Cartstate } from "../context/Context";
function Menuiems() {
  const { state:{products}, dispatch } = Cartstate();

  
  return (
    <div className="menuitem">
      <ListGroup title="Menu items">
        {products.map((product) => (
          <ListGroup.Item>
            <a href="/">{product.cat_name}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Menuiems;

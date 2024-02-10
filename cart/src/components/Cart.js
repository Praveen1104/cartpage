import React from "react";
import { Dropdown } from "react-bootstrap";
import { MdDeliveryDining } from "react-icons/md";
import "./cart.css";
import Cartpage from "./Cartpage";
function Cart() {
  return (
    <div>
      <div className="cart1">
        <div>
          <p> Your cart</p>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <MdDeliveryDining /> Delivery
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Pickup</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Cartpage />
    </div>
  );
}

export default Cart;

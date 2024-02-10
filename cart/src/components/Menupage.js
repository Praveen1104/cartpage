import React from "react";
import Menuiems from "./Menuiems";
import Searchpage from "./Searchpage";
import Cart from "./Cart";
import "./Menupage.css";
import Footer from "./Footer";
function Menupage() {
  return (
    <div>
      <div className="menupage">
        <Menuiems />
        <Searchpage />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default Menupage;

import React from "react";
import "./Banner.css";
import Backdrop from "./Backdrop";
import Menupage from "./Menupage";
import { Carousel } from "react-bootstrap";
function Banner() {
  return (
    <div className="banner">
      <div className="banner1">
        <Carousel>
          <Carousel.Item>
            <img
              src="	https://dev-restaurant.eezzypos.com/1-1-6yxpFFrA6woim0swIPvP.png
          "
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Backdrop />
      <Menupage />
    </div>
  );
}

export default Banner;

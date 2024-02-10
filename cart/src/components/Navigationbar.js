import React from "react";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import "./Navigationbar.css";
import data from './../static/data.json'
import Backdrop from "./Backdrop";
import Banner from "./Banner";
function Navigationbar() {
  console.log(data);
  return (
    <div className="wrapper">
      <div className="wrapper1">
        <a className="ima">
          <Image
            src="https://dev-restaurant.eezzypos.com/1-1-2HQiEIK9KRP3GqR2kqNg.png"
            roundedCircle
            height={60}
          />
        </a>
        <div className="cart">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <CiShoppingCart size={30} />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
              <Col xs={6} md={4}>
                <CiMenuBurger size={30} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default Navigationbar;

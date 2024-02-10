import React from "react";
import "./Footer.css";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="top1">
        <a>
          <Image
            src="https://dev-restaurant.eezzypos.com/1-1-2HQiEIK9KRP3GqR2kqNg.png"
            roundedCircle
            height={60}
          />
        </a>
        <Navbar data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Order Now</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Faq</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="logo">
        <FaInstagram size={40} />
        <FaFacebook size={40} />
        <FaYoutube size={40} />
        <FaTwitter size={40} />
      </div>
    </div>
  );
}

export default Footer;

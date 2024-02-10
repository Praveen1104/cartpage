import React from "react";
import "./searchpage.css";
import { CiSearch } from "react-icons/ci";
import { Form, InputGroup } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";
import Menucard from "./Menucard";
function Searchpage() {
  return (
    <div className="search">
      <div className="searchbar">
        <InputGroup size="lg">
          <InputGroup.Text>
            <CiSearch size={30} />
          </InputGroup.Text>
          <Form.Control />
          <InputGroup.Text>
            <IoIosClose size={30} />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <Menucard />
    </div>
  );
}

export default Searchpage;

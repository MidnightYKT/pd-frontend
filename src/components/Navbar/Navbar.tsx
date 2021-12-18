import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../image/logo.svg";
import entrance from "../../image/entrance.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

const navbar = () => {
  return (
    <div>
      <Navbar bg="white" variant="light" expand="lg" className="navbarOne">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100px"
            height="31,98px"
            className="img"
            alt=""
          />{" "}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Частным клиентам</Nav.Link>
            <Nav.Link href="#link">Бизнесу</Nav.Link>
            <Nav.Link href="#link">Инвесторам и акционерам</Nav.Link>
            <NavDropdown title="Ещё" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify">
            <Nav.Link href="products">Отделения и банкоматы</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Navbar bg="white" variant="light" expand="lg" className="navbarTwo">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Расчётный счёт</Nav.Link>
            <Nav.Link href="#link">Кредит</Nav.Link>
            <Nav.Link href="#link">Вклады и инвестиции</Nav.Link>
            <Nav.Link href="#link">Бизнес-карты</Nav.Link>
          </Nav>
          <div className="linkImg">
            <img src={entrance} alt=" " className="imgEntr" />
            <div className="linkWord">АЭБ Бизнес</div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
};

export default navbar;

import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBarr = ({ setisAuth, isAuth }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">USER PAGE </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-secondary">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/users">Users</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/admin">Admin</Link>
            </Button>
          </Nav>
          <Nav>
            <Button
              onClick={() => setisAuth(!isAuth)}
              eventKey={2}
              className="btn"
            >
              {isAuth ? "Logout" : "Login"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarr;

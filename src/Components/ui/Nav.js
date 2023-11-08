import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;
  const containerNav = NavStyle.containerNav;
  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container className={containerNav}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/#vision" style={{ color: "white" }}>
                Our Vision
              </Nav.Link>
              <Nav.Link href="/#who-we-are" style={{ color: "white" }}>
                Who We Are
              </Nav.Link>
              <Nav.Link href="/#local" style={{ color: "white" }}>
                What We Do -Local
              </Nav.Link>
              <Nav.Link href="/#abroad" style={{ color: "white" }}>
                What We Do -Abroad
              </Nav.Link>
              <Nav.Link href="/#volunteer" style={{ color: "white" }}>
                Volunteer
              </Nav.Link>
              <Nav.Link href="/#contact" style={{ color: "white" }}>
                Contact
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

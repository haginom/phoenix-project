import "../styles/layout.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Header = ({ about }) => {
  const location = useLocation();

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          bg="primary"
          variant={about ? "light" : "dark"}
          key={expand}
          expand={expand}
        >
          <Container className="navbarContainer" fluid>
            <Navbar.Brand href="#">Phoenix</Navbar.Brand>
            <Navbar.Toggle
              activekey={location.pathname}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ outline: "none" }}
            />
            <Navbar.Offcanvas
              className="offcanvas-component"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Phoenix
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link
                    as={Link}
                    to="/"
                    eventKey="/"
                    active={location.pathname === "/"}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/work"
                    eventKey="/work"
                    active={location.pathname === "/work/"}
                  >
                    Work
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/research"
                    eventKey="/research"
                    active={location.pathname === "/research/"}
                  >
                    Research
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/services"
                    eventKey="/services"
                    active={location.pathname === "/services/"}
                  >
                    Services
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    eventKey="/about"
                    active={location.pathname === "/about/"}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    eventKey="/contact"
                    active={location.pathname === "/contact/"}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;

import "../styles/layout.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "@reach/router";
import OffcanvasBg from "../images/Offcanvas.svg";
import logo from "../images/logo-white-crop.png";
import logoB from "../images/logo-black-crop.png";
import { Link } from "gatsby";

const Header = ({ background, about }) => {
  const location = useLocation();
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          className={`${background ? "navbarDark" : "navbarLight"}`}
          bg={`${background ? background : "primary"}`}
          variant={about ? "light" : "dark"}
          key={expand}
          expand={expand}
        >
          <Container className="navbarContainer" fluid>
            <Navbar.Brand as={Link} to="/">
              {background ? (
                <img src={logoB} alt="Logo Phoenix" className={`navLogo`} />
              ) : (
                <img src={logo} alt="Logo Phoenix" className={`navLogo`} />
              )}
            </Navbar.Brand>
            <Navbar.Toggle
              activekey={location.pathname}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              <svg
                className={`${background ? "filterDark" : null}`}
                width="39"
                height="53"
                viewBox="0 0 39 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.6044 32.7654L36.85 35.4869L0 35.5408L1.75433 32.8193L38.6044 32.7654Z"
                  fill="white"
                />
                <path
                  d="M38.6044 24.7654L36.85 27.4869L0 27.5408L1.75433 24.8193L38.6044 24.7654Z"
                  fill="white"
                />
                <path
                  d="M38.6044 16.7654L36.85 19.4869L0 19.5408L1.75433 16.8193L38.6044 16.7654Z"
                  fill="white"
                />
              </svg>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              className="offcanvas-component"
              id={`offcanvasNavbar-expand-${expand} offcanvasBg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <img className="offcanvas-image" src={OffcanvasBg} alt="" />
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {" "}
                  <img src={logoB} className={`navLogo`} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link
                    href="/"
                    eventKey="/"
                    active={location.pathname === "/"}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/work"
                    eventKey="/work"
                    active={location.pathname === "/work/"}
                  >
                    Work
                  </Nav.Link>
                  <Nav.Link
                    href="/research"
                    eventKey="/research"
                    active={location.pathname === "/research/"}
                  >
                    Research
                  </Nav.Link>
                  <Nav.Link
                    href="/services"
                    eventKey="/services"
                    active={location.pathname === "/services/"}
                  >
                    Services
                  </Nav.Link>
                  <Nav.Link
                    href="/about"
                    eventKey="/about"
                    active={location.pathname === "/about/"}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="/contact"
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

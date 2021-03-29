import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  // handleClickUserLogOut,
  Navbar,
  Nav,
  FormControl,
  // Button,
  Form,
  Dropdown,
  Container,
} from "react-bootstrap";
import NavbarLinksMenu from "./navbarOverlayMenus/navbar_links_menu";
import LanguageMenu from "./navbarOverlayMenus/language_menu";
//import logoImg from "../../images/logo.png";
import "../layout.css";
import "./headerStyle.css";
import {
  navbarOptions,
  headerOverlayContentType,
} from "../../utils/constants/header";
import useHeader from "./useHeader";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

const Header = ({ siteTitle }) => {
  const {
    show,
    setShowWithCancel: setShow,
    debouncedSetShowFalse,
    content,
    setMenuContent,
    setContent,
  } = useHeader();
  return (
    <>
      <header className="navigation">
        <Navbar>
          <Nav className="container-fluid">
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  onMouseOver={e => {
                    setContent(headerOverlayContentType.OFFICES);
                    setShow(true);
                  }}
                  onMouseLeave={debouncedSetShowFalse}
                  className={
                    content === headerOverlayContentType.LANGUAGES &&
                    show === true
                      ? "disappear"
                      : ""
                  }
                >
                  Offices
                </Dropdown.Toggle>
              </Dropdown>
            </Nav.Item>

            <Nav.Item className="ml-auto">
              <Dropdown>
                <Dropdown.Toggle
                  value={headerOverlayContentType.LANGUAGES}
                  onMouseOver={e => {
                    setContent(e.target.value);
                    setShow(true);
                  }}
                  onMouseLeave={debouncedSetShowFalse}
                  className={
                    content === headerOverlayContentType.OFFICES &&
                    show === true
                      ? "disappear"
                      : ""
                  }
                  id="dropdown-basic"
                >
                  Language | English
                </Dropdown.Toggle>
              </Dropdown>
            </Nav.Item>
            <div
              style={{
                width: "500px",
                height: "20px",
                minwidth: "200px",
              }}
            />
            <Nav.Item
              className={
                Object.values(headerOverlayContentType).includes(content) &&
                show === true
                  ? "disappear"
                  : ""
              }
            >
              <Form inline className="searchBar">
                <FormControl type="text" placeholder="Search" />
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar>
        <div className="pos-f-t">
          <Navbar expand="xl">
            <FaBars className="navbar-hamburger-menu" size={40} />
            <div>
              <li>
                <a className="navbar-brand" href="#">
                </a>
              </li>
            </div>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle
              style={{ color: "white" }}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={
                Object.values(headerOverlayContentType).includes(content) &&
                show === true
                  ? "disappear"
                  : ""
              }
            >
              <Nav className="mr-auto navbar-menu-items">
                {navbarOptions.map((option, index) => (
                  <Nav.Item
                    key={index}
                    as="li"
                    {...option}
                    activeClassName="active"
                    value={option.name}
                    onMouseOver={() => {
                      setMenuContent(option.name);
                      setShow(true);
                    }}
                    onMouseLeave={debouncedSetShowFalse}
                  >
                    <div>{option.name}</div>
                  </Nav.Item>
                ))}
              </Nav>
              <div>
                <button
                  type="button"
                  style={{ marginRight: "10px" }}
                  className="btn btn-primary contact-info-btn"
                  color="#00a1f1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar"
                    viewBox="0 0 16 16"
                    color="white"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>{" "}
                  Schedule a consultation
                </button>

                <button
                  type="button"
                  className="btn btn-primary contact-info-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>{" "}
                  1-800-000-0000
                </button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Container
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className={show ? "overlay-div" : "hide"}
        >
          {Object.values(headerOverlayContentType).includes(content) ? (
            content === headerOverlayContentType.LANGUAGES ? (
              <LanguageMenu />
            ) : (
              <div style={{ textAlign: "center" }}>
                Offices aren't yet implemented
              </div>
            )
          ) : content && content.rows ? (
            <NavbarLinksMenu content={content} />
          ) : (
            <div style={{ textAlign: "center" }}>
              {" "}
              Overlay Menu for option: {content} is not yet implemented{" "}
            </div>
          )}
        </Container>
      </header>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

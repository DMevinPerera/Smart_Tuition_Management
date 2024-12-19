import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to manage login status
  const [userName, setUserName] = useState("Guest"); // Example user name for display

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUserName("Guest");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Brand Title */}
          <Navbar.Brand className="navbar-brand">
            Smart Tuition Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {/* Conditionally render based on login state */}
              {isLoggedIn ? (
                <>
                  <Nav.Link className="username">{`Welcome, ${userName}`}</Nav.Link>
                  <Nav.Link onClick={logoutHandler} className="logoutbutton logoutandloginbutton">
                    Log Out
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => navigate("/login")} className="loginbutton logoutandloginbutton">
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
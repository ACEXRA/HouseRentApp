import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "./context/LoginContextProvider";

const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const logoutHandler = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <Navbar className="bg-primary" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand as={Link} to="/welcome">
            House Rent
          </Navbar.Brand>
          {loggedIn && (
            <Nav>
              <Nav.Link as={Link} to="/houseDetails">
                House Details
              </Nav.Link>
              <Nav.Link as={Link} to="/paymentDetails">
                Payment Details
              </Nav.Link>
              <Nav.Link as={Link} to="/complaints">
                Complaints
              </Nav.Link>
              <NavDropdown title="Settings">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-primary" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand as={Link} to="/welcome">
            House Rent
          </Navbar.Brand>
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
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

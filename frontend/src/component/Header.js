import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#welcome">House Rent</Navbar.Brand>
          <Nav>
            <Nav.Link href="#houseDetails">House Details</Nav.Link>
            <Nav.Link href="#paymentDetails">Payment Details</Nav.Link>
            <Nav.Link href="#complaints">Complaint</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

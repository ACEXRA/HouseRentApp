import React from "react";
import { Card, Container } from "react-bootstrap";

const HouseCard = ({ houseData }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{houseData.houseName}</Card.Title>
        <Container>
          <div>Floor : {houseData.floor}</div>
          <div>Tenant : {houseData.tenant}</div>
          <div>Location : {houseData.location}</div>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default HouseCard;

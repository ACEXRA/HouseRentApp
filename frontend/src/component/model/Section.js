import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ children }) => {
  return (
    <Container
      bsPrefix="section"
      className="h-100 d-flex justify-content-center align-items-center"
    >
      {children}
    </Container>
  );
};

export default Section;

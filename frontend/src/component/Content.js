import React from "react";
import Routing from "./routing/Routing";
import Section from "./model/Section";
import { Container } from "react-bootstrap";

const Content = () => {
  return (
    <Container style={{ height: "calc(100vh - 80px)" }}>
      <Section>
        <Routing />
      </Section>
    </Container>
  );
};

export default Content;

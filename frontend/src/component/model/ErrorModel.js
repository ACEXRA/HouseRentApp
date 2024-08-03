import React from "react";
import { Container } from "react-bootstrap";

const ErrorModel = ({ message }) => {
  return <Container style={{ color: "red" }}>{message}</Container>;
};

export default ErrorModel;

import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const clickHandler = (route) => {
    navigate(route, { replace: true });
  };
  return (
    <Container>
      <h4>House Rent Applicaiton</h4>
      <div className="d-flex justify-content-between">
        <Button onClick={() => clickHandler("/tenantLogin")}>Tenant</Button>
        <Button onClick={() => clickHandler("/ownerLogin")}>Owner</Button>
      </div>
    </Container>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginModel = () => {
  const [loginModel, setLoginModel] = useState("Login");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/ownerLogin") {
      setLoginModel("Owner Login");
    }
    if (path === "/tenantLogin") {
      setLoginModel("Tenant Login");
    }
  }, []);
  return (
    <Form style={{ width: "320px" }} onSubmit={submitHandler}>
      <h4>{loginModel}</h4>
      <Form.Group className="py-2">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="py-2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="pt-2">
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
};

export default LoginModel;

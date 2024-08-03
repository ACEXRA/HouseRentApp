import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LoginContext } from "../../../context/LoginContextProvider";
import ErrorModel from "../../../model/ErrorModel";
import { auth } from "../../../dbConfig/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginModel = () => {
  const navigate = useNavigate();
  const { setLoggedIn, setUserUid } = useContext(LoginContext);

  const [loginModel, setLoginModel] = useState("Login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //authentication
  const submitHandler = (e) => {
    e.preventDefault();
    const ownerObj = {
      email: email,
      password: password,
    };
    ownerAuth(ownerObj);
    setEmail("");
    setPassword("");
  };

  const ownerAuth = async (owner) => {
    signInWithEmailAndPassword(auth, owner.email, owner.password)
      .then((res) => {
        setUserUid(res.user.uid);
        setLoggedIn(true);
        setError("");
        navigate("/houseDetails");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //To route owner and tenant
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
        <Form.Label>email</Form.Label>
        <Form.Control
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="py-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {error && <ErrorModel message={"Username or password incorrect"} />}
      <Form.Group className="pt-2">
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
};

export default LoginModel;

import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router";
import House from "../module/house/House";
import PaymentDetails from "../module/paymentDetails/PaymentDetails";
import Complaint from "../module/complaint/Complaint";
import Welcome from "../module/welcome/Welcome";
import LoginModel from "../module/authentication/login/LoginModel";
import { LoginContext } from "../context/LoginContextProvider";

const Routing = () => {
  const { loggedIn } = useContext(LoginContext);
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/tenantLogin" element={<LoginModel />} />
      <Route path="/ownerLogin" element={<LoginModel />} />
      <Route path="*" element={<Navigate to="/welcome" />} />
      {loggedIn && (
        <>
          <Route path="/houseDetails" element={<House />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/complaints" element={<Complaint />} />
        </>
      )}
    </Routes>
  );
};

export default Routing;

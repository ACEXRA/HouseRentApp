import React from "react";
import { Route, Routes } from "react-router";
import House from "../module/house/House";
import PaymentDetails from "../module/paymentDetails/PaymentDetails";
import Complaint from "../module/complaint/Complaint";
import Welcome from "../module/welcome/Welcome";

const Routing = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/houseDetails" element={<House />} />
      <Route path="/paymentDetails" element={<PaymentDetails />} />
      <Route path="/complaints" element={<Complaint />} />
    </Routes>
  );
};

export default Routing;

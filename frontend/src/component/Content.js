import React from "react";
import PaymentDetails from "./module/paymentDetails/PaymentDetails";
import House from "./module/house/House";
import Complaint from "./module/complaint/Complaint";

const Content = () => {
  return (
    <div>
      <House />
      <PaymentDetails />
      <Complaint />
    </div>
  );
};

export default Content;

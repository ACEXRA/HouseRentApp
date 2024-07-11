import React from "react";
import Tenant from "./Tenant";
import Owner from "./Owner";
import HomePage from "./HomePage";

const Welcome = () => {
  return (
    <div>
      <Tenant />
      <Owner />
      <HomePage />
    </div>
  );
};

export default Welcome;

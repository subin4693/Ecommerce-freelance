import React from "react";
import PaymentTable from "./PaymentTable";
import BrandTopBar from "@/components/BrandTopBar";

const Payments = () => {
  return (
    <div>
      <BrandTopBar pageTitle={"Payments"} />
      <PaymentTable />
    </div>
  );
};

export default Payments;

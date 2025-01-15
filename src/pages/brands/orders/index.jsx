import React from "react";
import OrderTable from "./OrderTable";
import BrandTopBar from "@/components/BrandTopBar";

const Orders = () => {
  return (
    <div>
      <BrandTopBar pageTitle={"Orders"} />
      <OrderTable />
    </div>
  );
};

export default Orders;

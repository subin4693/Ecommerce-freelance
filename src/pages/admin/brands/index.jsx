import AdminTopbar from "@/components/AdminTopbar";
import React, { useState } from "react";
import BrandTables from "./BrandTables";

const Brands = () => {
  return (
    <div>
      <AdminTopbar pageTitle={"Brands"} />
      <div>
        <BrandTables />
      </div>
    </div>
  );
};

export default Brands;

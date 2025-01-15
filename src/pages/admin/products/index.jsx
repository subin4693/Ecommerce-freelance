import AdminTopbar from "@/components/AdminTopbar";
import React from "react";
import ProductTable from "./ProductTable";

const Products = () => {
  return (
    <div>
      <AdminTopbar pageTitle={"Products"} />
      <ProductTable />
    </div>
  );
};

export default Products;
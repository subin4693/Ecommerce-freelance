import React from "react";
import ProductTable from "./ProductTable";
import BrandTopBar from "@/components/BrandTopBar";

const Products = () => {
  return (
    <div>
      <BrandTopBar pageTitle={"Products"} />
      <ProductTable />
    </div>
  );
};

export default Products;

import AdminTopbar from "@/components/AdminTopbar";
import CategoriesTable from "./CategoriesTable";
import React from "react";

const Categories = () => {
  return (
    <div>
      <AdminTopbar pageTitle={"Categories"} />
      <CategoriesTable />
    </div>
  );
};

export default Categories;

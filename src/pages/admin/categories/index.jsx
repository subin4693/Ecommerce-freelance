import AdminTopbar from "@/components/AdminTopbar";
import CategoriesTable from "./CategoriesTable";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateCategorieBox from "./CreateCategorieBox";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      _id: "abcd",
      name: "Electronics",
      description:
        "Category for electronic products such as phones, laptops, and gadgets.",
      image: {
        public_id: "electronics_image_001",
        url: "https://ui.shadcn.com/avatars/shadcn.jpg",
      },
      createdAt: "2025-01-01T10:00:00Z",
    },
  ]);

  return (
    <div>
      <AdminTopbar pageTitle={"Categories"} />
      <div className="text-right">
        <CreateCategorieBox setCategories={setCategories}>
          <Button className="bg-green-400 hover:bg-green-500">
            Create new
          </Button>
        </CreateCategorieBox>
      </div>
      <CategoriesTable categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default Categories;

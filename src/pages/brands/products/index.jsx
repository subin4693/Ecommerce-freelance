import AdminTopbar from "@/components/AdminTopbar";
import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { Button } from "@/components/ui/button";
import CreateProduct from "./CreateProduct";

const Products = () => {
  const [products, setProducts] = useState([
    {
      _id: "abcd",
      name: "Eco-Friendly Water Bottle",
      description:
        "Reusable stainless steel water bottle with a capacity of 750ml, BPA-free and insulated.",
      category: {
        id: "cat456",
        name: "Home & Kitchen",
      },
      price: 24.99,
      stock: 300,
      images: [
        {
          public_id: "bottle_image_1",
          url: "https://ui.shadcn.com/avatars/shadcn.jpg",
        },
        {
          public_id: "bottle_image_1",
          url: "https://ui.shadcn.com/avatars/shadcn.jpg",
        },
        {
          public_id: "bottle_image_1",
          url: "https://ui.shadcn.com/avatars/shadcn.jpg",
        },
      ],
      brand: {
        id: "brand456",
        name: "GreenLife",
      },
      sold_out: 40,
      createdAt: "2025-01-15T09:45:00Z",
    },
  ]);

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
    {
      _id: "abcd",
      name: "Electrsdfonics",
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
      <AdminTopbar pageTitle={"Products"} />
      <div className="text-right">
        <CreateProduct categories={categories} setProducts={setProducts}>
          <Button className="bg-green-400 hover:bg-green-500">
            Create new
          </Button>
        </CreateProduct>
      </div>
      <ProductTable product={products} categories={categories} />
    </div>
  );
};

export default Products;

import AdminTopbar from "@/components/AdminTopbar";
import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [product, setProduct] = useState([
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
          url: "https://example.com/images/bottle1.jpg",
        },
      ],
      brand: {
        id: "brand456",
        name: "GreenLife",
      },
      sold_out: 40,
      createdAt: "2025-01-15T09:45:00Z",
    },
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
          url: "https://example.com/images/bottle1.jpg",
        },
      ],
      brand: {
        id: "brand456",
        name: "GreenLife",
      },
      sold_out: 40,
      createdAt: "2025-01-15T09:45:00Z",
    },
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
          url: "https://example.com/images/bottle1.jpg",
        },
      ],
      brand: {
        id: "brand456",
        name: "GreenLife",
      },
      sold_out: 40,
      createdAt: "2025-01-15T09:45:00Z",
    },
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
          url: "https://example.com/images/bottle1.jpg",
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
  return (
    <div>
      <AdminTopbar pageTitle={"Products"} />

      <ProductTable product={product} />
    </div>
  );
};

export default Products;

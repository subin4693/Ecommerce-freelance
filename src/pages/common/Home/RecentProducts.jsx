import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Heart, ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";

const RecentProducts = () => {
  const [products, setProducts] = useState([
    {
      name: "Dress One",
      price: "500",
      description:
        "Description for the product Description for the productDescription for the productDescription for the productDescription for the productDescription for the productDescription for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress Two",
      price: "600",
      description: "Another description for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress One",
      price: "500",
      description:
        "Description for the product Description for the productDescription for the productDescription for the productDescription for the productDescription for the productDescription for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress Two",
      price: "600",
      description: "Another description for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress One",
      price: "500",
      description:
        "Description for the product Description for the productDescription for the productDescription for the productDescription for the productDescription for the productDescription for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress Two",
      price: "600",
      description: "Another description for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress One",
      price: "500",
      description:
        "Description for the product Description for the productDescription for the productDescription for the productDescription for the productDescription for the productDescription for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
    {
      name: "Dress Two",
      price: "600",
      description: "Another description for the product",
      image:
        "https://olliesplace.com.au/cdn/shop/files/IPBG2271-BK-baby-girls-blue-rosel-dress-online-sale_eb8f7d1f-2143-4b84-a5c3-78fd2a33b48b.jpg?v=1722494617&width=533",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#918ba7] mb-6">
          Most Recent Products
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products?.map(({ name, image, price, description }, index) => {
          return (
            <Cards
              key={index}
              name={name}
              image={image}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

const Cards = ({ name, image, price, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="relative overflow-hidden shadow-lg rounded-lg border p-4 group hover:border hover:border-primary shadow-sm hover:shadow-lg duration-200 shadow-primary h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-sm mb-2 line-clamp-2">{description}</p>
        <p className="text-green-600 font-bold  ">$ {price}</p>
        <div className="flex absolute top-8 right-8 gap-2 opacity-0 group-hover:opacity-100 duration-200">
          <Button size="icon" className="hover:bg-purple-900">
            <ShoppingBasket />
          </Button>
          <Button size="icon" className="hover:bg-purple-900">
            <Heart />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default RecentProducts;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";

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
      description: "Description for the product",
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
      description: "Description for the product",
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
      description: "Description for the product",
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
    <div>
      <div>
        <h2 className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-[#7ca9af] to-[#5b3b6d] bg-clip-text text-transparent mb-6">
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
    </div>
  );
};

const Cards = ({ name, image, price, description }) => {
  return (
    <Card className="relative group overflow-hidden shadow-lg rounded-lg border ">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-black p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-sm mb-2 line-clamp-2">{description}</p>

        <Button className="bg-[#73477a] hover:bg-[#a478d9]">$ {price}</Button>
      </div>
    </Card>
  );
};

export default RecentProducts;

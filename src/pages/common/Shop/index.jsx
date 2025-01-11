import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import ProductsCard from "./ProductsCard";
import { Input } from "@/components/ui/input";
import { PanelsTopLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
const Shop = () => {
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
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex  h-full w-full   py-5">
      <div className="min-h-[50vh] fixed z-[5] bg-white mt-[40px]  bottom-0 top-0 pt-10  ">
        <Sidebar isSidebarOpen={sidebar} setIsSidebarOpen={setSidebar} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-20 ">
          <div className="relative w-full flex justify-end pr-6 md:pr-0 md:justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSidebar((prev) => !prev)}
              className="absolute left-6"
            >
              <PanelsTopLeft />
            </Button>
            <div className="relative w-[80%] md:w-1/2">
              <Input
                type="text"
                placeholder="Search here"
                className="w-full pl-10"
              />
              <Search className="absolute left-2 top-[6px] text-[#7768A6] " />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 p-6 ">
            {products.map(({ name, image, price, description }) => {
              return (
                <ProductsCard
                  name={name}
                  image={image}
                  price={price}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;

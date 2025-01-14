import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import ProductsCard from "./ProductsCard";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state?.products?.products);

  const [sidebar, setSidebar] = useState(false);

  const setSidebarState = () => {
    setSidebar((prev) => {
      localStorage.setItem("sidebarStatus", !prev);

      return !prev;
    });
  };

  useEffect(() => {
    let sidebarStatus = localStorage.getItem("sidebarStatus");
    setSidebar(sidebarStatus == "true");
  }, []);

  return (
    <div className="flex  h-full w-full   py-5 ">
      {/* {sidebar && (
        <div
          className="fixed  z-[3]  inset-0"
          onClick={() => setSidebar(false)}
        />
      )} */}
      <div className="min-h-[50vh] fixed z-[5] bg-white mt-[40px]  bottom-0 top-0 pt-10  ">
        <Sidebar isSidebarOpen={sidebar} setSidebarState={setSidebarState} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div
          className={`duration-300 mt-20 transform   ${
            sidebar ? "ml-full md:ml-[400px]" : "ml-0"
          }`}
        >
          <div className="relative w-full flex justify-end pr-6 md:pr-0 md:justify-center b">
            <Button
              variant="outline"
              size="icon"
              onClick={setSidebarState}
              className="absolute left-6"
            >
              <Filter />
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
          <div
            className={`grid    gap-6 p-6 ${
              sidebar
                ? "grid-cols-1 sm:grid-cols-1  lg:grid-cols-3  "
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            } `}
          >
            {products.map(
              ({
                _id,
                name,
                image,
                price,
                description,
                brand,
                isOutOfStock,
                quantity,
                isInWishList,
              }) => {
                return (
                  <ProductsCard
                    _id={_id}
                    name={name}
                    image={image}
                    price={price}
                    description={description}
                    brand={brand}
                    isOutOfStock={isOutOfStock}
                    quantity={quantity}
                    isInWishList={isInWishList}
                  />
                );
              }
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Heart, ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";

const ProductsCard = ({ name, image, price, description }) => {
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

export default ProductsCard;

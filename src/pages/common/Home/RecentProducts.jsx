import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, addToWishList } from "@/features/products/productSlice";

const RecentProducts = () => {
  const products = useSelector((state) => state?.products?.products);

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
        {products?.map(({ _id, name, image, price, description, quantity }) => {
          return (
            <Cards
              key={_id}
              _id={_id}
              name={name}
              quantity={quantity}
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

const Cards = ({ _id, quantity, name, image, price, description }) => {
  const dispatch = useDispatch();
  const changeQuantity = () => {
    dispatch(addQuantity(_id));
  };

  const addToWish = () => {
    dispatch(addToWishList(_id));
  };
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
        <p className="text-green-600 font-bold  ">&#x20B9; {price}</p>
        <div className="flex absolute top-8 right-8 gap-2 opacity-0 group-hover:opacity-100 duration-200">
          <Button
            size="icon"
            className="hover:bg-purple-900"
            onClick={changeQuantity}
          >
            <ShoppingCart />
          </Button>
          <Button
            size="icon"
            className="hover:bg-purple-900"
            onClick={addToWish}
          >
            <Heart />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default RecentProducts;

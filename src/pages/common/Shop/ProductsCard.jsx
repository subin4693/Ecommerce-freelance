import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Heart, ShoppingBasket } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductsCard = ({
  name,
  image,
  price,
  description,
  brand,
  isOutOfStock,
}) => {
  const handleWishList = (e) => {
    e.stopPropagation();
  };
  return (
    <DialogCard
      name={name}
      image={image}
      price={price}
      description={description}
      brand={brand}
    >
      <Card className="relative flex flex-col overflow-hidden shadow-lg rounded-lg border p-4 group hover:border hover:border-primary shadow-sm hover:shadow-lg duration-200 shadow-primary h-full">
        <div className="flex flex-col flex-1  ">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />{" "}
          <Button
            className="text-black hover:bg-destructive absolute top-5 right-5 "
            variant="outline"
            size="icon"
            onClick={handleWishList}
          >
            <Heart />
          </Button>
          {isOutOfStock && (
            <span className="absolute top-5 left-5 bg-white p-1 rounded-md shadow-md text-destructive">
              Out of stock
            </span>
          )}
          <p className="text-sm font-bold text-left">{brand}</p>
          <h2 className="text-lg font-semibold   text-left">{name}</h2>
          {/* <p className="text-sm mb-2 line-clamp-2 text-left ">{description}</p> */}
          <div className="flex items-center justify-between">
            <p className=" text-lg font-bold text-left "> &#x20B9; {price}</p>{" "}
            <Button className="  text-black  ">Add to cart</Button>
          </div>
        </div>
      </Card>
    </DialogCard>
  );
};

const DialogCard = ({ children, name, image, price, description, brand }) => {
  const images = [image, image, image, image, image, image];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className=" max-w-full md:w-[1000px] flex p-2 flex-col md:flex-row flex-1">
        <div className="  md:w-1/2 relative group h-[300px] md:h-[500px]">
          <div className="h-full">
            <img src={currentImage} className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-start overflow-x-auto gap-2 absolute bottom-0 duration-300 opacity-0 group-hover:opacity-100  ease-in-out bg-gray-900/20 w-fit max-w-[80%] rounded-md  p-2">
              {images.map((img) => (
                <div
                  className="border-primary shadow-xl hover:scale-110 duration-300 md:basis-1/2 lg:basis-1/5"
                  onClick={() => setCurrentImage(img)}
                >
                  <img
                    src={img}
                    className="min-w-20 h-20 rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-5">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <p className="text-sm font-bold">{brand}</p>
            <DialogDescription className="indent-7">
              {description}
            </DialogDescription>
            <DialogTitle>Price : {price}</DialogTitle>
            <div className="flex gap-2 ">
              <Button className="flex-1 text-black  ">Add to cart</Button>
              <Button
                className="text-black hover:bg-destructive"
                variant="outline"
                size="icon"
              >
                <Heart />
              </Button>
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductsCard;

/*
banner round edge
arrow to top
cart icon
cart quantity
  product name && brand name
  checkout button
remove all service nav bar
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import {
  addQuantity,
  addToWishList,
  removeFromWishList,
  seperateQuantity,
} from "@/features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductsCard = ({
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
  const dispatch = useDispatch();

  const handleWishList = (e) => {
    e.stopPropagation();
    if (isInWishList) {
      dispatch(removeFromWishList(_id));
    } else {
      dispatch(addToWishList(_id));
    }
  };

  const changeQuantity = (isIncrement) => {
    if (isIncrement) {
      dispatch(addQuantity(_id));
    } else {
      dispatch(seperateQuantity(_id));
    }
  };

  return (
    <DialogCard
      _id={_id}
      name={name}
      image={image}
      price={price}
      description={description}
      brand={brand}
      quantity={quantity}
    >
      <Card className="relative flex flex-col overflow-hidden shadow-lg rounded-lg border p-4 group hover:border hover:border-primary shadow-sm hover:shadow-lg duration-200 shadow-primary h-full">
        <div className="flex flex-col flex-1  ">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />{" "}
          <button
            className="text-black absolute top-5 right-5   bg-white rounded-md p-2"
            onClick={handleWishList}
          >
            <Heart
              className={` hover:fill-destructive transition-colors duration-200 ${
                isInWishList ? "fill-destructive " : ""
              }`}
              size={20}
            />
          </button>
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
            {quantity && quantity > 0 ? (
              <div className="flex justify-center items-center gap-2">
                <Button
                  size={"icon"}
                  variant="secondary"
                  className="hover:shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeQuantity(false);
                  }}
                >
                  <Minus />
                </Button>
                <span>{quantity}</span>

                <Button
                  size={"icon"}
                  variant="secondary"
                  className="hover:shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeQuantity(true);
                  }}
                >
                  <Plus />
                </Button>
              </div>
            ) : (
              <Button
                className="text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(true);
                }}
              >
                <Plus /> Add
              </Button>
            )}
          </div>
        </div>
      </Card>
    </DialogCard>
  );
};

const DialogCard = ({
  children,
  _id,
  name,
  image,
  price,
  description,
  quantity,
  brand,
}) => {
  const images = [image, image, image, image, image, image];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const dispatch = useDispatch();

  const handleWishList = (e) => {
    e.stopPropagation();
    dispatch(addToWishList(_id));
  };

  const changeQuantity = (isIncrement) => {
    if (isIncrement) {
      dispatch(addQuantity(_id));
    } else {
      dispatch(seperateQuantity(_id));
    }
  };

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

            <div className="flex gap-2    pt-5 ">
              {quantity && quantity > 0 ? (
                <div className="flex  items-center gap-2 flex-1">
                  <Button
                    size={"icon"}
                    variant="secondary"
                    className="hover:shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeQuantity(false);
                    }}
                  >
                    <Minus />
                  </Button>
                  <span>{quantity}</span>

                  <Button
                    size={"icon"}
                    variant="secondary"
                    className="hover:shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeQuantity(true);
                    }}
                  >
                    <Plus />
                  </Button>
                </div>
              ) : (
                <Button
                  className="flex-1 text-black  "
                  onClick={(e) => {
                    e.stopPropagation();
                    changeQuantity(true);
                  }}
                >
                  Add to cart
                </Button>
              )}

              <Button
                className="text-black hover:bg-destructive"
                variant="outline"
                size="icon"
                onClick={handleWishList}
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

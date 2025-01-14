import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Minus, Plus, Heart } from "lucide-react";

import React from "react";
import {
  addQuantity,
  seperateQuantity,
  removeFromWishList,
} from "@/features/products/productSlice";
const WishListCard = ({ _id, image, name, quantity, price, brand }) => {
  const dispatch = useDispatch();

  const changeQuantity = (isIncrement) => {
    if (isIncrement) {
      dispatch(addQuantity(_id));
    } else {
      dispatch(seperateQuantity(_id));
    }
  };

  const removeProduct = () => {
    dispatch(removeFromWishList(_id));
  };

  return (
    <Card className="flex gap-2 relative group  ">
      {/* Image Container */}
      <div className=" min-w-[110px] max-w-[110px] flex items-center justify-center overflow-hidden   rounded">
        <img src={image} className="object-cover w-full h-full" alt={name} />
      </div>

      {/* Card Content */}
      <div className="p-2 space-y-[1px] w-full flex flex-col">
        <div className="flex-1">
          <h2 className="font-semibold line-clamp-1">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="line-clamp-1 text-sm font-bold">{brand}</p>
            <h3 className="text-sm font-semibold">Price: &#x20B9;{price} </h3>
          </div>
        </div>
        {/* <p className="line-clamp-1 text-xs">{description}</p> */}

        <div className="flex justify-between items-center">
          {quantity && quantity > 0 ? (
            <div className="flex justify-center items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="w-8 h-8 flex justify-center items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(false);
                }}
              >
                <Minus />
              </Button>
              <span>{quantity}</span>

              <Button
                size="icon"
                variant="outline"
                className="w-8 h-8 flex justify-center items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(true);
                }}
              >
                {" "}
                <Plus />
              </Button>
            </div>
          ) : (
            <Button
              className="duration-100 bg-[#C481AF] hover:bg-[#C481AF] p-1 h-7 text-xs text-black flex justify-center items-center  rounded-md  px-3"
              onClick={(e) => {
                e.stopPropagation();
                changeQuantity(true);
              }}
            >
              <Plus size="15px" /> Add
            </Button>
          )}
          <button onClick={removeProduct}>
            <Heart className="text-red-500 " fill="red" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default WishListCard;

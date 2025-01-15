import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import React from "react";
import {
  addQuantity,
  seperateQuantity,
  removeFromCart,
} from "@/features/products/productSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ _id, image, name, quantity, price, brand }) => {
  const dispatch = useDispatch();

  const changeQuantity = (isIncrement) => {
    if (isIncrement) {
      dispatch(addQuantity(_id));
    } else {
      dispatch(seperateQuantity(_id));
    }
  };

  const removeProductFromCart = () => {
    dispatch(removeFromCart(_id));
  };
  return (
    <Card className="flex gap-2 relative group  ">
      <div className=" min-w-[110px] max-w-[110px] flex items-center justify-center overflow-hidden   rounded">
        <img src={image} className="object-cover w-full h-full" alt={name} />
      </div>

      <div className="p-2 space-y-[1px] w-full  ">
        <h2 className="font-bold line-clamp-1">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="line-clamp-1 text-md font-semibold">{brand}</p>
          <h3 className="text-lg font-semibold"> &#x20B9; {price}</h3>
        </div>

        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
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
          </div>
          <Button
            className="w-7 h-7 duration-300 opacity-0  opacity-100  ease-in-out hover:bg-destructive hover:text-white"
            variant="destructive"
            size="icon"
            onClick={removeProductFromCart}
          >
            <Trash2 />
          </Button>
        </div>

        {/* <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2  w-5 h-5"
        >
          <X />
        </Button> */}
      </div>
    </Card>
  );
};

export default CartCard;

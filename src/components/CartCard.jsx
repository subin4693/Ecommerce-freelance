import { Minus, X, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import React from "react";

const CartCard = ({
  _id,
  image,
  name,
  description,
  quantity,
  price,
  brand,
  handleQuantityChange,
}) => {
  return (
    <Card className="flex gap-2 relative group  ">
      {/* Image Container */}
      <div className=" min-w-[110px] max-w-[110px] flex items-center justify-center overflow-hidden   rounded">
        <img src={image} className="object-cover w-full h-full" alt={name} />
      </div>

      {/* Card Content */}
      <div className="p-2 space-y-[1px]  ">
        <h2 className="font-semibold line-clamp-1">{name}</h2>
        <p className="line-clamp-1 text-sm font-bold">{brand}</p>
        <p className="line-clamp-1 text-xs">{description}</p>

        {quantity && (
          <div className="flex gap-2 items-center">
            <h3 className="text-xs font-bold">Quantity:</h3>
            <div className="flex gap-2 items-center">
              <Button
                size="icon"
                variant="outline"
                className="w-5 h-5 flex justify-center items-center"
                onClick={() => handleQuantityChange(_id, false)}
              >
                <Minus />
              </Button>
              {quantity}
              <Button
                size="icon"
                variant="outline"
                className="w-5 h-5 flex justify-center items-center"
                onClick={() => handleQuantityChange(_id, true)}
              >
                <Plus />
              </Button>
            </div>
          </div>
        )}
        <h3 className="text-sm font-semibold">Price: {price}</h3>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 duration-200 ease-in-out hover:bg-destructive hover:text-white w-5 h-5"
        >
          <X />
        </Button>
      </div>
    </Card>
  );
};

export default CartCard;

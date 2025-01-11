import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Heart, ShoppingBasket } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductsCard = ({ name, image, price, description }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
  };
  const handleAddToFav = (e) => {
    e.stopPropagation();
  };

  return (
    <DialogCard
      name={name}
      image={image}
      price={price}
      description={description}
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
          <Button
            size="icon"
            className="hover:bg-purple-900"
            onClick={handleAddToCart}
          >
            <ShoppingBasket />
          </Button>
          <Button
            size="icon"
            className="hover:bg-purple-900"
            onClick={handleAddToFav}
          >
            <Heart />
          </Button>
        </div>
      </Card>
    </DialogCard>
  );
};

const DialogCard = ({ children, name, image, price, description }) => {
  const images = [image, image, image, image];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className=" max-w-full md:w-[1000px] flex p-2 flex-col md:flex-row ">
        <div className="  md:w-1/2 relative group h-[300px] md:h-[500px]">
          <div className="h-full">
            <img src={currentImage} className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center gap-2 absolute bottom-0 opacity-0 group-hover:opacity-100  ease-in-out bg-gray-900/20 w-[80%] rounded-md  p-2">
              {images.map((img) => (
                <div
                  className="border-primary shadow-xl hover:scale-110 duration-300 md:basis-1/2 lg:basis-1/5"
                  onClick={() => setCurrentImage(img)}
                >
                  <img
                    src={img}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <DialogTitle>Price : {price}</DialogTitle>
            <div className="w-full flex gap-2 text-black">
              <Button className="w-full text-black ">
                {" "}
                <ShoppingBasket size={64} />
                Add to Cart
              </Button>
              <Button variant="destructive" className="w-full text-black">
                <Heart /> Add to fav
              </Button>
            </div>
            <Button className="text-black">Buy</Button>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductsCard;

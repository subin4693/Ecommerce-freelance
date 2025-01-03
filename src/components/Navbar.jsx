import React, { useState } from "react";
import logo from "@/assets/logo.png";
import HUMANOODLES from "@/assets/HUMANOODLES.jpg";
import HUMANOODLES5 from "@/assets/HUMANOODLES5.jpg";
import HUMANOODLES8 from "@/assets/HUMANOODLES8.jpg";

import { NavLink } from "react-router";
import {
  ArrowBigRight,
  Heart,
  MenuIcon,
  ShoppingBasket,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

const Navbar = () => {
  const [carts, setCarts] = useState([
    {
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
  ]);
  const [wishList, setWishList] = useState([
    {
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
    },

    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
    },
    {
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: "something about this product",
      price: 200,
    },
  ]);
  return (
    <header
      className="flex justify-between   items-center px-1 md:px-20 lg:px-32 bg-[#e2d6fa] relative shadow-md 
      "
    >
      <div className="w-[60px] h-[60px] z-10">
        <img src={logo} className="object-fit" />
      </div>
      <nav className=" gap-6 z-10 hidden sm:flex font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `hover:text-[#680c9d] duration-100 transition hover:underline ${
              isActive ? "text-[#680c9d] underline" : ""
            }`;
          }}
        >
          Home
        </NavLink>

        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-[#680c9d] duration-100 transition hover:underline ">
            About
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Brand story</DropdownMenuItem>
            <DropdownMenuItem>Founder's note</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <NavLink
          to="/shop"
          className={({ isActive }) => {
            return `hover:text-[#680c9d] duration-100 transition hover:underline ${
              isActive ? "text-[#680c9d] underline" : ""
            }`;
          }}
        >
          Shop
        </NavLink>

        <Sheet>
          <SheetTrigger>
            <ShoppingBasket />
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <div
              className="bg-repeat absolute bg-contain inset-0 -z-20 bg-opacity-60"
              style={{
                backgroundImage: `url(${HUMANOODLES8})`,
              }}
            >
              <div className="absolute inset-0 bg-transparent backdrop-blur-sm -z-10"></div>
            </div>
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <ShoppingBasket /> &nbsp;Your Cart
              </SheetTitle>
              <SheetDescription className="text-gray-700">
                Review the items in your cart before proceeding to checkout. You
                can adjust quantities or remove items as needed. Happy shopping!
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3 mt-3">
              {carts.map(({ image, name, description, price }) => (
                <Cards
                  image={image}
                  name={name}
                  description={description}
                  price={price}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <Heart />
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <div
              className="bg-repeat absolute bg-contain inset-0 -z-20 bg-opacity-60"
              style={{
                backgroundImage: `url(${HUMANOODLES5})`,
              }}
            >
              <div className="absolute inset-0 bg-transparent backdrop-blur-sm -z-10"></div>
            </div>
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <Heart /> &nbsp;Wish list Products
              </SheetTitle>
              <SheetDescription className="text-gray-700">
                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3  mt-3">
              {wishList.map(({ image, name, description, quantity, price }) => (
                <Cards
                  image={image}
                  name={name}
                  description={description}
                  quantity={quantity}
                  price={price}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      <div className="z-10   flex sm:hidden   ">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>Select an option below:</DrawerDescription>
            </DrawerHeader>
            <div>
              <ul className="space-y-2 p-4">
                <li className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group">
                  <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                    <ArrowBigRight className="text-[#5b3b6d]" />
                  </div>{" "}
                  Home
                </li>
                <li className="cursor-pointer p-2  ">
                  <span className="text-[#a478d9] font-bold p-2">About</span>
                  <ul className="ml-4 space-y-2">
                    <li className="flex   gap-3  items-center group cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg">
                      <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                        <ArrowBigRight className="text-[#5b3b6d]" />
                      </div>{" "}
                      Brand Story
                    </li>
                    <li className="flex  gap-3  items-center group  cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg">
                      <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                        <ArrowBigRight className="text-[#5b3b6d]" />
                      </div>{" "}
                      Founders Note
                    </li>
                  </ul>
                </li>
                <li className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group">
                  <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                    <ArrowBigRight className="text-[#5b3b6d]" />
                  </div>{" "}
                  Shop
                </li>

                <Sheet>
                  <SheetTrigger className="w-full">
                    {" "}
                    <li className="cursor-pointer hover:bg-primary w-full   duration-200 p-2 rounded-lg flex  gap-3  items-center group">
                      <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                        <ArrowBigRight className="text-[#5b3b6d]" />
                      </div>{" "}
                      Cart
                    </li>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <div
                      className="bg-repeat absolute bg-contain inset-0 -z-20 bg-opacity-60"
                      style={{
                        backgroundImage: `url(${HUMANOODLES8})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-transparent backdrop-blur-sm -z-10"></div>
                    </div>
                    <SheetHeader>
                      <SheetTitle className="flex items-center">
                        <ShoppingBasket /> &nbsp;Your Cart
                      </SheetTitle>
                      <SheetDescription className="text-gray-700">
                        Review the items in your cart before proceeding to
                        checkout. You can adjust quantities or remove items as
                        needed. Happy shopping!
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-3 mt-3">
                      {carts.map(({ image, name, description, price }) => (
                        <Cards
                          image={image}
                          name={name}
                          description={description}
                          price={price}
                        />
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger className="w-full">
                    <li className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group">
                      <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                        <ArrowBigRight className="text-[#5b3b6d]" />
                      </div>{" "}
                      Wishlist
                    </li>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <div
                      className="bg-repeat absolute bg-contain inset-0 -z-20 bg-opacity-60"
                      style={{
                        backgroundImage: `url(${HUMANOODLES5})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-transparent backdrop-blur-sm -z-10"></div>
                    </div>
                    <SheetHeader>
                      <SheetTitle className="flex items-center">
                        <Heart /> &nbsp;Wish list Products
                      </SheetTitle>
                      <SheetDescription className="text-gray-700">
                        Explore and manage your favorite products in your wish
                        list. Keep track of the items you love and easily add
                        them to your cart when you're ready to purchase. Happy
                        browsing!
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-3  mt-3">
                      {wishList.map(
                        ({ image, name, description, quantity, price }) => (
                          <Cards
                            image={image}
                            name={name}
                            description={description}
                            quantity={quantity}
                            price={price}
                          />
                        )
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </ul>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full bg-[#ebb3e4] text-white hover:bg-destructive">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

const Cards = ({ image, name, description, quantity, price }) => {
  return (
    <Card className="flex gap-2 relative group">
      <div className="min-w-[100px] max-w-[100px] h-[100px] ">
        <img src={image} className="object-cover w-full h-full" />
      </div>
      <div className="p-2 space-y-[1px]">
        <h2 className="font-semibold line-clamp-1"> {name}</h2>
        <p className="line-clamp-1 text-xs">{description}</p>

        {quantity && (
          <h3 className="text-xs font-bold">Quantity : {quantity} </h3>
        )}

        <h3 className="text-sm font-semibold">Price : {price} </h3>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 duration-200 ease-inout hover:bg-destructive hover:text-white w-5 h-5"
        >
          <X />
        </Button>
      </div>
    </Card>
  );
};

export default Navbar;

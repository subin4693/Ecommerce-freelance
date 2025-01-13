import React, { useState } from "react";
import logo from "@/assets/logo-bg-r.png";
import HUMANOODLES from "@/assets/HUMANOODLES.jpg";
import HUMANOODLES5 from "@/assets/HUMANOODLES5.jpg";
import HUMANOODLES8 from "@/assets/HUMANOODLES8.jpg";

import CartCard from "./CartCard";
import WishListCard from "./WishListCard";

import { NavLink } from "react-router";
import {
  ArrowBigRight,
  Heart,
  MenuIcon,
  Minus,
  Plus,
  ShoppingCart,
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

import { Button } from "./ui/button";

const Navbar = () => {
  const [carts, setCarts] = useState([
    {
      _id: "sdfas",
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
      brand: "Nike",
    },
    {
      _id: "sdfaasdfas",
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
      brand: "Adidas",
    },
    {
      _id: "sdfas",
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
      brand: "Nike",
    },
    {
      _id: "sdfaasdfas",
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
      brand: "Adidas",
    },
    {
      _id: "sdfas",
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      quantity: 1,
      description: "something about this product",
      price: 200,
      brand: "Nike",
    },
    {
      _id: "sdfaasdfas",
      image: HUMANOODLES,
      name: "Product one",
      quantity: 1,
      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
      brand: "Adidas",
    },
  ]);
  const [wishList, setWishList] = useState([
    {
      image: HUMANOODLES,
      name: `Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,

      description: "something about this product",
      price: 200,
      brand: "Nike",
    },

    {
      image: HUMANOODLES,
      name: "Product one",

      description: `                Explore and manage your favorite products in your wish list.
                Keep track of the items you love and easily add them to your
                cart when you're ready to purchase. Happy browsing!`,
      price: 200,
      brand: "Nike",
    },
    {
      image: HUMANOODLES,
      name: "Product one",

      description: "something about this product",
      price: 200,
      brand: "Nike",
    },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCarts((prev) => {
      return prev.map((item) => {
        if (item._id == id) {
          const updatedQuantity = increment
            ? item.quantity + 1
            : item.quantity - 1;
          return {
            ...item,
            quantity: updatedQuantity > 0 ? updatedQuantity : 1,
          };
        }
        return item;
      });
    });
  };
  return (
    <header
      id="navbar"
      className="flex justify-between    items-center px-1 md:px-20 lg:px-32 bg-[#e2d6fa] fixed top-0 left-0 right-0 z-10 shadow-md 
      "
    >
      <div className="w-[60px] h-[60px] z-10">
        <img src={logo} className="object-fit" />
      </div>
      <nav className=" gap-6 z-10 hidden sm:flex font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `hover:text-[#680c9d] duration-100 transition   ${
              isActive ? "text-[#680c9d]  " : ""
            }`;
          }}
        >
          Home
        </NavLink>

        <DropdownMenu>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return `hover:text-[#680c9d] duration-100 transition   ${
                isActive ? "text-[#680c9d]  " : ""
              }`;
            }}
          >
            <DropdownMenuTrigger className="hover:text-[#680c9d] duration-100 transition   ">
              About
            </DropdownMenuTrigger>
          </NavLink>
          <DropdownMenuContent>
            <NavLink to="/about/brand-story">
              <DropdownMenuItem>Brand story</DropdownMenuItem>
            </NavLink>
            <NavLink to="/about/founders-note">
              <DropdownMenuItem>Founder's note</DropdownMenuItem>
            </NavLink>
          </DropdownMenuContent>
        </DropdownMenu>

        <NavLink
          to="/shop"
          className={({ isActive }) => {
            return `hover:text-[#680c9d] duration-100 transition   ${
              isActive ? "text-[#680c9d]  " : ""
            }`;
          }}
        >
          Shop
        </NavLink>

        <Sheet>
          <SheetTrigger>
            <ShoppingCart />
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
                <ShoppingCart /> &nbsp;Your Cart
              </SheetTitle>
              {/* <SheetDescription className="text-gray-700">
                Review the items in your cart before proceeding to checkout. You
                can adjust quantities or remove items as needed. Happy shopping!
              </SheetDescription> */}
            </SheetHeader>
            <Button className="w-full text-stone-900 mt-5">Checkout</Button>

            <div className="mt-2 flex justify-between items-center ">
              <Button variant="outline">
                <ShoppingCart /> 14
              </Button>
              <Button variant="secondary"> &#x20B9;1500</Button>
            </div>

            <div className="space-y-3 mt-3">
              {carts.map(
                ({ _id, image, name, description, price, quantity, brand }) => {
                  console.log(_id + " working fine ---<");
                  return (
                    <CartCard
                      _id={_id}
                      image={image}
                      name={name}
                      description={description}
                      price={price}
                      quantity={quantity}
                      brand={brand}
                      handleQuantityChange={handleQuantityChange}
                    />
                  );
                }
              )}
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
              {wishList.map(
                ({ image, name, description, quantity, price, brand }) => (
                  <WishListCard
                    image={image}
                    name={name}
                    description={description}
                    quantity={quantity}
                    price={price}
                    brand={brand}
                  />
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      {/* /*Mobile screen navigator****************************************************************************/}

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
                        <ShoppingCart /> &nbsp;Your Cart
                      </SheetTitle>
                      {/* <SheetDescription className="text-gray-700">
                        Review the items in your cart before proceeding to
                        checkout. You can adjust quantities or remove items as
                        needed. Happy shopping!
                      </SheetDescription> */}
                      <Button className="w-full text-stone-900 mt-5">
                        Checkout
                      </Button>

                      <div className="mt-2 flex justify-between items-center ">
                        <Button variant="outline">
                          <ShoppingCart /> 14
                        </Button>
                        <Button variant="secondary"> &#x20B9;1500</Button>
                      </div>
                    </SheetHeader>
                    <div className="space-y-3 mt-3">
                      {carts.map(
                        ({
                          _id,
                          image,
                          name,
                          description,
                          price,
                          quantity,
                          brand,
                        }) => (
                          <CartCard
                            _id={_id}
                            image={image}
                            name={name}
                            description={description}
                            price={price}
                            quantity={quantity}
                            brand={brand}
                            handleQuantityChange={handleQuantityChange}
                          />
                        )
                      )}{" "}
                      <Button className="w-full text-stone-900">
                        Checkout
                      </Button>
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
                          <WishListCard
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

export default Navbar;

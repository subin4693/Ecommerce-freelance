import React, { useState } from "react";
import logo from "@/assets/logo-bg-r.png";

import HUMANOODLES5 from "@/assets/HUMANOODLES5.jpg";
import HUMANOODLES8 from "@/assets/HUMANOODLES8.jpg";

import CartCard from "./CartCard";
import WishListCard from "./WishListCard";

import { NavLink } from "react-router";
import { ArrowBigRight, Heart, MenuIcon, ShoppingCart } from "lucide-react";
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
import { useSelector } from "react-redux";

const Navbar = () => {
  let carts = useSelector((state) => state?.products?.cart);

  let wishList = useSelector((state) => state?.products?.wishlist);

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

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => {
            return `hover:text-[#680c9d] duration-100 transition   ${
              isActive ? "text-[#680c9d]  " : ""
            }`;
          }}
        >
          Admin
        </NavLink>
        <NavLink
          to="/brands/dashboard"
          className={({ isActive }) => {
            return `hover:text-[#680c9d] duration-100 transition   ${
              isActive ? "text-[#680c9d]  " : ""
            }`;
          }}
        >
          Brands
        </NavLink>

        <Sheet>
          <SheetTrigger>
            <span className="relative">
              <span className="absolute -top-2 -right-2 text-xs  bg-[#C481AF] rounded-full w-[20px] h-[20px] flex justify-center items-center">
                {carts.length}
              </span>
              <ShoppingCart />
            </span>
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
            <Button className="w-full   mt-5">Checkout</Button>

            <div className="mt-2 flex justify-between items-center ">
              <Button variant="outline">
                <ShoppingCart /> {carts.length}
              </Button>
              <Button variant="secondary">
                {" "}
                &#x20B9;
                {carts.reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )}
              </Button>
            </div>

            <div className="space-y-3 mt-3">
              {carts.map(
                ({ _id, image, name, description, price, quantity, brand }) => {
                  return (
                    <CartCard
                      _id={_id}
                      image={image}
                      name={name}
                      description={description}
                      price={price}
                      quantity={quantity}
                      brand={brand}
                    />
                  );
                }
              )}
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger>
            {" "}
            <span className="relative">
              <span className="absolute -top-2 -right-2 text-xs  bg-[#C481AF] rounded-full w-[20px] h-[20px] flex justify-center items-center">
                {wishList.length}
              </span>
              <Heart />
            </span>
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
              {wishList?.map(
                ({ _id, image, name, description, quantity, price, brand }) => (
                  <WishListCard
                    _id={_id}
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
                <li>
                  <NavLink
                    to="/"
                    className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group"
                  >
                    <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                      <ArrowBigRight className="text-[#5b3b6d]" />
                    </div>{" "}
                    Home
                  </NavLink>
                </li>

                <li className="cursor-pointer p-2  ">
                  <span className="text-[#a478d9] font-bold p-2">About</span>

                  <ul className="ml-4 space-y-2">
                    <li>
                      <NavLink
                        to="/about/brand-story"
                        className="flex   gap-3  items-center group cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg"
                      >
                        <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                          <ArrowBigRight className="text-[#5b3b6d]" />
                        </div>{" "}
                        Brand Story{" "}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/about/founders-note"
                        className="flex   gap-3  items-center group cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg"
                      >
                        <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                          <ArrowBigRight className="text-[#5b3b6d]" />
                        </div>{" "}
                        Founders Note
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group"
                  >
                    <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                      <ArrowBigRight className="text-[#5b3b6d]" />
                    </div>{" "}
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/dashboard"
                    className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group"
                  >
                    <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                      <ArrowBigRight className="text-[#5b3b6d]" />
                    </div>{" "}
                    Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/brands/dashboard"
                    className="cursor-pointer hover:bg-primary w-full duration-200 p-2 rounded-lg flex  gap-3  items-center group"
                  >
                    <div className="w-0 group-hover:w-[20px] overflow-hidden duration-200">
                      <ArrowBigRight className="text-[#5b3b6d]" />
                    </div>{" "}
                    Brands
                  </NavLink>
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
                      <Button className="w-full  mt-5">Checkout</Button>

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
                          />
                        )
                      )}{" "}
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
                        ({
                          _id,
                          brand,
                          image,
                          name,
                          description,
                          quantity,
                          price,
                        }) => (
                          <WishListCard
                            brand={brand}
                            _id={_id}
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

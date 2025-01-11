import React from "react";
import logo from "@/assets/LILHUMANLOGO black.png";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="px-1 md:px-20 lg:px-32  bg-[#d2d6f1]/10 shadow-2xl border py-10">
      <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between ">
        <div className="h-[200px]">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>{" "}
        <div className="flex space-x-8 mb-4 md:mb-0 justify-center mt-5 md:mt-0">
          <div>
            <h3 className="text-xl font-bold     mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold  mt-5 md:mt-0  text-center  mb-6">
            Pages
          </h3>
          <ul className="space-y-1 text-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <form className="pt space-y-5 w-full md:w-fit">
          <h2 className="text-xl font-bold text-center    mb-6">Contact us</h2>
          <Input
            type="text"
            placeholder="Name"
            className="w-full md:w-[350px]"
          />
          <Input
            type="text"
            placeholder="Subject"
            className="w-full md:w-[350px]"
          />
          <Textarea placeholder="Enter message here..." />
          <Button className="w-full text-white">Submit</Button>
        </form>
      </div>
      <div className="w-full text-center mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LilHuman. All rights reserved.
      </div>{" "}
    </div>
  );
};

export default Footer;

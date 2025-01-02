import React from "react";
import logo from "@/assets/LILHUMANLOGO black.png";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="px-1 md:px-20 lg:px-32 mt-10 bg-[#d2d6f1]/10 shadow-2xl border flex flex-wrap flex-col-reverse md:flex-row justify-between items-center py-10">
      <div className="h-[200px] ">
        <img src={logo} alt="logo" className="w-full h-full  object-contain" />{" "}
      </div>

      <form className="pt space-y-5 w-full md:w-fit">
        <h2 className="text-xl font-bold bg-gradient-to-r from-red-300 via-[#7ca9af] to-[#5b3b6d] bg-clip-text text-transparent mb-6">
          Contact us
        </h2>
        <Input type="text" placeholder="Name" className="w-full md:w-[350px]" />
        <Input
          type="text"
          placeholder="Subject"
          className="w-full md:w-[350px]"
        />
        <Textarea placeholder="Enter message here..." />
        <Button className="w-full text-white">Submit</Button>
      </form>
    </div>
  );
};

export default Footer;

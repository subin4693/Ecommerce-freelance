import React from "react";
import { Button } from "./ui/button";

const BrandTopBar = ({ pageTitle }) => {
  return (
    <div className="flex justify-between items-center w-full  ">
      <h1 className="text-xl font-bold">{pageTitle}</h1>

      <Button className="text-xs py-1 text-black ">Logout</Button>
    </div>
  );
};

export default BrandTopBar;

import React from "react";
import { Button } from "./ui/button";

const AdminTopbar = ({ pageTitle }) => {
  return (
    <div className="flex justify-between items-center w-full py-5 ">
      <h1 className="text-md md:text-xl font-bold">{pageTitle}</h1>

      <Button className="text-xs   ">Logout</Button>
    </div>
  );
};

export default AdminTopbar;

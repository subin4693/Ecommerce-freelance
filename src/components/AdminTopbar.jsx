import React from "react";
import { Button } from "./ui/button";

const AdminTopbar = ({ pageTitle }) => {
  return (
    <div className="flex justify-between items-center w-full  ">
      <h1 className="text-xl font-bold">{pageTitle}</h1>

      <Button variant="outline" className="text-xs py-1 text-black ">
        Logout
      </Button>
    </div>
  );
};

export default AdminTopbar;

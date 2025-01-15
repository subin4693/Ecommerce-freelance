import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

const BrandTables = () => {
  return (
    <Table>
      <TableCaption>A list of all brands</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Brand id</TableHead>
          <TableHead> Brand Name</TableHead>
          <TableHead>Total Number of Products</TableHead>
          <TableHead className="">total number of orders</TableHead>
          <TableHead className="w-[100px]">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>101</TableCell>
          <TableCell className="font-medium">Nike</TableCell>
          <TableCell className="font-medium">10</TableCell>

          <TableCell>1500</TableCell>

          <TableCell className="flex gap-2">
            <Button size="icon" variant="outline">
              <Edit />
            </Button>
            <Button size="icon" variant="destructive">
              <Trash2 />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BrandTables;

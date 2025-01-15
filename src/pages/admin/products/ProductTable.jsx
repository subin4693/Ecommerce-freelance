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

const ProductTable = () => {
  return (
    <Table>
      <TableCaption>A list of all brands</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Total Products</TableHead>
          <TableHead className="">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Nike</TableCell>
          <TableCell>Description about this brand</TableCell>
          <TableCell>product name</TableCell>
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

export default ProductTable;

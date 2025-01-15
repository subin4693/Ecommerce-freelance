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
import { Edit, Trash2, Eye } from "lucide-react";

const ProductTable = () => {
  return (
    <Table>
      <TableCaption>A list of all products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Stock Left</TableHead>
          <TableHead className="w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>20201</TableCell>
          <TableCell className="font-medium">Air Max 90</TableCell>
          <TableCell>Nike</TableCell>
          <TableCell>30</TableCell>
          <TableCell className="flex gap-2">
            <Button size="icon" variant="outline">
              <Eye />
            </Button>

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

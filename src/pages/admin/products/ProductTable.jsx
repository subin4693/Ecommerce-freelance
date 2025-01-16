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
import { Trash2, Eye } from "lucide-react";
import ViewProduct from "./ViewProducts";

const ProductTable = ({ product }) => {
  return (
    <Table>
      <TableCaption>A list of all products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Stock Left</TableHead>
          <TableHead className="w-[100px]">View</TableHead>
          <TableHead className="w-[100px]">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {product?.map(({ _id, name, brand, sold_out }) => {
          return (
            <TableRow>
              <TableCell>{_id}</TableCell>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{brand?.name}</TableCell>
              <TableCell>{sold_out}</TableCell>
              <TableCell className="flex gap-2">
                <ViewProduct>
                  <Button size="icon" variant="outline">
                    <Eye />
                  </Button>
                </ViewProduct>{" "}
              </TableCell>
              <TableCell>
                <Button size="icon" variant="destructive">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ProductTable;

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
import { Edit, Trash2, View } from "lucide-react";

const CategoriesTable = () => {
  return (
    <Table>
      <TableCaption>A list of all categories</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Category ID</TableHead>
          <TableHead>Category Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="w-[100px]">Edit</TableHead>
          <TableHead className="w-[100px]">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>101</TableCell>
          <TableCell className="font-medium">Sportswear</TableCell>
          <TableCell>Apparel for outdoor activities</TableCell>
          <TableCell>
            <Button size="icon" variant="outline">
              <Edit />
            </Button>
          </TableCell>
          <TableCell>
            <Button size="icon" variant="destructive">
              <Trash2 />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;

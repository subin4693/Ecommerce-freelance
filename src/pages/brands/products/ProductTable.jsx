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
import { Trash2, Eye, Edit } from "lucide-react";
import ViewProduct from "./ViewProducts";
import EditProduct from "./EditProduct";

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
          <TableHead className="w-[100px]">Edit</TableHead>
          <TableHead className="w-[100px]">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {product?.map(
          ({
            _id,
            name,
            description,
            category,
            price,
            images,
            brand,
            sold_out,
            stock,
          }) => {
            return (
              <TableRow>
                <TableCell>{_id}</TableCell>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{brand?.name}</TableCell>
                <TableCell>{sold_out}</TableCell>
                <TableCell>
                  <ViewProduct
                    _id={_id}
                    name={name}
                    description={description}
                    category={category}
                    price={price}
                    images={images}
                    brand={brand}
                    sold_out={sold_out}
                    stock={stock}
                  >
                    <Button size="icon" variant="secondary">
                      <Eye />
                    </Button>
                  </ViewProduct>
                </TableCell>
                <TableCell>
                  <EditProduct
                    _id={_id}
                    name={name}
                    description={description}
                    category={category}
                    price={price}
                    images={images}
                    brand={brand}
                    sold_out={sold_out}
                    stock={stock}
                  >
                    <Button size="icon" variant="outline">
                      <Edit />
                    </Button>
                  </EditProduct>
                </TableCell>
                <TableCell>
                  <Button size="icon" variant="destructive">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};

export default ProductTable;

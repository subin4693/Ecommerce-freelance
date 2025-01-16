import React, { useState } from "react";
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
import { Edit, Eye, Trash2 } from "lucide-react";

import EditCategoriesBox from "./EditCategoriesBox";
import ViewCategorieDetails from "./ViewCategorieDetails";

const CategoriesTable = ({ categories, setCategories }) => {
  const handleDelete = (_id) => {
    setCategories((prev) => {
      const temp = prev.filter((data) => data._id != _id);
      return temp;
    });
  };

  return (
    <>
      <Table>
        <TableCaption>A list of all categories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] hidden sm:inline">
              Category ID
            </TableHead>
            <TableHead>Category Name</TableHead>

            <TableHead className="hidden md:inline">Description</TableHead>
            <TableHead className="w-[100px]">View</TableHead>
            <TableHead className="w-[100px] hidden sm:inline">Edit</TableHead>
            <TableHead className="w-[100px] hidden sm:inline">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {categories?.map(({ _id, name, description, image, createdAt }) => (
            <TableRow key={_id}>
              <TableCell className="hidden sm:inline">{_id}</TableCell>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell className="hidden md:inline">{description}</TableCell>

              <TableCell>
                <ViewCategorieDetails
                  _id={_id}
                  name={name}
                  description={description}
                  image={image?.url}
                  createdAt={createdAt}
                >
                  <Button size="icon" variant="secondary">
                    <Eye />
                  </Button>
                </ViewCategorieDetails>
              </TableCell>

              <TableCell className="hidden sm:inline-block">
                <EditCategoriesBox
                  _id={_id}
                  name={name}
                  description={description}
                  image={image?.url}
                  createdAt={createdAt}
                  setCategories={setCategories}
                >
                  <Button size="icon" variant="outline">
                    <Edit />
                  </Button>
                </EditCategoriesBox>
              </TableCell>
              <TableCell className="hidden sm:inline-block">
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDelete(_id)}
                >
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CategoriesTable;

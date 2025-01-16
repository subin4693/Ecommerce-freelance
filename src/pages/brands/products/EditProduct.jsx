import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CategorySelect from "./CategorySelect";

const EditProduct = ({
  children,
  _id,
  name: nameArg,
  description: descriptionArg,
  category: categoryArg,
  price: priceArg,
  images: imagesArg,
  brand: brandArg,
  sold_out: sold_outArg,
  stock,
}) => {
  const [name, setName] = useState(nameArg);
  const [description, setDescription] = useState(descriptionArg);
  const [category, setCategory] = useState(categoryArg);
  const [price, setPrice] = useState(priceArg);
  const [brand, setBrand] = useState(brandArg);
  const [sold_out, setSold_out] = useState(sold_outArg);

  const [images, setImages] = useState(imagesArg);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log({ name, description, image });

    setName("");
    setDescription("");
    setImage(null);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-lg w-full p-4 h-[80vh] overflow-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Products Details</AlertDialogTitle>
        </AlertDialogHeader>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 "
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Category
            </label>
            <CategorySelect />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Price
            </label>
            <div className="mt-1 text-gray-800 border p-2 rounded-md">
              {price || "No Category provided"}
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Stock
            </label>
            <div className="mt-1 text-gray-800 border p-2 rounded-md">
              {stock || "No Category provided"}
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Brand
            </label>
            <div className="mt-1 text-gray-800 border p-2 rounded-md">
              {brand.name || "No Category provided"}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Sold out
            </label>
            <div className="mt-1 text-gray-800 border p-2 rounded-md">
              {sold_out || "No Category provided"}
            </div>
          </div>
        </form>
        <AlertDialogFooter className="mt-4">
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditProduct;

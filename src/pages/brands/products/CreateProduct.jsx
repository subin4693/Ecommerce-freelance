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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BrandSelect from "./BrandSelect";
import { Plus } from "lucide-react";

const CreateCategorieBox = ({ children, categories }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [sold_out, setSold_out] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {};

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-lg w-full p-4 h-[80vh] overflow-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Create New Products</AlertDialogTitle>
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
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 "
            >
              Category
            </label>
            <CategorySelect categories={categories} />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 "
            >
              Price
            </label>
            <Input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 "
            >
              Stock
            </label>
            <Input
              type="text"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700 "
            >
              Brand
            </label>
            <BrandSelect categories={categories} />
          </div>

          <div>
            <label
              htmlFor="soldout"
              className="block text-sm font-medium text-gray-700 "
            >
              Sold out
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Stock" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 "
            >
              Images
            </label>

            <div className="flex gap-2">
              {images.map(({ url }) => (
                <div className="w-20 h-20 rounded-md overflow-hidden">
                  <img src={url} className="object-cover" />
                </div>
              ))}

              <label className="w-20 h-20 rounded-md bg-secondary overflow-hidden ">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="opacity-0 "
                />
                <p className="text-center flex justify-center items-center text-sm gap-1">
                  <Plus size="15px" /> Add
                </p>
              </label>
            </div>
          </div>
        </form>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateCategorieBox;

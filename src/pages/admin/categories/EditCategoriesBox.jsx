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

const EditCategoriesBox = ({
  children,
  _id,
  name: nameArg,
  description: descriptionArg,
  image: imageArg,
  setCategories,
}) => {
  const [name, setName] = useState(nameArg);
  const [description, setDescription] = useState(descriptionArg);
  const [image, setImage] = useState(imageArg);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log({ name, description, image });
    setCategories((prev) => {
      const temp = prev.map((val) => {
        if (val._id == _id)
          return {
            _id,
            name,
            description,
            image: {
              public_id: "asdfas",
              url: image,
            },
          };
        return val;
      });
      return temp;
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-lg w-full p-4">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Category</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the form below to create a new category.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=""
              placeholder="Enter category name"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter category description"
            />
          </div>
          <div className="">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 w-full "
            >
              Image
            </label>
            <label
              className=" block border border-stone-300 mt-2 h-[250px] rounded-md bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="opacity-0 "
              />
            </label>
          </div>
        </form>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCategoriesBox;

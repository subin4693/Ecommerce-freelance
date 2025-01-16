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

const ViewProduct = ({
  children,
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
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-lg w-full p-4 h-[80vh] overflow-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Products Details</AlertDialogTitle>
        </AlertDialogHeader>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 "
            >
              Name
            </label>
            <div className="mt-1 text-gray-800 font-medium border p-2 rounded-md">
              {name || "No name provided"}
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Description
            </label>
            <div className="mt-1 text-gray-800 border p-2 rounded-md">
              {description || "No description provided"}
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 "
            >
              Category
            </label>
            <div className="mt-1 text-gray-800 border p-2 rounded-md">
              {category?.name || "No Category provided"}
            </div>
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

export default ViewProduct;

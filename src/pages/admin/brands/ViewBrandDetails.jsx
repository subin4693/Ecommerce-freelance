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
import { Button } from "@/components/ui/button";
const viewBrandDetails = ({ children, name, description, image }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-lg w-full p-4">
        <AlertDialogHeader>
          <AlertDialogTitle>Category Details</AlertDialogTitle>
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
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            {image ? (
              <div
                className="block border   mt-2 h-[250px] rounded-md bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${image})`,
                }}
                alt="Category Image"
              ></div>
            ) : (
              <div className="mt-2 text-gray-500 italic">No image uploaded</div>
            )}
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

export default viewBrandDetails;

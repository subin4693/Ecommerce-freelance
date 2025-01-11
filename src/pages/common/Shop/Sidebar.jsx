// import React, { useEffect, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { PanelsTopLeft, X } from "lucide-react";
// import { Slider } from "@/components/ui/slider";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Button } from "@/components/ui/button";

// const Sidebar = () => {
//   const [filters, setFilters] = useState([]);
//   const [brandName, setBrandName] = useState("");
//   const [categoryName, setCategoryName] = useState("");
//   const [sidebar, setSidebar] = useState(false);

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PanelsTopLeft } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [filters, setFilters] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [categorys, setCategorys] = useState([
    { _id: "working", title: "Adidas" },
    { _id: "working1", title: "Nike" },
    { _id: "234working", title: "Puma" },
    { _id: "235working", title: "Reebok" },
    { _id: "236working", title: "Under Armour" },
    { _id: "273working", title: "New Balance" },
    { _id: "238working", title: "Asics" },
    { _id: "239working", title: "Fila" },
    { _id: "2334working", title: "Converse" },
    { _id: "workinged3", title: "Vans" },
    { _id: "23eteworking", title: "Jordan" },
    { _id: "2vd3working", title: "Sketchers" },
    { _id: "working2dfgd3", title: "Champion" },
    { _id: "working2ht3", title: "Brooks" },
    { _id: "working2ng3", title: "Hoka One One" },
    { _id: "working2fbf3", title: "Saucony" },
    { _id: "working2v3", title: "Merrell" },
    { _id: "working2sde3", title: "Timberland" },
  ]);
  const [brands, setBrands] = useState([
    { _id: "232", title: "Adidas" },
    { _id: "233", title: "Nike" },
    { _id: "234", title: "Puma" },
    { _id: "235", title: "Reebok" },
    { _id: "236", title: "Under Armour" },
    { _id: "273", title: "New Balance" },
    { _id: "238", title: "Asics" },
    { _id: "239", title: "Fila" },
    { _id: "2334", title: "Converse" },
    { _id: "2gdfgs3", title: "Vans" },
    { _id: "23ete", title: "Jordan" },
    { _id: "2vd3", title: "Sketchers" },
    { _id: "2dfgd3", title: "Champion" },
    { _id: "2ht3", title: "Brooks" },
    { _id: "2ng3", title: "Hoka One One" },
    { _id: "2fbf3", title: "Saucony" },
    { _id: "2v3", title: "Merrell" },
    { _id: "2sde3", title: "Timberland" },
  ]);
  const [maxPrice, setMaxPrice] = useState(3000);

  const handleClose = (idToRemove) => {
    setFilters((prev) => prev.filter(({ id }) => id !== idToRemove));
  };

  const handleCheckboxChange = (category) => {
    setFilters((prev) => {
      const exists = prev.some((filter) => filter.id === category._id);
      if (exists) {
        return prev.filter((filter) => filter.id !== category._id);
      } else {
        return [...prev, { name: category.title, id: category._id }];
      }
    });
  };

  return (
    <div>
      <div
        className={`p-0 lg:w-full overflow-hidden lg:px-5 border-r h-full ${
          sidebar ? "w-[80vw] p-10" : "w-0"
        }`}
      >
        <div>
          <header className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">Filters</h2>
            <button
              className="text-sm"
              onClick={() => setFilters([])} // Clear all filters
            >
              CLEAR ALL
            </button>
          </header>
          <div className="flex justify-start flex-wrap gap-2">
            {filters.map(({ name, id }) => (
              <Badge
                className="text-black cursor-pointer relative"
                onClick={() => handleClose(id)}
                key={id}
              >
                {name}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <header className="flex justify-between items-start my-2">
            <h2 className="font-bold text-lg">Price</h2>
            <p>Max : {maxPrice} &#8377;</p>
          </header>
          <div>
            <Slider
              defaultValue={[3000]}
              max={10000}
              step={2}
              onValueChange={(e) => setMaxPrice(e)}
            />
          </div>
        </div>
        <div className="border-b">
          <header className="flex justify-between items-start my-2">
            <h2 className="font-bold text-lg">Brands</h2>
          </header>
          <div>
            <Input
              type="text"
              placeholder="Search Brands"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
            <div>
              <ScrollArea className="h-[200px] w-full">
                {brands.map((brand) => (
                  <div
                    key={brand._id}
                    className={`flex items-center ps-2 ${
                      brand.title
                        .toLocaleLowerCase()
                        .includes(brandName.toLocaleLowerCase())
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <input
                      id={brand._id}
                      type="checkbox"
                      value={brand.title}
                      checked={filters.some(
                        (filter) => filter.id === brand._id
                      )}
                      onChange={() => handleCheckboxChange(brand)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={brand._id}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {brand.title}
                    </label>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </div>
        </div>

        <div className="border-b">
          <header className="flex justify-between items-start my-2">
            <h2 className="font-bold text-lg">Categories</h2>
          </header>
          <div>
            <Input
              type="text"
              placeholder="Search categories"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <div>
              <ScrollArea className="h-[200px] w-full">
                {categorys.map((category) => (
                  <div
                    key={category._id}
                    className={`flex items-center ps-2 ${
                      category.title
                        .toLocaleLowerCase()
                        .includes(categoryName.toLocaleLowerCase())
                        ? ""
                        : "hidden"
                    }`}
                  >
                    <input
                      id={category._id}
                      type="checkbox"
                      value={category.title}
                      checked={filters.some(
                        (filter) => filter.id === category._id
                      )}
                      onChange={() => handleCheckboxChange(category)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={category._id}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {category.title}
                    </label>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

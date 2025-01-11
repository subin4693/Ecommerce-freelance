import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PanelsTopLeft, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [filters, setFilters] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [brands, setBrands] = useState([
    { _id: "232", name: "Adidas" },
    { _id: "233", name: "Nike" },
    { _id: "234", name: "Puma" },
    { _id: "235", name: "Reebok" },
    { _id: "236", name: "Under Armour" },
    { _id: "273", name: "New Balance" },
    { _id: "238", name: "Asics" },
    { _id: "239", name: "Fila" },
    { _id: "2334", name: "Converse" },
    { _id: "2gdfgs3", name: "Vans" },
    { _id: "23ete", name: "Jordan" },
    { _id: "2vd3", name: "Sketchers" },
    { _id: "2dfgd3", name: "Champion" },
    { _id: "2ht3", name: "Brooks" },
    { _id: "2ng3", name: "Hoka One One" },
    { _id: "2fbf3", name: "Saucony" },
    { _id: "2v3", name: "Merrell" },
    { _id: "2sde3", name: "Timberland" },
  ]);
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

  const [maxPrice, setMaxPrice] = useState(3000);

  const handleClose = (title) => {
    setFilters((prev) => {
      let temp = prev;
      temp = temp.filter((name) => {
        console.log(name);
        return name != title;
      });
      return temp;
    });
  };

  return (
    <div>
      <Button
        onClick={() =>
          setSidebar((prev) => {
            console.log(prev);
            return !prev;
          })
        }
        variant="outline"
        size="icon"
      >
        <PanelsTopLeft />
      </Button>
      <div
        className={`p-0   lg:w-full overflow-hidden lg:px-5 border-r h-full ${
          sidebar ? "w-[80vw] p-10" : "w-0"
        }`}
      >
        <div>
          <header className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">Filters</h2>
            <button className="text-sm">CLEAR ALL</button>
          </header>
          <div className=" flex justify-start flex-wrap gap-2">
            {filters.map((text) => {
              return (
                <Badge
                  className={"text-black cursor-pointer relative "}
                  onClick={() => handleClose(text)}
                  key={text}
                >
                  {text}
                </Badge>
              );
            })}
          </div>
        </div>
        <div>
          <header className="flex justify-between items-start my-2">
            <h2 className="font-bold text-lg">Price</h2>
            <p>Max : {maxPrice} &#8377; </p>
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
        {/*filter using Brands */}
        <div>
          <header className="flex justify-between items-start my-2">
            <h2 className="font-bold text-lg">Brand</h2>
          </header>
          <div>
            <Input
              type="text"
              placeholder="Search brands"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
            <div>
              <ScrollArea className="h-[200px] w-full ">
                {brands.map(({ _id, name }) => {
                  return (
                    <div
                      className={`flex items-center ps-2 ${
                        name
                          .toLocaleLowerCase()
                          .includes(brandName.toLocaleLowerCase())
                          ? ""
                          : "hidden"
                      }`}
                    >
                      <input
                        id={_id}
                        type="checkbox"
                        value={name}
                        checked={filters.includes(name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters([...filters, name]);
                          } else {
                            setFilters(
                              filters.filter((filter) => filter !== name)
                            );
                          }
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={_id}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {name}
                      </label>
                    </div>
                  );
                })}
              </ScrollArea>
            </div>
          </div>
        </div>
        {/*filter using Categorys */}
        <div>
          <header className="flex justify-between items-start my-2">
            <h2 className="font-bold text-lg">Categorys</h2>
          </header>
          <div>
            <Input
              type="text"
              placeholder="Search brands"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <div>
              <ScrollArea className="h-[200px] w-full ">
                {categorys.map(({ _id, title }) => {
                  return (
                    <div
                      className={`flex items-center ps-2 ${
                        title
                          .toLocaleLowerCase()
                          .includes(categoryName.toLocaleLowerCase())
                          ? ""
                          : "hidden"
                      }`}
                    >
                      <input
                        id={_id}
                        type="checkbox"
                        value={title}
                        checked={filters.includes(title)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters([...filters, title]);
                          } else {
                            setFilters(
                              filters.filter((filter) => filter !== name)
                            );
                          }
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={_id}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {title}
                      </label>
                    </div>
                  );
                })}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

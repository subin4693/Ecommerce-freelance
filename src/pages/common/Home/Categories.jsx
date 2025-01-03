import React, { useState, useEffect } from "react";
import HUMANOODLES from "@/assets/HUMANOODLES.jpg";

const Categories = () => {
  const [categories, setCategories] = useState([
    { _id: "abcd", image: HUMANOODLES, name: "Category 1" },
    { _id: "abcdd", image: HUMANOODLES, name: "Category 2" },
    { _id: "abfcd", image: HUMANOODLES, name: "Category 3" },
    { _id: "abdcd", image: HUMANOODLES, name: "Category 4" },
    { _id: "abcwd", image: HUMANOODLES, name: "Category 5" },
    { _id: "abcd2", image: HUMANOODLES, name: "Category 6" },
    { _id: "abcdd2", image: HUMANOODLES, name: "Category 7" },
    { _id: "abfcd2", image: HUMANOODLES, name: "Category 8" },
    { _id: "abdcd2", image: HUMANOODLES, name: "Category 9" },
  ]);

  const [visible, setVisible] = useState(false);

  // Handle scroll to add animation effect
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("categories");
      if (section) {
        const rect = section.getBoundingClientRect();
        setVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="categories" className="py-10   ">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#918ba7] mb-6">
        Shop by Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-6 ">
        {categories.map(({ _id, image, name }) => (
          <div
            key={_id}
            className={`flex flex-col items-center justify-center transition-transform duration-500 ${
              visible ? "scale-100" : "scale-0"
            }`}
          >
            <div className="h-24 w-24 rounded-full overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl duration-200 hover:scale-110 hover:-translate-y-1">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover hover:shadow-2xl "
              />
            </div>
            <p className="mt-3 text-sm font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

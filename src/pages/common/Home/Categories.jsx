import React, { useState } from "react";
import HUMANOODLES from "@/assets/HUMANOODLES.jpg";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      _id: "abcd",
      image: HUMANOODLES,
      name: "Category 1",
    },
    {
      _id: "abcdd",
      image: HUMANOODLES,
      name: "Category 2",
    },
    {
      _id: "abfcd",
      image: HUMANOODLES,
      name: "Category 3",
    },
    {
      _id: "abdcd",
      image: HUMANOODLES,
      name: "Category 4",
    },
    {
      _id: "abcwd",
      image: HUMANOODLES,
      name: "Category 5",
    },
    {
      _id: "abcd",
      image: HUMANOODLES,
      name: "Category 6",
    },
    {
      _id: "abcdd",
      image: HUMANOODLES,
      name: "Category 7",
    },
    {
      _id: "abfcd",
      image: HUMANOODLES,
      name: "Category 8",
    },
    {
      _id: "abdcd",
      image: HUMANOODLES,
      name: "Category 9",
    },
  ]);
  const [colours, setColours] = useState([
    "#d6b4d7",
    "#c48dc4",
    "#a467ac",
    "#e2d6fa",
    "#a19ac6",
    "#659fb3",
    "#b9dde9",
    "#e8f2e7",
    "#d2d6f1",
    "#bcb3e8",
    "#b294d2",
    "#c398f1",
    "#ebb3e4",
    "#d4a1e3",
    "#be8fdf",
    "#a478d9",
    "#bfc9c0",
    "#859394",
    "#918ba7",
    "#d6d1e8",
    "#bb82e3",
    "#d6afe6",
    "#d5c3ed",
    "#d5dade",
    "#7ca9af",
  ]);

  return (
    <div className="tech-slideshow overflow-hidden relative ">
      <div className="absolute top-0 left-0 h-full w-20 z-10 bg-gradient-to-r from-[#fdfaff] to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-20 z-10 bg-gradient-to-l from-[#fdfaff] to-transparent"></div>

      <div className="flex tech-inner-scroll gap-5 py-5 ">
        {[
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
        ].map(({ _id, image, name }, index) => {
          return (
            <div
              key={_id + index}
              className={`flex justify-center items-center p-2 rounded-lg gap-1 text-sm text-black  cat_item cursor-pointer duration-200 relative `}
              style={{
                background: colours[index % colours.length],
              }}
            >
              <div className="h-[25px] w-[25px] overflow-hidden rounded-full">
                <img src={image} alt={name} className="object-cover" />
              </div>
              <p className="whitespace-nowrap ">{name}</p>
            </div>
          );
        })}
      </div>
      <style>{`
        .tech-slideshow {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .tech-inner-scroll {
          display: flex;
          animation: moveSlideshow 15s linear infinite;
        }
        @keyframes moveSlideshow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Categories;

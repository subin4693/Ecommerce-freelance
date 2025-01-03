import React, { useState } from "react";
import HUMANOODLES from "@/assets/HUMANOODLES.jpg";
import HUMANOODLES1 from "@/assets/HUMANOODLES3.jpg";
import HUMANOODLES2 from "@/assets/HUMANOODLES2.jpg";
import SimpleImageSlider from "react-simple-image-slider";
const Banner = () => {
  const [bannsers, setBanners] = useState([
    {
      _id: "sdfa",
      url: "https://www.hdwallpapers.in/download/tom_and_jerry_2020_movie_poster_4k_hd_tom_and_jerry-3840x2160.jpg",
    },
    {
      _id: "abcd",
      url: " https://i.ytimg.com/vi/0HEEOvdphNo/maxresdefault.jpg",
    },
    {
      _id: "abcd",
      url: "https://diskingdom.com/wp-content/uploads/2017/10/r_cars3_header_1_89130e94.jpeg",
    },

    {
      _id: "abcd",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dgh8b59-04d86422-3f94-4e9e-87a5-41b17f25972c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGdoOGI1OS0wNGQ4NjQyMi0zZjk0LTRlOWUtODdhNS00MWIxN2YyNTk3MmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ju-ZaO8eDe4AyYfChUm2g_y37hBguRDEZ3KFH9UsM3k",
    },

    {
      _id: "abcd",
      url: " https://wallpapers.com/images/featured/tangled-tf13i06uw7o98ued.jpg",
    },
    {
      _id: "fdsfa",
      url: "https://4kwallpapers.com/images/wallpapers/ben-10-tv-series-3840x2160-18971.jpg",
    },
  ]);
  return (
    <div className="h-[75vh] overflow-hidden w-full mt-2   relative bg-[#fdfaff]">
      {" "}
      <div className="h-full w-full bg-red- 500">
        <SimpleImageSlider
          width={"100%"}
          height={"100%"}
          images={bannsers}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={3}
        />
      </div>
    </div>
  );
};

export default Banner;

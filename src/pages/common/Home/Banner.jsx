import React, { useState } from "react";
import HUMANOODLES from "@/assets/HUMANOODLES.jpg";
import HUMANOODLES1 from "@/assets/HUMANOODLES3.jpg";
import HUMANOODLES2 from "@/assets/HUMANOODLES2.jpg";
import SimpleImageSlider from "react-simple-image-slider";
const Banner = () => {
  const [bannsers, setBanners] = useState([
    {
      _id: "sdfa",
      url: "https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg",
    },
    {
      _id: "abcd",
      url: "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    },
  ]);
  return (
    <div className="h-[75vh] overflow-hidden w-full mt-2   relative bg-[#fdfaff]">
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

import React, { useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";
const Banner = () => {
  const [banners, setBanners] = useState([
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
    <div className="h-[75vh] overflow-hidden w-full mt-2    bg-[#fdfaff]">
      <div className="h-full w-full relative">
        <SimpleImageSlider
          width={"100%"}
          height={"100%"}
          images={banners}
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

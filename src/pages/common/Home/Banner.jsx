import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Banner = () => {
  const banners = [
    {
      _id: "sdfa",
      url: "https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg",
    },
    {
      _id: "abcd",
      url: "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    },
  ];

  return (
    <div className="h-[75vh] overflow-hidden w-full mt-2 bg-[#fdfaff] relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000, // Increased duration to 8 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full w-full"
      >
        {banners.map(({ _id, url }) => (
          <SwiperSlide key={_id}>
            <div
              className="h-full w-full bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-3xl cursor-pointer z-10">
        <ChevronLeftIcon className="text-black" />
      </div>
      <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-3xl cursor-pointer z-10">
        <ChevronRightIcon className="text-black" />
      </div>
    </div>
  );
};

export default Banner;

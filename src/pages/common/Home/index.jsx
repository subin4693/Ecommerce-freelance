import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import RecentProducts from "./RecentProducts";
import Testimonials from "./Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowBigUpDash } from "lucide-react";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (ref) => {
    // if (!ref.current) return;
    window.scrollTo({
      top: ref.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };
  console.log(showButton);

  const mainRef = useRef(null);
  return (
    <section className="mt-20 breakpoint " ref={mainRef}>
      <Banner />
      <Categories />
      <RecentProducts />
      <Testimonials />

      <Button
        className={`rounded-full fixed bottom-5 right-5 md:bottom-20 md:right-20 duration-300 transform ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        size={"icon"}
        onClick={() => handleScroll(mainRef.current)}
      >
        <ArrowBigUpDash />
      </Button>
    </section>
  );
};

export default Home;

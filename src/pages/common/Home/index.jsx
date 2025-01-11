import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import RecentProducts from "./RecentProducts";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section className="mt-20 breakpoint">
      <Banner />
      <Categories />
      <RecentProducts />
      <Testimonials />
    </section>
  );
};

export default Home;

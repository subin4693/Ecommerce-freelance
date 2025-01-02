import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Shop, About } from "./pages";
import Layout from "./layouts/layout";
const App = () => {
  return (
    <div className="bg-[#fdfaff] min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* <Route path="about" element={<About />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default App;

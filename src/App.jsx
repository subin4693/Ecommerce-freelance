import React from "react";
import { Routes, Route } from "react-router";
import { Home, Shop, BrandStory, FoundersNote, Signin, Signup } from "./pages";
import { Layout, AuthLayout } from "./layouts";
const App = () => {
  return (
    <div className="bg-[#fdfaff] min-h-screen">
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          {/* About section */}
          <Route path="about/brand-story" element={<BrandStory />} />
          <Route path="about/founders-note" element={<FoundersNote />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

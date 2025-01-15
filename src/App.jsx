import { Routes, Route } from "react-router";
import {
  Home,
  Shop,
  BrandStory,
  FoundersNote,
  Signin,
  Signup,
  AdminBrands,
  AdminCategories,
  AdminContactForm,
  AdminDashboard,
  AdminHomePage,
  AdminOrders,
  AdminPayments,
  AdminProducts,
} from "./pages";
import { Layout, AuthLayout } from "./layouts";
import AdminLayout from "./layouts/AdminLayout";
const App = () => {
  return (
    <div className="bg-[#fdfaff] min-h-screen max-h-screen   ">
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about/brand-story" element={<BrandStory />} />
          <Route path="about/founders-note" element={<FoundersNote />} />
        </Route>

        {/*Admin pages */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="brands" element={<AdminBrands />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="contactform" element={<AdminContactForm />} />
          <Route path="home-page" element={<AdminHomePage />} />

          <Route path="products" element={<AdminProducts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

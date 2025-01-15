import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Outlet } from "react-router";
import BrandSidebar from "@/components/BrandSidebar";

const BrandLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <BrandSidebar />

        <SidebarTrigger />
        <main className=" w-full p-2">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default BrandLayout;

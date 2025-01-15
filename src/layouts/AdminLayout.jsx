import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />

        <SidebarTrigger />
        <main className=" w-full p-2">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;

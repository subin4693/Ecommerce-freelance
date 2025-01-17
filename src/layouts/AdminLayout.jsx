import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/AdminSidebar";

import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AdminSidebar />

        <SidebarTrigger />
        <main className=" w-full p-2">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;

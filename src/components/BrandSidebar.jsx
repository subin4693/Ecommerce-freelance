import {
  Home,
  Package,
  ShoppingBag,
  CreditCard,
  Settings,
  User,
  MessageSquare,
  Layout,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router";

const items = [
  {
    title: "Dashboard",
    url: "/brands/dashboard",
    icon: Home,
  },

  {
    title: "Orders",
    url: "/brands/orders",
    icon: ShoppingBag,
  },
  {
    title: "Payments",
    url: "/brands/payments",
    icon: CreditCard,
  },
  {
    title: "Products",
    url: "/brands/products",
    icon: Package,
  },
];

const BrandSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Seller's Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default BrandSidebar;

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
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Brands",
    url: "/admin/brands",
    icon: Package,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: ShoppingBag,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: ShoppingBag, // Could also use "Package" for orders
  },
  {
    title: "Payments",
    url: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: Package, // Use Package for product management
  },
  {
    title: "Contact form",
    url: "/admin/contactform",
    icon: MessageSquare,
  },
  {
    title: "Home page",
    url: "/admin/home-page",
    icon: Layout,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
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
}

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>HEADER NAVBAR</SidebarHeader>
        <SidebarContent>
          <main>{children}</main>
        </SidebarContent>
        <SidebarFooter>FOOTER</SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}

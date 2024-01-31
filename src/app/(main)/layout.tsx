import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-30 hidden h-full w-[72px] md:flex">
        <NavigationSidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;

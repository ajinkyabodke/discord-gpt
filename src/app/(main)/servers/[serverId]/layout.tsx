import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";
import React from "react";

const ServerIdLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen">
      <div className="hidden md:flex">
        <NavigationSidebar />
        <ServerSidebar serverId={params.serverId} />
      </div>

      {children}
    </div>
  );
};

export default ServerIdLayout;

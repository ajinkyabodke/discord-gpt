import { ServerSidebar } from "@/components/server/server-sidebar";
import React from "react";

const ServerIdLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-20 hidden h-full w-60 flex-col md:flex">
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;

import { ServerHeader } from "./server-header";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = ({ serverId }: ServerSidebarProps) => {
  const channels = [{ type: "text", }, { type: "audio" }];
  return (
    <div className="flex h-full w-full flex-col bg-[#F2F3F5] text-primary dark:bg-[#2B2D31]">
      <ServerHeader serverId={serverId} />
    </div>
  );
};

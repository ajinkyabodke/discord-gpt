import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

export const MobileToggleChannel = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative left-4 top-2 md:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-3/5 gap-0 p-0">
        <div className="w-full justify-end bg-[#f2f3f5] dark:bg-[#2b2d31]">
          <div className="flex w-full flex-col items-start bg-[#f2f3f5] py-10 dark:bg-[#2b2d31]">
            <div className="mb-1 w-full px-5 pb-4 text-sm font-semibold text-[#4e5058] dark:text-[#b5bac1] ">
              # GENERAL
            </div>
            <div className="flex w-full flex-col gap-y-2 space-y-2 px-2">
              <button className="w-full rounded-sm px-2 text-left text-[#4e5058] dark:bg-[#404249] dark:text-[#fff]">
                Overview
              </button>
              <button className="w-full px-2 text-left text-[#4e5058] dark:text-[#b5bac1]">
                Permissions
              </button>
              <button className="w-full px-2 text-left text-[#4e5058] dark:text-[#b5bac1]">
                Invites
              </button>
              <button className="w-full px-2 text-left text-[#4e5058] dark:text-[#b5bac1]">
                Integrations
              </button>
              <button className="mt-4 w-full px-2 text-left text-red-500">
                Delete Channel
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

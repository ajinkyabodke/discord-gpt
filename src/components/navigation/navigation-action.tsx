"use client";

import { Plus } from "lucide-react";
import React from "react";
import { ActionTooltip } from "../action-tooltip";

export const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button className="group flex items-center">
          <div className="mx-3 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[24px] bg-background transition-all group-hover:rounded-[16px] group-hover:bg-emerald-500 dark:bg-neutral-700">
            <Plus className="transtion text-emerald-500 group-hover:text-white" />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

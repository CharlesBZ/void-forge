"use client";

import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip
        side="right"
        align="center"
        label="Add Server"
      >
        {/**Make modal to add servers on */}
        {/**Hover Effect */}
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          {/**Add a Server button */}
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-[#1d2746] group-hover:bg-purple-600">
            {/**size of plus icon */}
            <Plus
              className="group-hover:text-white transition text-purple-600"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}
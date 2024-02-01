import React from "react";
import { Separator } from "../ui/separator";

export const ChannelSettings = () => {
  return (
    <div className="flex h-screen justify-center bg-[#2b2d31] text-white">
      <div className="flex w-5/12 justify-end bg-[#2b2d31]">
        <div className="flex flex-col items-start border-r border-gray-700 bg-[#2b2d31] p-5 pt-16">
          <div className="mb-4 font-semibold text-gray-400"># GENERAL</div>
          <div className="flex flex-col space-y-2">
            <button className="text-left text-white">Overview</button>
            <button className="text-left text-gray-400">Permissions</button>
            <button className="text-left text-gray-400">Invites</button>
            <button className="text-left text-gray-400">Integrations</button>
            <button className="mt-4 text-left text-red-500">
              Delete Channel
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#313338]">
        <div className="max-w-3xl items-start overflow-auto bg-[#313338] p-8 pt-16">
          <div className="mb-6 flex justify-between">
            <h1 className="text-2xl font-bold">Overview</h1>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label
                className="mb-2 text-sm font-semibold"
                htmlFor="channel-name"
              >
                CHANNEL NAME
              </label>
              <input
                className="rounded bg-[#202225] px-3 py-2 text-white"
                id="channel-name"
                type="text"
                value="welcome"
              />
            </div>
            <Separator className="bg-slate-700" />
            <div className="flex flex-col">
              <label
                className="mb-2 text-sm font-semibold"
                htmlFor="channel-topic"
              >
                CHANNEL TOPIC
              </label>
              <textarea
                className="rounded bg-[#202225] px-3 py-2 text-white"
                id="channel-topic"
                placeholder="Let everyone know how to use this channel!"
                readOnly
                rows={3}
              />
              <div className="mt-1 text-right text-xs text-gray-500">1024</div>S
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">SLOWMODE</label>
              <div className="flex items-center space-x-4">
                <div className="h-1 flex-grow rounded bg-[#202225]" />
                <div className="relative -ml-3 h-6 w-6 rounded-full bg-white">
                  <div className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-[#36393f]" />
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Members will be restricted to sending one message and creating
                one thread per this interval, unless they have Manage Channel or
                Manage Messages permissions.
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold">
                  Age-Restricted Channel
                </label>
                <div className="text-sm text-gray-500">
                  Users will need to confirm they are of over legal age to view
                  in the content in this channel. Age-restricted channels are
                  exempt from the explicit content filter.
                </div>
              </div>
              <InfoIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div className="flex flex-col">
              <label
                className="mb-2 text-sm font-semibold"
                htmlFor="hide-inactivity"
              >
                HIDE AFTER INACTIVITY
              </label>
              <select
                className="rounded bg-[#202225] px-3 py-2 text-white"
                id="hide-inactivity"
              >
                <option>3 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function PanelTopCloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}

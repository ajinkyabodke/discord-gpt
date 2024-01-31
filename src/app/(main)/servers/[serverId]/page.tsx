import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { ChatHeader } from "@/components/chat/chat-header";

export default async function Home() {
  return (
    <div className="flex h-full w-screen flex-col bg-white dark:bg-[#313338]">
      <ChatHeader />    
    </div>
  );
}

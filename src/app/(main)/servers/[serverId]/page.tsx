import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { api } from "@/trpc/server";
import { db } from "@/server/db";
import { messages, users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  // await api.post.sendMessage.mutate({
  //   content: "hello Pranve!",
  // });
  // const messages = await db.query.messages.findMany({});
  let result = await db
    .select()
    .from(messages)
    .leftJoin(users, eq(messages.userId, users.userId))
    .orderBy(messages.createdAt);

    const updatedArray = result.map((item) => {
      const createdAtDate = new Date(item.messages.createdAt);
      
      // Add 5 hours and 30 minutes
      createdAtDate.setHours(createdAtDate.getHours() + 5);
      createdAtDate.setMinutes(createdAtDate.getMinutes() + 30);
    
      // Format the date as per the specified options
      item.messages.createdAt = createdAtDate.toLocaleString("en-IN", {
        hour12: true,
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    
      return item;
    });
  return (
    <div className="flex h-full w-screen flex-col bg-white dark:bg-[#313338]">
      <ChatHeader />
      <ChatMessages messages={updatedArray} />
      <ChatInput />
    </div>
  );
}

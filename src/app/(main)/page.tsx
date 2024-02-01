import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { redirect, useRouter } from "next/navigation";

export default async function Home() {
  redirect("/servers/1");
  return <div className="text-2xl">Discord GPT</div>;
}

import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  return (
    <main>
      <div>Discord AI</div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </main>
  );
}

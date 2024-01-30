import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { api } from "@/trpc/server";

export default async function Home() {
  return <div>Hellow</div>;
}

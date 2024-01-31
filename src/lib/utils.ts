import { env } from "@/env";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function absoluteUrl(path: string) {
  const domain =
    env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? env.NEXT_PUBLIC_APP_URL
      : env.NEXT_PUBLIC_LOCAL_TUNNEL_URL ??
        env.NEXT_PUBLIC_VERCEL_URL ??
        env.NEXT_PUBLIC_APP_URL;

  // return `${domain}${path}`;
  const url = new URL(path, domain).toString();

  return url;
}

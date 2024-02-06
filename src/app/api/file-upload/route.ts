import { NextRequest } from "next/server";

import { createClient } from "@supabase/supabase-js";
import { env } from "@/env";

export async function POST(_req: NextRequest) {
  const data = await _req.formData();
  let file: File | null = data.get("file") as unknown as File;
  console.log("recieved data", data);

  const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLL_KEY,
  );

  const { data: dataa, error } = await supabase.storage
    .from("discord-files")
    .upload("public/" + file?.name, file as File);

  console.log({ data, error });

  if (dataa) {
    console.log(dataa);
  } else if (error) {
    console.log(error);
  }

  return new Response("OK", { status: 200 });
}

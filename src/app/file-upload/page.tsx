"use client";
import { createClient } from "@supabase/supabase-js";
import { env } from "@/env";

export default function Page() {
  const handleUpload = async (e) => {
    let file;

    // Create a single supabase client for interacting with your database

    const supabase = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("discord-files")
      .upload("public/" + file?.name, file as File);

    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <input
        type="file"
        accept="image/*"
        className="block w-auto cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
        id="file_input"
        onChange={(e) => {
          handleUpload(e); // 👈 this will trigger when user selects the file.
        }}
      />
    </div>
  );
}

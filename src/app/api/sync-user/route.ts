import { db } from "@/server/db";
import { users } from "@/server/db/schema";

export async function POST(req) {
  const data = await req.json();
  console.log(data.data.email_addresses);
  const userId = data.data.id;
  const name = data.data.first_name;
  const email = data.data.email_addresses[0].email_address;
  const imageUrl = data.data.image_url;

  await db
    .insert(users)
    .values({
      userId: userId,
      emailAddress: email,
      imageUrl: imageUrl,
      name: name,
    })
    .returning();
  return new Response("OK", { status: 200 });
}

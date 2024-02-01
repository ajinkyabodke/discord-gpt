ALTER TABLE "discord-gpt_messages" DROP CONSTRAINT "discord-gpt_messages_userId_discord-gpt_users_userId_fk";
--> statement-breakpoint
ALTER TABLE "discord-gpt_users" ADD COLUMN "imageUrl" text;--> statement-breakpoint
ALTER TABLE "discord-gpt_users" ADD COLUMN "userName" varchar(50);
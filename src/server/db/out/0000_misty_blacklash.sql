DO $$ BEGIN
 CREATE TYPE "messageRoleEnum" AS ENUM('assistant', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discord-gpt_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"content" text NOT NULL,
	"role" "messageRoleEnum" NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	"deletedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discord-gpt_users" (
	"userId" varchar(191) PRIMARY KEY NOT NULL,
	"emailAddress" varchar(191) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	"deletedAt" timestamp with time zone,
	CONSTRAINT "discord-gpt_users_emailAddress_unique" UNIQUE("emailAddress")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discord-gpt_messages" ADD CONSTRAINT "discord-gpt_messages_userId_discord-gpt_users_userId_fk" FOREIGN KEY ("userId") REFERENCES "discord-gpt_users"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

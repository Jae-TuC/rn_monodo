CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`decription` text DEFAULT '',
	`content` text NOT NULL,
	`date` integer NOT NULL,
	`done` integer DEFAULT 0,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP
);

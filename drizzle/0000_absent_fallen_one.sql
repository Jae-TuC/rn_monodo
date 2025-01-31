CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`date` integer NOT NULL,
	`decription` text DEFAULT '',
	`done` integer DEFAULT 0,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);

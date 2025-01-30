import { Paths } from "expo-file-system/next";
import { defaultDatabaseDirectory, openDatabaseSync } from "expo-sqlite";
import { Platform } from "react-native";
import { drizzle } from "drizzle-orm/expo-sqlite";

const dbPath =
  Platform.OS === "ios"
    ? Object.values(Paths.appleSharedContainers)?.[0]?.uri
    : defaultDatabaseDirectory;

// Create a single database instance
const expodb = openDatabaseSync(
  "db.db",
  {
    enableChangeListener: true,
  },
  dbPath
);

// Export the raw database for Drizzle Studio
export const sqliteDb = () => expodb;

// Export the Drizzle instance
export const db = drizzle(expodb, { logger: false });

// const expodb = openDatabaseSync("db.db");
// const db = drizzle(expodb);

import { Paths } from "expo-file-system/next";
import { defaultDatabaseDirectory, openDatabaseSync } from "expo-sqlite";
import { Platform } from "react-native";
import { drizzle } from "drizzle-orm/expo-sqlite";

const dbPath =
  Platform.OS === "ios"
    ? Object.values(Paths.appleSharedContainers)?.[0]?.uri
    : defaultDatabaseDirectory;

// Create a single database instance
const sqlite = openDatabaseSync(
  "db.db",
  {
    enableChangeListener: true,
  },
  dbPath
);

export const sqliteDb = () => sqlite;
export const db = drizzle(sqlite, { logger: false });

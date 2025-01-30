import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NoiseBackground from "@/components/NoiseBackground";
import { Week } from "@/components/week";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <NoiseBackground />
      <Week />
    </SafeAreaView>
  );
}

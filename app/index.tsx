import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-4xl  font-barlow-500 text-selected">
        HomeScreen
      </Text>
    </SafeAreaView>
  );
}

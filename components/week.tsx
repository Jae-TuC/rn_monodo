import { View, Text, ScrollView } from "react-native";
import React from "react";
import { weekDays } from "@/utils/constant";
import Day from "@/components/Day";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Week() {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView>
      <View className="" style={{ marginBottom: bottom }}>
        {weekDays.map((day) => (
          <Day key={`day-${day}`} day={day} />
        ))}
      </View>
    </ScrollView>
  );
}

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { weekDays } from "@/utils/constant";
import Day from "@/components/Day";

export default function Week() {
  return (
    <ScrollView>
      <View className="">
        {weekDays.map((day) => (
          <Day key={`day-${day}`} day={day} />
        ))}
      </View>
    </ScrollView>
  );
}

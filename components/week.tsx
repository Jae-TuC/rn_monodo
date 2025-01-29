import { View, Text } from "react-native";
import React from "react";
import { weekDays } from "@/utils/constant";
import Day from "./day";

export function Week() {
  return (
    <View className="">
      {weekDays.map((day) => (
        <Day key={`day-${day}`} day={day} />
      ))}
    </View>
  );
}

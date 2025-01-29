import { View, Text } from "react-native";
import React from "react";
import { localFormatter, weekDayFormatter, weekDays } from "@/utils/constant";
import dayjs from "dayjs";
import Todos from "./todos";

export default function Day({ day }: { day: string }) {
  return (
    <View
      className="gap-2 p-4 pl-12 border-t-2 border-black/10"
      style={{ minHeight: `${100 / weekDays.length}%` }}
    >
      <View>
        <Text className="text-4xl font-barlow-900 uppercase">
          {dayjs(day).format(weekDayFormatter)}
        </Text>
        <Text className="font-barlow-400 text-gray-600">
          {dayjs(day).format(localFormatter)} - 24C
        </Text>
      </View>

      <Todos day={day} />
    </View>
  );
}

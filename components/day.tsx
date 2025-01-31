import { Text, useWindowDimensions } from "react-native";
import React from "react";
import {
  localFormatter,
  weekDayColors,
  weekDayFormatter,
  weekDays,
} from "@/utils/constant";
import dayjs from "dayjs";
import Todos from "./Todos";
import { Accordion } from "@animatereactnative/accordion";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Day({ day }: { day: string }) {
  const { height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  return (
    <Accordion.Accordion
      isOpen={dayjs(day).isSame(dayjs(), "day")}
      className="gap-2 pt-4 pr-4 pl-12 bg-transparent"
      style={{
        minHeight: (height - bottom) / weekDays.length,
        experimental_backgroundImage: `linear-gradient(to bottom, ${
          weekDayColors[dayjs(day).weekday()]
        }, rgba(0,0,0,.1))`,
      }}
    >
      <Accordion.Header>
        <Text className="text-4xl font-barlow-900 uppercase">
          {dayjs(day).format(weekDayFormatter)}
        </Text>
        <Accordion.Expanded>
          <Text className="font-barlow-400 text-gray-600">
            {dayjs(day).format(localFormatter)} - 24°C
          </Text>
        </Accordion.Expanded>
      </Accordion.Header>
      <Accordion.Expanded>
        <Todos day={day} />
      </Accordion.Expanded>
    </Accordion.Accordion>
  );
}

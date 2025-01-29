import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import React from "react";

export default function NoiseBackground() {
  return (
    <LinearGradient
      colors={["#D7D7D7", "#ACACAC"]}
      start={[0, 0]}
      end={[0, 1]}
      className="absolute top-0 right-0 bottom-0 left-0"
    >
      <Image
        source={require("@/assets/todo_bg.jpg")}
        resizeMode="repeat"
        className="absolute left-0 right-0 bottom-0 top-0 h-full w-full"
      />
    </LinearGradient>
  );
}

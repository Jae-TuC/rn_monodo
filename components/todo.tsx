import { View, Text } from "react-native";
import React from "react";
import { Todo as TodoProps } from "@/utils/todo";

export default function Todo({ todo }: { todo: TodoProps }) {
  return (
    <View className="flex-row gap-2 items-center">
      <View
        className={`w-4 h-4 border rounded-sm ${
          todo.done ? "bg-selected border-selected" : "bg-transparent bg0-black"
        }`}
      />
      <Text
        className={`font-barlow-400 ${
          todo.done ? "line-through decoration-selected" : ""
        }`}
      >
        {todo.content}
      </Text>
    </View>
  );
}

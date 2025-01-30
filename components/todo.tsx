import { View, Text } from "react-native";
import React from "react";
// import { Todo as TodoProps } from "@/utils/todo";
import { Check } from "lucide-react-native";
import { TodoPros } from "@/db/schema";

export default function Todo({ todo }: { todo: TodoPros }) {
  return (
    <View className="flex-row gap-2 items-center">
      <View
        className={`w-4 h-4 border rounded-sm items-center justify-center ${
          todo.done ? "bg-selected border-selected" : "bg-transparent bg0-black"
        }`}
      >
        {todo && (
          <Check className="stroke-white" absoluteStrokeWidth size={16} />
        )}
      </View>
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

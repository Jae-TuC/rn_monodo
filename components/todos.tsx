import { View, Text } from "react-native";
import React from "react";
import dayjs from "dayjs";
import { _todos } from "@/utils/todo";
import Todo from "./todo";

export default function Todos({ day }: { day: string }) {
  if (day !== dayjs().format("YYYY-MM-DD")) {
    return null;
  }

  return (
    <View className="gap-2">
      {_todos.map((todo, index) => (
        <Todo key={`todo-${todo.id.toString() + index}`} todo={todo} />
      ))}
    </View>
  );
}

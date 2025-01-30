import { View, Text } from "react-native";
import React from "react";
import dayjs from "dayjs";
import { _todos } from "@/utils/todo";
import Todo from "./todo";
import { Stagger } from "@animatereactnative/stagger";

export default function Todos({ day }: { day: string }) {
  return (
    // @ts-ignore
    <Stagger className="gap-2 mb-4 mt-2" exitDirection={1}>
      {_todos.map((todo, index) => (
        <Todo key={`todo-${todo.id.toString() + index}`} todo={todo} />
      ))}
    </Stagger>
  );
}

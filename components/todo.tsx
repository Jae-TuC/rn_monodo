import { View, Text } from "react-native";
import React from "react";
// import { Todo as TodoProps } from "@/utils/todo";
import { eq } from "drizzle-orm";
import { Check } from "lucide-react-native";
import { TodoPros, todos } from "@/db/schema";
import { db } from "@/db/init";

export default function Todo({ todo }: { todo: TodoPros }) {
  return (
    <View
      className="flex-row gap-2 items-center"
      onTouchStart={() => {
        // console.log(todo);
        db.update(todos)
          .set({ done: Boolean(todo.done) ? 0 : 1 })
          .where(eq(todos.id, todo.id))
          .execute();
      }}
    >
      <View
        className={`w-4 h-4 border rounded-sm items-center justify-center ${
          todo.done ? "bg-selected border-selected" : "bg-transparent bg0-black"
        }`}
      >
        {Boolean(todo.done) && (
          <Check className="stroke-white" absoluteStrokeWidth size={16} />
        )}
      </View>
      <Text
        className={`font-barlow-400 ${
          Boolean(todo.done) ? "line-through decoration-selected" : ""
        }`}
      >
        {todo.content}
      </Text>
    </View>
  );
}

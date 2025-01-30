import React, { useState } from "react";
import { _todos } from "@/utils/todo";
import Todo from "./todo";
import { Stagger } from "@animatereactnative/stagger";
import { Button, View } from "react-native";

export default function Todos({ day }: { day: string }) {
  const [todos, setTodos] = useState(_todos);
  return (
    <View>
      <Stagger
        // @ts-ignore
        className="gap-2 mb-4 mt-2"
        exitDirection={1}
        enterDirection={-1}
      >
        {todos.map((todo, index) => (
          <Todo key={`todo-${todo.id.toString() + index}`} todo={todo} />
        ))}
      </Stagger>
      <Button
        title="Add Todo"
        onPress={() => {
          setTodos([
            ...todos,
            {
              id: todos.length + 1,
              content: `Todo ${todos.length + 1}`,
              done: false,
            },
          ]);
        }}
      />
    </View>
  );
}

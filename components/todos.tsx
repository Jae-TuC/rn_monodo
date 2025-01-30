import React, { useState } from "react";
import { _todos } from "@/utils/todo";
import Todo from "./todo";
import { useLiveQuery, drizzle } from "drizzle-orm/expo-sqlite";
import { Stagger } from "@animatereactnative/stagger";
import { Button, View } from "react-native";
import { db } from "@/db/init";
import dayjs from "dayjs";
import { todos } from "@/db/schema";
import { between } from "drizzle-orm";

export default function Todos({ day }: { day: string }) {
  const [todosLocal, setTodos] = useState(_todos);

  const { data } = useLiveQuery(
    db
      .select()
      .from(todos)
      .where(
        between(
          todos.date,
          dayjs().startOf("month").toDate(),
          dayjs().endOf("month").toDate()
        )
      )
      .orderBy(todos.createdAt)
  );

  console.log(data);
  return (
    <View>
      <Stagger
        // @ts-ignore
        className="gap-2 mb-4 mt-2"
        exitDirection={1}
        enterDirection={-1}
      >
        {data.map((todo, index) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </Stagger>
      <Button
        title="Add Todo"
        onPress={() => {
          db.insert(todos)
            .values({
              date: dayjs(day).toDate(),
              content: `Todo ${todosLocal.length + 1}`,
            })
            .run();
          // setTodos([
          //   ...todos,
          //   {
          //     id: todos.length + 1,
          //     content: `Todo ${todos.length + 1}`,
          //     done: false,
          //   },
          // ]);
        }}
      />
    </View>
  );
}

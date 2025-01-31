import React, { useEffect, useRef, useState } from "react";
import { _todos } from "@/utils/todo";
import Todo from "./todo";
import { useLiveQuery, drizzle } from "drizzle-orm/expo-sqlite";
import { Stagger } from "@animatereactnative/stagger";
import { Button, Text, TextInput, View } from "react-native";
import { db } from "@/db/init";
import dayjs from "dayjs";
import { todos } from "@/db/schema";
import { between } from "drizzle-orm";
import Animated, {
  FadeIn,
  FadeOutDown,
  LinearTransition,
} from "react-native-reanimated";
import { localFormatter, weekDayFormatter } from "@/utils/constant";

export default function Todos({ day }: { day: string }) {
  const [todosLocal, setTodos] = useState(_todos);
  const [content, setContent] = useState("");
  const inputRef = useRef<TextInput>(null);
  // useEffect(() => {
  //   const deleteTodos = async () => {
  //     await db.delete(todos);
  //   };
  //   deleteTodos();
  // }, []);

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
      .orderBy(todos.createdAt),
    [day]
  );

  const addTodo = () => {
    inputRef.current?.clear();
    inputRef.current?.blur();
    // console.log("hi data");
    db.insert(todos)
      .values({
        date: dayjs(day).toDate(),
        content,
      })
      .run();

    setContent("");
  };

  const isDisabled = !content || content !== "";
  console.log(data);

  // console.log(data);
  return (
    <View>
      <Stagger
        // @ts-ignore
        className="gap-2 mb-4 mt-2"
        exitDirection={1}
        // enterDirection={-1}
      >
        {data?.map((todo, index) => (
          <Todo key={todo.id} todo={todo} />
        ))}
        {data?.length === 0 && (
          <Text className="font-barlow-400">No Todos</Text>
        )}
      </Stagger>
      <Animated.View
        entering={FadeIn.duration(400).delay(400)}
        exiting={FadeOutDown.duration(400).delay(400)}
        layout={LinearTransition.duration(400)}
      >
        <TextInput
          value={content}
          ref={inputRef}
          onSubmitEditing={() => {
            if (isDisabled) {
              addTodo();
            }
          }}
          onChangeText={(text) => setContent(text)}
          className="border border-black/30 rounded-md p-2"
          placeholder="Add Todo"
        />
        <Button disabled={isDisabled} title="Add Todo" onPress={addTodo} />
      </Animated.View>
    </View>
  );
}

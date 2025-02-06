import React, { useEffect, useRef, useState } from "react";
import { _todos } from "@/utils/todo";
import Todo from "@/components/Todo";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { Stagger } from "@animatereactnative/stagger";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { db } from "@/db/init";
import dayjs from "dayjs";
import { todos } from "@/db/schema";
import { between } from "drizzle-orm";
import Animated, {
  FadeIn,
  FadeOutDown,
  LinearTransition,
} from "react-native-reanimated";
import { Plus } from "lucide-react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Todos({ day }: { day: string }) {
  const [todosLocal, setTodos] = useState(_todos);
  const [content, setContent] = useState("");
  const inputRef = useRef<TextInput>(null);

  // useEffect(() => {
  //   const deleteTodos = async () => {
  //     await db.delete(todos).all();
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
          dayjs(day).startOf("day").toDate(),
          dayjs(day).endOf("day").toDate()
        )
      )
      .orderBy(todos.createdAt)
  );

  const addTodo = () => {
    inputRef.current?.clear();
    inputRef.current?.blur();
    // console.log("hi data");
    db.insert(todos)
      .values({
        date: dayjs(day).toDate(),
        content: content,
      })
      .run();

    setContent("");
  };

  const isDisabled = !content || content === "";

  return (
    <View className="gap-2">
      <Stagger
        // @ts-ignore
        className="gap-2 mb-4 mt-2"
        exitDirection={1}
        enterDirection={-1}
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
        className="gap-2 flex-row mb-4 items-end"
      >
        <TextInput
          defaultValue={content}
          ref={inputRef}
          submitBehavior="blurAndSubmit"
          multiline
          onSubmitEditing={() => {
            if (!isDisabled) {
              addTodo();
            }
          }}
          onChangeText={(text) => setContent(text.trim())}
          className="flex-1 border-b border-black/50 rounded-md p-2 font-barlow-400 placeholder:text-gray-600"
          placeholder="What needs to be done"
        />
        <AnimatedPressable
          layout={LinearTransition.duration(400)}
          disabled={isDisabled}
          onPress={addTodo}
          style={{ opacity: isDisabled ? 0.5 : 1 }}
        >
          <View className="bg-black/30 px-2 py-1 rounded-lg flex-row gap-1 items-center justify-center">
            <Plus size={16} className="stroke-white" />
            <Text className="font-barlow-500 color-white">Add</Text>
          </View>
        </AnimatedPressable>
      </Animated.View>
    </View>
  );
}

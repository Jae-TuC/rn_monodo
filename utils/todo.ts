export const _todos = [
  { content: "Sky run", done: true, id: 1 },
  { content: "Read 10 pages", done: false, id: 2 },
  { content: "Walk Dog", done: true, id: 3 },
  { content: "Get Groceries", done: false, id: 4 },
  { content: "Design a to-do app", done: false, id: 5 },
];

export type Todo = (typeof _todos)[0];

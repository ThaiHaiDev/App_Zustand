import { create } from "zustand";
import { todoDataRequest } from "../models/todo";
import { persist, createJSONStorage } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        {
          content: "React",
          isComplete: true,
        },
        {
          content: "Node",
          isComplete: true,
        },
        {
          content: "Express",
          isComplete: false,
        },
      ],
      addTodo: (data: string) =>
        set((state: any) => ({
          todos: [...state.todos, { content: data, isComplete: false }],
        })),

      updateStatusTodo: (data: string) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.content === data) {
              item.isComplete = !item.isComplete;
            }
            return item;
          }),
        }));
      },
    }),
    {
      name: "todo-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);



export default useTodoStore;

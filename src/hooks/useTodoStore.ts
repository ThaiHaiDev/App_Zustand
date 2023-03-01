import { create } from "zustand";
import { todoDataRequest } from "../models/todo";
import { persist, createJSONStorage } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        {
          content: "React",
          statusTodo: "doing",
        },
        {
          content: "Node",
          statusTodo: "inprogress",
        },
        {
          content: "Express",
          statusTodo: "complete",
        },
      ],
      addTodo: (data: string) =>
        set((state: any) => ({
          todos: [...state.todos, { content: data, statusTodo: 'doing' }],
        })),

      updateStatusTodo: (data: string) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.content === data) {
              item.statusTodo = 'doing';
            }
            return item;
          }),
        }));
      },

      updateStatusInProgress: (data: string) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.content === data) {
              item.statusTodo = "inprogress";
            }
            return item;
          }),
        }));
      },

      updateStatusComplete: (data: string) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.content === data) {
              item.statusTodo = "complete";
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

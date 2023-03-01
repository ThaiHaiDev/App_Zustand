import { create } from "zustand";
import { todoDataRequest } from "../models/todo";
import { persist, createJSONStorage } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        {
          id: 0,
          content: "React",
          statusTodo: "doing",
        },
        {
          id: 1,
          content: "Node",
          statusTodo: "inprogress",
        },
        {
          id: 2,
          content: "Express",
          statusTodo: "complete",
        },
      ],
      addTodo: (data: string) =>
        set((state: any) => ({
          todos: [
            ...state.todos,
            {
              id: Number(state.todos.length) + 1,
              content: data,
              statusTodo: "doing",
            },
          ],
        })),

      updateStatusTodo: (data: number) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.id === data) {
              item.statusTodo = "doing";
            }
            return item;
          }),
        }));
      },

      updateStatusInProgress: (data: number) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.id === data) {
              item.statusTodo = "inprogress";
            }
            return item;
          }),
        }));
      },

      updateStatusComplete: (data: number) => {
        set((state: any) => ({
          todos: state.todos?.map((item: todoDataRequest) => {
            if (item.id === data) {
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

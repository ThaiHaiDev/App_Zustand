import { ChangeEvent, useState } from "react";
import useTodoStore from "../../hooks/useTodoStore";
import Header from "../Header/Header";
import "./TodoList.scss";

const TodoList = () => {
  const dataTodos = useTodoStore((state: any) => state.todos);

  const [newTodo, setNewTodo] = useState<string>("");

  const changeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.currentTarget?.value);
  };

  const addTodoNew = useTodoStore((state: any) => state.addTodo);
  const updateTodo = useTodoStore((state: any) => state.updateStatusTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodoNew(newTodo);
  };

  function handleChangeStatusTodo(data: string) {
    updateTodo(data);
  }

  return (
    <>
      <Header />
      <div className="card-todo">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5">
          To do List
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={changeTodo}
            className="relative block mb-3 w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 bg-teal-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="group relative flex mb-5 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add todo
          </button>
        </form>

        {dataTodos?.map((todo: any, index: number) => (
          <div className="item-todo" key={index}>
            <input
              type="checkbox"
              defaultChecked={todo.isComplete}
              onClick={() => handleChangeStatusTodo(todo.content)}
            />{" "}
            <label className={`${todo.isComplete ? "complete" : ""}`} >
              {todo.content}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;

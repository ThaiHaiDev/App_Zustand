import { ChangeEvent, useState } from "react";
import useTodoStore from "../../hooks/useTodoStore";
import "./TodoList.scss";

const TodoList = () => {
  const dataTodos = useTodoStore((state: any) => state.todos);

  const [newTodo, setNewTodo] = useState<string>("");

  const changeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.currentTarget?.value);
  };

  const addTodoNew = useTodoStore((state:any) => state.addTodo);
  const updateTodo = useTodoStore((state:any) => state.updateStatusTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodoNew(newTodo);
  };

  function handleChangeStatusTodo(data: string) {
    updateTodo(data);
  }

  return (
    <div className="card-todo">
      <h1>To do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeTodo}/>
        <button type="submit" onClick={handleSubmit}>Add todo</button>
      </form>

      {dataTodos?.map((todo: any, index: number) => (
        <div className="item-todo" key={index}>
          <input
            type="checkbox"
            defaultChecked={todo.isComplete}
            onClick={() => handleChangeStatusTodo(todo.content)}
          />{" "}
          <label className={`${todo.isComplete ? "complete" : ""}`}>
            {todo.content}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

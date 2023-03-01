import useTodoStore from "../../hooks/useTodoStore";
import "./TodoList.scss";

const TodoList = () => {
  const dataTodos = useTodoStore((state: any) => state.todos);
  const dataTodosFilter = dataTodos.filter((todo: any) => {
    return todo.statusTodo === "doing";
  });

  // const updateTodo = useTodoStore((state: any) => state.updateStatusTodo);

  // function handleChangeStatusTodo(data: string) {
  //   updateTodo(data);
  // }

  const dragStated = (e: any, data: string) => {
    e.dataTransfer.setData("todoTransfer", data);
  };

  return (
    <>
      <div className="card-todo">
        <h5 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5 text-lg">
          Doing
        </h5>
        {dataTodosFilter?.map((todo: any, index: number) => (
          <div
            className="item-todo"
            key={index}
            draggable={true}
            onDragStart={(e) => dragStated(e, todo.content)}
          >
            
            <label>{todo.content}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;

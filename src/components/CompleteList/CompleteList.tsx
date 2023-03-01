import useTodoStore from "../../hooks/useTodoStore";
import "./CompleteList.scss";

const CompleteList = () => {
  const dataTodos = useTodoStore((state: any) => state.todos);
  const dataTodosFilter = dataTodos.filter((todo: any) => {
    return todo.statusTodo === "complete";
  });

  const updateTodo = useTodoStore((state: any) => state.updateStatusComplete);

  const onDragingOver = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const dragDropped = (e: any) => {
    e.stopPropagation();
    updateTodo(e.dataTransfer.getData("todoTransfer"));
  };

  return (
    <div
      onDragOver={(e) => onDragingOver(e)}
      className="card-complete"
      onDrop={(e) => dragDropped(e)}
    >
      <h5 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5 text-lg">
        Complete
      </h5>
      {dataTodosFilter?.map((todo: any, index: number) => (
        <div className="item-todo" key={index}>

          <label>{todo.content}</label>
        </div>
      ))}
    </div>
  );
};

export default CompleteList;

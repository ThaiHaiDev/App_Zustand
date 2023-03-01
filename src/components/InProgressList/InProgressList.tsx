import useTodoStore from "../../hooks/useTodoStore";
import "./InProgressList.scss";

const InProgressList = () => {
  const dataTodos = useTodoStore((state: any) => state.todos);
  const dataTodosFilter = dataTodos.filter((todo: any) => {
    return todo.statusTodo === "inprogress";
  });

  const updateTodo = useTodoStore((state: any) => state.updateStatusInProgress);

  const onDragingOver = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("gege");
  };

  const dragDropped = (e: any) => {
    e.stopPropagation();
    updateTodo(e.dataTransfer.getData("todoTransfer"));
  };

  const dragStated = (e: any, data: string) => {
    e.dataTransfer.setData("todoTransfer", data);
  };

  return (
    <div
      onDragOver={(e) => onDragingOver(e)}
      className="card-inprogress"
      onDrop={(e) => dragDropped(e)}
    >
      <h5 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5 text-lg">
        In Progress
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
  );
};

export default InProgressList;

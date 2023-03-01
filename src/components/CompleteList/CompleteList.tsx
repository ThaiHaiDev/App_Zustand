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
    updateTodo(Number(e.dataTransfer.getData("todoTransfer")));
    document.querySelector(".listcomplete")?.classList.remove("over");
  };

  const dragEnter = (e: any) => {
    document.querySelector(".listcomplete")?.classList.add("over");
  };

  const dragLeave = (e: any) => {
    document.querySelector(".listcomplete")?.classList.remove("over");
  };

  return (
    <div
      onDragOver={(e) => onDragingOver(e)}
      className="card-complete"
      onDrop={(e) => dragDropped(e)}
      onDragEnter={(e) => dragEnter(e)}
      onDragLeave={(e) => dragLeave(e)}
    >
      <h5 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5 text-lg mb-2">
        Complete
      </h5>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
          <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/24/null/external-doings-training-and-coaching-wanicon-lineal-wanicon.png" alt="" />
          <p style={{ marginLeft: '10px', fontWeight: 'bold' }}>{dataTodosFilter.length}</p>
        </div>
      <div className="listcomplete">
        {dataTodosFilter?.map((todo: any, index: number) => (
          <div className="item-todo" key={index}>
            <label>{todo.content}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteList;

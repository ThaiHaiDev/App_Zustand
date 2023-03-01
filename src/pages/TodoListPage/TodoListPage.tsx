import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import CompleteList from "../../components/CompleteList/CompleteList";
import Header from "../../components/Header/Header";
import InProgressList from "../../components/InProgressList/InProgressList";
import TodoList from "../../components/TodoList/TodoList";

const TodoListPage = () => {
  return (
    <div>
      <Header />
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5">
        To do List
      </h1>
      <AddTodoForm />
      <div className="grid grid-rows-4 grid-flow-col gap-4 mx-10">
        <div className="row-span-4">
          <TodoList />
        </div>
        <div className="row-span-4"> 
          <InProgressList />
        </div>
        <div className="row-span-4">
          <CompleteList />
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;

import { MdDone, MdDelete } from 'react-icons/md';
import './TodoList.css';
//let mystyle =[
//""
//]

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({
  descripcion,
  id,
  completed,
  doneHandler,
  deleteHandler,
}) {
  const onClick = (e) => {
    doneHandler(id);
  };
  const onDeleteClick = (e) => {
    deleteHandler(id);
  };

  const myClass = completed ? 'striked text-white m-1' : 'text-white m-1 ';
  return (
    <li className="txt-sec w-2/5 my-1 rounded mx-1 mt-4">
      <section className="inline-flex w-full justify-between bg-gray-800">
        <span className={myClass}>{descripcion}</span>
        <section className="inline-flex my-1 ">
          <MdDone
            onClick={onClick}
            className=" border mr-2 bg-blue-500 rounded-md"
            size="30"
          ></MdDone>

          <MdDelete
            onClick={onDeleteClick}
            className="border mr-2 bg-red-600 rounded-md"
            size="30"
          ></MdDelete>
        </section>
      </section>
    </li>
  );
}

function TodoList({ todos, doneHandler, deleteHandler }) {
  const todoItems = todos.map((o) => {
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    );
  });
  return (
    <section className="TodoList">
      <ul className="caja w-full  flex flex-wrap justify-around">
        {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;

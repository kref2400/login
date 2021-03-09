import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';
import './TodoList.css';
function NewTodo({ onChange, value, onAddNew }) {
  return (
    <section className="TodoAddNew">
      <form className=" caja flex justify-center items-start px-4   txt-sec bg-gray-800 my-1 rounded mx-1">
        <FormField
          type="text"
          id="txtNTodo"
          name="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nuevo Todo"
          /*"flex-colum p-4 w-full bg-white outline-black " */
          className="txt"
          placeholder="Escribe aquí"
          labelClassName="flex"
          onKeyUp={(e) => {
            if (e.keyCode == 13) {
              onAddNew(e);
            }
          }}
        />
        <MdAdd
          size="30"
          onClick={onAddNew}
          className="border bg-green-500  mt-8 ml-2 rounded-md"
        ></MdAdd>
      </form>
    </section>
  );
}

export default NewTodo;

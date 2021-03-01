import './FormField.css';
function FormAction({ caption, onClick }) {
  return (
    <button onClick={onClick} className="buttom">
      {caption}
    </button>
  );
}

export default FormAction;

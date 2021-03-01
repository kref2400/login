import './FormField.css';
function FormField({
  type,
  id,
  fname,
  onChange,
  caption,
  value,
  error,
  ...attr
}) {
  return (
    <section>
      <input
        type={type}
        id={id}
        name={fname}
        onChange={onChange}
        value={value}
        {...attr}
      />
      {error && true ? <section>{error}</section> : null}
    </section>
  );
}

export default FormField;

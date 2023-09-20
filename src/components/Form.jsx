/* eslint-disable react/prop-types */

const Form = ({ Link, newTaskObj }) => {
  //functions
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    newTaskObj(ev.target.id, ev.target.value);
  };

  /* Agregar input textarea para descripción, select para seleccionar categoría: urgente, moderado, no urgente, input para indicar deadline de la tarea*/
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form__title">Nueva tarea</h2>
        <input
          className="form__input"
          type="text"
          placeholder="Nombre de la tarea"
          name="taskName"
          id="taskName"
          onInput={handleInput}
        />
        <input type="submit" value="Guardar" className="form__buttonSave" />
      </form>
      <Link to="/TasksList">Ir a la lista de tareas</Link>
      <Link to="/">Ir al inicio</Link>
    </>
  );
};
export default Form;

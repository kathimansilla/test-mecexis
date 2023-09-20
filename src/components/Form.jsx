/* eslint-disable react/prop-types */

const Form = ({ Link, newTaskObj }) => {


    const handleInput = (ev) => {
        newTaskObj(ev.target.id, ev.target.value);
    }

  return (
    <>
      <form className="form">
        <h2 className="form__title">Nueva tarea</h2>
        <input
          className="form__input"
          type="text"
          placeholder="Nombre de la tarea"
          name="taskName"
          id="taskName"
          
          onInput={handleInput}
        />
      </form>
      <Link to="/TasksList">Ir a la lista de tareas</Link>
      <Link to="/">Ir al inicio</Link>
    </>
  );
};
export default Form;

/* eslint-disable react/prop-types */

const Form = ({ Link, data }) => {


    const handleInput = (ev) => {
        console.log('handleinput');
    }

  return (
    <>
      <form className="form">
        <h2 className="form__title">Nueva tarea</h2>
        <input
          className="form__input"
          type="text"
          placeholder="Tarea"
          name="tasktitle"
          id="tasktitle"
          value={data.tasktitle}
          onInput={handleInput}
        />
      </form>
      <Link to="/TasksList">Ir a la lista de tareas</Link>
      <Link to="/">Ir al inicio</Link>
    </>
  );
};
export default Form;

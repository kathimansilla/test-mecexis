/* eslint-disable react/prop-types */

const TaskList = ({ Link, tasksObj }) => {

//functions


/*Falta generar un id porque el user puede poner dos tareas con el mismo nombre y daría error*/
  const taskList = tasksObj.map((task) => (
    <li key={task.id} className='taskList__item'>
      <p>{task.taskName}</p>
      <button onClick={handleDeleteTask} id={task.id}>Elimnar</button>
      <button>Editar</button>
    </li>
  ));

  console.log(taskList);

  return (
    <section>
      <ul className='taskList'>{taskList}</ul>
      <Link to="/">Ir al inicio</Link>
    </section>
  );
};

export default TaskList;

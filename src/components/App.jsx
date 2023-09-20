import { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import Landing from './Landing';
import Form from './Form';
import TaskList from './TaskList';
import Footer from './Footer';
import '../styles/App.css';
import { Route, Routes, Link } from 'react-router-dom';
import logoMecexis from '../assets/images/mecexis-logo.svg';



function App() {
  // state variables
  const [tasksObj, setTasksObj] = useState([]);


  const newTaskObj = (keyName, value) => {
    setTasksObj(
      [{[keyName]: value}]
    );
  };

  //esta función va a fallar porque no hay taskId aún
  const deleteTask = (taskId) => {
    console.log(taskId);
    const cleanTaskObj = tasksObj.filter(task => task.taskId !== taskId);
    setTasksObj(cleanTaskObj);
    console.log(cleanTaskObj);
  }

  return (
    <>
      <Header logoMecexis={logoMecexis} />
      <main>
        <Routes>
        <Route path='/' element={<Landing Link={Link} />} />
        <Route path='/NewTask' element={<Form Link={Link} newTaskObj={newTaskObj} />} />
        <Route path='/TasksList' element={<TaskList Link={Link} tasksObj={tasksObj} deleteTask={deleteTask} />} />
        </Routes>
      </main>
      <Footer logoMecexis={logoMecexis} />
    </>
  );
}

export default App;

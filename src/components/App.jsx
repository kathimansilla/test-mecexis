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

  return (
    <>
      <Header logoMecexis={logoMecexis} />
      <main>
        <Routes>
        <Route path='/' element={<Landing Link={Link} />} />
        <Route path='/NewTask' element={<Form Link={Link} newTaskObj={newTaskObj} />} />
        <Route path='/TasksList' element={<TaskList Link={Link} tasksObj={tasksObj} />} />
        </Routes>
      </main>
      <Footer logoMecexis={logoMecexis} />
    </>
  );
}

export default App;

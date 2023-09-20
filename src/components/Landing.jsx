/* eslint-disable react/prop-types */


const Landing = ({Link}) => {

    return (
        <section className='landing'>
        <h1 className='landing__title'>Gestor de tareas</h1>
            <img className='landing__logo' src="https://www.mecexis.com/static/img/mecexis-logo.svg" alt="Mecexis logo" />
            <Link to='/NewTask' className='landing__link'>Añadir tarea</Link>
            <Link to='/TasksList' className='landing__link--2'>Lista de tareas</Link>
        </section>
    );
};

export default Landing;
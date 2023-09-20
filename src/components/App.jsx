import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/App.css';
import logoMecexis from '../assets/images/mecexis-logo.svg';


function App() {

  return (
    <>
      <Header logoMecexis={logoMecexis} />
      <Main />
      <Footer logoMecexis={logoMecexis} />
    </>
  )
}

export default App

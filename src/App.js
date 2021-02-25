import Form from './components/Form'
import Header from './components/Header'
import './styles/global.scss'

function App() {
  return (
    <>
      <Header/>

      <div className="wrapper">
        <Form/>
      </div>
      
      <footer>
        <p>{`Copyright ©${new Date().getFullYear()} WS Solutions | All rights reserved`}</p>
      </footer>
    
    </>
  );
}

export default App;

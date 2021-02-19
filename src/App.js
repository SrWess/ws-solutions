import Form from './components/Form'
import Header from './components/Header'
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="wrapper">
        <Form/>
      </div>
      
    </div>
  );
}

export default App;

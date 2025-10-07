import logo from './images/logo.svg';
import './App.css';
import Titulox from './components/titulox'

function App() {
  const styles = {
    parrafo : 'p-20 text-black' ,
  }
  return (
     <div className="App">

    <Titulox/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.parrafo}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   
  );
}

export default App;

import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="App-header relative">
        <Nav />

      </header>
      <main className="flex-grow">
      </main>
      <Footer />
    </div>

  );
}

export default App;

import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Button from './components/ButtonLinkComponent'

function App() {
  const styles = {

    containerHero: 'bg-[url("/header-img.png")] bg-cover bg-center w-full min-h-[100vh] pt-67 lg:pt-70 bg-black/60 bg-blend-multiply text-white flex items-center p-8',

    boxHeaderHero: 'max-width  items-start flex flex-col  w-full h-full gap-[20px]',
    headerHero: 'font-black text-[6rem]',
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative">
        <Nav />
        <div className={styles.containerHero}>
          <div className={styles.boxHeaderHero}>
            <h1 className={styles.headerHero}>
              Todo <span className='text-indigo-500'>Gamer</span><br />
              En un solo lugar
            </h1>
            <Button />
          </div>
        </div>
      </header>
      <main className="flex-grow">
      </main>
      <Footer />
    </div>

  );
}

export default App;

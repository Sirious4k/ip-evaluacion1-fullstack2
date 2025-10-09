import './index.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/ButtonLinkComponent.jsx'

function App() {
  const styles = {

    containerHero: 'bg-[url("/header-img.png")] bg-cover bg-center w-full min-h-[100vh] pt-67 lg:pt-70 bg-black/303 bg-blend-multiply text-white flex items-center p-8',

    //hero index
    boxHeaderHero: 'max-width  items-start flex flex-col  w-full h-full gap-[20px]',
    headerHero: 'font-black text-[6rem]',

    //main content
    // section one
    containerSectionOneIndex: 'flex flex-col max-width ',
    headerSectionOneIndex: 'section-titles text-center mb-20 text-white',

    //box section one
    boxSectionOne: 'grid grid-cols-2 h-full w-full',
    leftBox: 'border-solid border-1 rounded-lg border-[--bg-primary-color] p-8 min-h-[300px] tranform transition cursor-pointer scale-100 hover:scale-105 ease-in-out transform duration-300'
  }
  return (
    <>
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
        <main className="flex-grow bg-linear-to-br from-[var(--bg-primary-color)] via-[var(--bg-primary-color)] to-[#080844] py-[100px] px-8">
          <section className={styles.containerSectionOneIndex}>
            <h1 className={styles.headerSectionOneIndex}>
              Transparencia, fiabilidad, rapidez, economico
            </h1>
            <div className={styles.boxSectionOne}>
              <div className={styles.leftBox}>
                <h2>
                  hola
                </h2>
                <p>
                  lorem
                  lorem
                  lorem
                  lorem
                  lorem
                  lorem
                  lorem
                </p>
              </div>
              <div>
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>

  )
}

export default App;

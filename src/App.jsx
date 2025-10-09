import './index.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/ButtonLinkComponent.jsx'
import BoxComponent from './components/BoxComponent.jsx'

function App() {
  const styles = {

    containerHero: 'bg-[url("/header-img.png")] bg-cover bg-center w-full min-h-[100vh] pt-67 lg:pt-70 bg-black/50 bg-blend-multiply text-white flex items-center p-8',

    //hero index
    boxHeaderHero: 'max-width  items-start flex flex-col  w-full h-full gap-[20px]',
    h1Hero: 'font-black text-[6rem]',

    //main content
    // section one
    containerSectionOneIndex: 'flex flex-col max-width ',
    headerSectionOneIndex: 'section-titles text-center mb-20 text-white',

    // container box
    containerBox: ' flex flex-col lg:grid lg:grid-cols-2  w-full gap-[20px] ',
    rightBoxes: 'flex flex-col lg:grid lg:grid-rows-2 gap-[20px]',


  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative">
        <Nav />
        <div className={styles.containerHero}>
          <div className={styles.boxHeaderHero}>
            <h1 className={styles.h1Hero}>
              Todo <span className='text-indigo-500'>Gamer</span><br />
              En un solo lugar
            </h1>

            {/* Falta añadir link */}
            <Button href="http">Catalogo</Button>
          </div>
        </div>
      </header>
      <main className="flex-grow bg-linear-to-br from-[#00001f] via-[#00001f] to-[#080844] py-[100px] px-8">
        <section className={styles.containerSectionOneIndex}>
          <h1 className={styles.headerSectionOneIndex}>
            Compra y Vende con Seguridad
          </h1>
          <div className={styles.containerBox}>
            <BoxComponent
              title='Transparencia'
              content='Muestra fotos reales y especificaciones exactas de cada periférico.'
            />
            <div className={styles.rightBoxes}>
              <BoxComponent
                title='Fiabilidad'
                content='Vende y compra con seguridad gracias a nuestra comunidad verificada.'
              />
              <BoxComponent
                title='Seguridad'
                content='Pagos y envíos protegidos para que no tengas sorpresas.'
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  )
}

export default App;

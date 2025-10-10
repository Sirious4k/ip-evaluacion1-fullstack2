import '../index.css'
import Button from '../components/ButtonLinkComponent.jsx'
import BoxComponent from '../components/BoxComponent.jsx'

import { computador1, computador2, computador3 } from '../assets/images';


function Index() {
    const styles = {
        containerHero: 'flex items-center w-full min-h-[100vh] pt-67 lg:pt-70 p-8 bg-[url("/header-img.png")] bg-cover bg-center bg-black/50 bg-blend-multiply text-white',

        //hero index
        boxHeaderHero: 'flex flex-col items-start w-full h-full max-width gap-[20px]',
        h1Hero: 'font-black text-[6rem]',

        //main content
        headerSectionOneIndex: 'section-titles text-white',
        containerSectionOne: 'flex flex-col max-width pb-[150px]',
        containerSectionTwo: 'flex flex-col max-width pb-[100px] md:pb-[50px]',

        // section one
        containerBox: 'flex flex-col lg:grid lg:grid-cols-2 w-full gap-[20px]',
        rightBoxes: 'flex flex-col lg:grid lg:grid-rows-2 gap-[20px]',

        // section two
        containerBoxItems: 'flex w-full gap-10 overflow-x-auto overflow-y-hidden min-h-[200px] md:min-h-[150px] max-h-[300px] justify-between scrollbar-thin',
        boxItemSectionTwo: 'flex flex-col max-w-[250px] flex-shrink-0 pb-5 gap-5',
        containerImage: 'max-w-[250px] max-h-[200px] rounded-lg overflow-hidden',
        h1Items: 'text-5xl text-white truncate tracking-wider',
        h2Items: 'text-4xl text-amber-300'
    }

    return (

        <div className="container-body-normal">
            <header className="relative">

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
            <main className="main-style">
                <section className={styles.containerSectionOne}>
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
                <section className={styles.containerSectionTwo}>
                    <div className='w-full text-end mb-10'>
                        <a href="" className='text-white text-end  text-2xl lg:text-3xl hover:text-[var(--hover)] transition ease-in-out duration-300 w-auto'>Ver mas </a>
                    </div>
                    <div className={styles.containerBoxItems}>
                        <div className={styles.boxItemSectionTwo}>
                            <div className={styles.containerImage}>
                                <img src={computador1} alt="" className='size-items' />
                            </div>
                            <h1 className={styles.h1Items}>Radeon 5700 - Nvidia 5090</h1>
                            <h2 className={styles.h2Items}>1.200.000</h2>
                        </div>
                        <div className={styles.boxItemSectionTwo}>
                            <div className={styles.containerImage}>
                                <img src={computador2} alt="" className='size-items' />
                            </div>
                            <h1 className={styles.h1Items}>Radeon 5700 - Nvidia 5090</h1>
                            <h2 className={styles.h2Items}>$1.200.000</h2>
                        </div>
                        <div className={styles.boxItemSectionTwo}>
                            <div className={styles.containerImage}>
                                <img src={computador3} alt="" className='size-items' />
                            </div>
                            <h1 className={styles.h1Items}>Radeon 5700 - Nvidia 5090</h1>
                            <h2 className={styles.h2Items}>$1.200.000</h2>
                        </div>
                        <div className={styles.boxItemSectionTwo}>
                            <div className={styles.containerImage}>
                                <img src={computador1} alt="" className='size-items' />
                            </div>
                            <h1 className={styles.h1Items}>Radeon 5700 - Nvidia 5090</h1>
                            <h2 className={styles.h2Items}>$1.200.000</h2>
                        </div>
                        <div className={styles.boxItemSectionTwo}>
                            <div className={styles.containerImage}>
                                <img src={computador1} alt="" className='size-items' />
                            </div>
                            <h1 className={styles.h1Items}>Radeon 5700 - Nvidia 5090</h1>
                            <h2 className={styles.h2Items}>$1.200.000</h2>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Index;

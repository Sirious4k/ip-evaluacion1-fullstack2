import Button from '../components/ButtonLinkComponent.jsx'
import BoxComponent from '../components/BoxComponent.jsx'
import ItemCard from '../components/ItemsCards.jsx';
import { computador1, computador2, computador3 } from '../assets/images';

function Index() {

    const heroStyles = {
        container: 'flex items-center w-full min-h-[100vh] pt-67 lg:pt-70 p-8 bg-[url("/header-img.png")] bg-cover bg-center bg-black/50 bg-blend-multiply text-white',
        boxHeader: 'flex flex-col items-start w-full h-full max-width gap-[20px]',
        h1: 'font-black text-[6rem]'
    }


    const sectionOneStyles = {
        container: 'flex flex-col max-width pb-[150px]',
        header: 'section-titles text-white',
        containerBox: 'flex flex-col lg:grid lg:grid-cols-2 w-full gap-[20px]',
        rightBoxes: 'flex flex-col lg:grid lg:grid-rows-2 gap-[20px]'
    }

    const sectionTwoStyles = {
        container: 'flex flex-col max-width pb-[100px] md:pb-[50px]',
        seeMore: 'w-full text-end mb-10',
        link: 'text-white text-end text-2xl lg:text-3xl hover:text-[var(--hover)] transition ease-in-out duration-300 w-auto',
        containerBoxItems: 'flex w-full gap-10 overflow-x-auto min-h-[200px] md:min-h-[150px] max-h-[300px] justify-between scrollbar-thin'
    }

    return (
        <div className="container-body-normal">
            <header className="relative">
                <div className={heroStyles.container}>
                    <div className={heroStyles.boxHeader}>
                        <h1 className={heroStyles.h1}>
                            Todo <span className='text-indigo-500'>Gamer</span><br />
                            En un solo lugar
                        </h1>
                        <Button href="http">Catalogo</Button>
                    </div>
                </div>
            </header>

            <main className="main-style !mt-0">

                <section className={sectionOneStyles.container}>
                    <h1 className={sectionOneStyles.header}>
                        Compra y Vende con Seguridad
                    </h1>
                    <div className={sectionOneStyles.containerBox}>
                        <BoxComponent
                            title='Transparencia'
                            content='Muestra fotos reales y especificaciones exactas de cada periférico.'
                        />
                        <div className={sectionOneStyles.rightBoxes}>
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


                <section className={sectionTwoStyles.container}>
                    <div className={sectionTwoStyles.seeMore}>
                        <a href="" className={sectionTwoStyles.link}>Ver mas</a>
                    </div>
                    <div className={sectionTwoStyles.containerBoxItems}>
                        <ItemCard image={computador1} title='Radeon 5700 - Nvidia 5090' price='$1.200.000' />
                        <ItemCard image={computador2} title='Radeon 5700 - Nvidia 5090' price='$1.200.000' />
                        <ItemCard image={computador3} title='Radeon 5700 - Nvidia 5090' price='$1.200.000' />
                        <ItemCard image={computador1} title='Radeon 5700 - Nvidia 5090' price='$1.200.000' />
                        <ItemCard image={computador1} title='Radeon 5700 - Nvidia 5090' price='$1.200.000' />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Index;

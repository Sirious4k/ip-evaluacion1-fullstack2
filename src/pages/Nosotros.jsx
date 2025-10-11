function Nosotros() {

    const styles = {
        containerNosotros: 'flex flex-col max-width',

        boxContentNosotros: 'flex flex-col w-full h-auto p-[50px] gap-[20px] bg-[var(--bg-cards)] ',

        formatText: 'format-text-p !text-left'
    }

    return (
        <div className='container-estatico '>
            <main
                className='main-style !py-20 items-center flex '>
                <section className={styles.containerNosotros}>
                    <header >
                        <h1 className='section-titles'>Nosotros</h1>
                    </header>
                    <div className={styles.boxContentNosotros}>
                        <div>
                            <h2 className='format-text-h2'>Bienvenido a BarGaming</h2>
                            <p className={styles.formatText}>
                                Comunidad creada para entregar solucion confiable para la
                                comunidad gamer en Chile Nació de la pasión y las necesidades
                                reales de nuestra comunidad, escuchando lo que de verdad buscan
                                los usuarios para tener una experiencia diferente y más cercana.
                            </p>
                        </div>
                        <div>
                            <h2 className='format-text-h2'>Nuestra Historia</h2>
                            <p className={styles.formatText}>
                                Todo comenzó cuando nos enfrentamos a la problematica de armar
                                un PC, encontrar precios justos, conectar con gente con los
                                mismos intereses. La frustración de no encontrar un lugar
                                confiable dio paso a la idea: crear un espacio justo,
                                transparente y pensado para la comunidad.
                            </p>
                        </div>
                        <div>
                            <h2 className='format-text-h2'>Nuestra Misión</h2>
                            <p className={styles.formatText}>
                                Transparencia y confianza Creemos que la base de cualquier
                                comunidad es la honestidad. Cada acción que tomamos está pensada
                                en mantener la confianza de nuestros usuarios. Pasión y
                                experiencia Amamos lo que hacemos. Ponemos nuestra experiencia y
                                energía al servicio de la comunidad para crecer juntos.
                                Protección y seguridad Sabemos lo importante que es sentirse
                                seguro.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Nosotros

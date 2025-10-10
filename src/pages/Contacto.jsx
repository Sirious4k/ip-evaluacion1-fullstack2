import '../index.css'
import { useEffect } from 'react';
import { initForm } from '../utils/form-validation';

function Contacto() {

    useEffect(() => {
        initForm(); // Se ejecuta después de que el DOM está renderizado
    }, []);

    const styles = {
        containerContacto: 'flex flex-col max-width',
        boxContentContacto: 'flex flex-col w-full h-auto p-[50px] gap-[20px] bg-[var(--bg-cards)] ',
        formBox: 'flex flex-col lg:grid lg:grid-cols-2 w-full h-full gap-[20px]',

        formatText: 'format-text-p !text-left',
        formatTextH2: 'format-text-h2 !mb-0',
        leftSide: 'flex flex-col w-full h-full gap-[20px]',
        rightSide: 'flex flex-col w-full  ',

        inputPhone: 'flex items-center gap-[20px]',
        textArea: 'h-full bg-inherit border border-[var(--hover)]/30 transition-border duration-300 ease-in-out outline-hidden resize-none p-[20px] format-text-p !not-italic !text-left focus:border-[var(--hover)]/90 scrollbar-thin',

        // BUtton
        boxButton: 'flex w-full col-2 justify-end',
        submitButton: 'w-full md:w-[200px] py-[1rem] px-[0.5rem] text-center font-black text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant-hover)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)]  '
    }

    return (
        <div className='container-estatico '>
            <main className='main-style !py-20 items-center flex '>
                <section className={styles.containerContacto}>
                    <header className={styles.header}>
                        <h1 className='section-titles'>¿Problemas?</h1>
                    </header>
                    <div className={styles.boxContentContacto}>
                        <form action="" id='contactForm' className={styles.formBox}>
                            <div className={styles.leftSide}>

                                {/* Nombre */}
                                <label htmlFor="nombre" className={styles.formatTextH2}>
                                    Nombre:
                                    <span className='error' id='error-nombre'>

                                    </span>
                                </label>
                                <input type="text" id='nombre' />

                                {/* Telefono */}
                                <label htmlFor="telefono" className={styles.formatTextH2}>
                                    Telefono:
                                    <span className='error' id='error-telefono'>

                                    </span>
                                </label>
                                <div className={styles.inputPhone}>
                                    <span className='format-text-p'>+56</span>
                                    <input type="tel" id='telefono' />
                                </div>

                                {/* Correo */}
                                <label htmlFor="correo" className={styles.formatTextH2}>
                                    Correo:
                                    <span className='error' id='error-correo'></span>
                                </label>
                                <input type="email" id='correo' />

                            </div>

                            <div className={styles.rightSide}>
                                <label htmlFor="mensaje" className='format-text-h2 '>
                                    Detalla tu problema:
                                    <span className='error' id='error-mensaje'></span>
                                </label>
                                <textarea id="mensaje" rows={5} maxLength={500} className={styles.textArea}></textarea>
                            </div>

                            <div className={styles.boxButton}>
                                <button type='submit' className={styles.submitButton}>
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contacto

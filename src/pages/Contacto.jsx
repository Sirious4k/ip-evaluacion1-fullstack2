import { useEffect } from 'react';
import { initForm } from '../utils/contacto-validation';

function Contacto() {
    useEffect(() => {
        initForm();
    }, []);

    const containerStyles = {
        main: 'main-style !py-20 items-center flex',
        section: 'flex flex-col max-width',
        boxContent: 'flex flex-col w-full h-auto p-[50px] gap-[20px] bg-[var(--bg-cards)]/30'
    }

    const formStyles = {
        formBox: 'flex flex-col lg:grid lg:grid-cols-2 w-full h-full gap-[20px]',

        leftSide: 'flex flex-col w-full h-full gap-[20px]',
        rightSide: 'flex flex-col w-full',

        input: 'text-white',

        inputPhone: 'flex items-center gap-[20px]',
        textArea: 'h-full bg-inherit border border-[var(--hover)]/20 transition-border duration-300 ease-in-out outline-hidden resize-none p-[20px] format-text-p !not-italic !text-left focus:border-[var(--hover)]/90 scrollbar-thin',
        formatTextH2: 'format-text-h2 !mb-0',
        boxButton: 'flex w-full col-2 justify-end',
        submitButton: 'w-full md:w-[200px] py-[1rem] px-[0.5rem] text-center text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] hover:text-[var(--white-variant-hover)]'
    }

    return (
        <div className='container-estatico'>
            <main className={containerStyles.main}>
                <section className={containerStyles.section}>
                    <header >
                        <h1 className='section-titles'>¿Problemas?</h1>
                    </header>
                    <div className={containerStyles.boxContent}>
                        <form action="" id='contactForm' className={formStyles.formBox}>
                            <div className={formStyles.leftSide}>
                                <label
                                    htmlFor="nombre-contacto"
                                    className={formStyles.formatTextH2}>Nombre:
                                    <span
                                        className='error'
                                        id='error-nombre' />
                                    <span />
                                </label>
                                <input
                                    type="text"
                                    id='nombre-contacto'
                                    className={formStyles.input} />

                                <label
                                    htmlFor="telefono-contacto"
                                    className={formStyles.formatTextH2}>Teléfono:
                                    <span
                                        className='error'
                                        id='error-telefono' />
                                    <span />
                                </label>
                                <div className={formStyles.inputPhone}>
                                    <span className='format-text-p'>+56</span>
                                    <input
                                        type="tel"
                                        id='telefono-contacto'
                                        className={formStyles.input} />
                                </div>

                                <label
                                    htmlFor="correo-contacto"
                                    className={formStyles.formatTextH2}>Correo:
                                    <span
                                        className='error'
                                        id='error-correo' />
                                    <span />
                                </label>
                                <input
                                    type="email"
                                    id='correo-contacto'
                                    className={formStyles.input} />
                            </div>

                            <div className={formStyles.rightSide}>
                                <label
                                    htmlFor="mensaje-contacto"
                                    className='format-text-h2'>Detalla tu problema:
                                    <span
                                        className='error'
                                        id='error-mensaje' />
                                    <span />
                                </label>
                                <textarea
                                    id="mensaje-contacto"
                                    rows={5}
                                    maxLength={500}
                                    className={formStyles.textArea} >
                                </textarea>
                            </div>

                            <div className={formStyles.boxButton}>
                                <button
                                    type='submit'
                                    className={formStyles.submitButton}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </section >
            </main >
        </div >
    )
}

export default Contacto;

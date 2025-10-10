import '../index.css'
import ArrowIcon from '../assets/icons/icon-arrow.svg?react'
import { useEffect } from 'react';
import { initForm } from '../utils/form-validation';
import { Link } from 'react-router-dom'
import LogoComponent from '../components/LogoComponent';

function SignUp() {

    useEffect(() => {
        initForm();
    }, []);

    const styles = {
        mainStyle: 'flex items-center justify-center min-h-[100vh] !mt-0 main-style  bg-linear-to-b  bg-[linear-gradient(to_bottom,_#00001f_50%,_#fefefe_50%)]  ',

        boxSignUp: 'flex flex-col max-h-[600px] lg:max-w-[500px] w-full p-8 bg-[var(--white-variant)] shadow-2xl'
    }

    const formStyles = {
        formBox: 'flex flex-col w-full h-full  gap-[10px]',

        leftSide: 'flex flex-col w-full h-full gap-[10px] ',


        inputPhone: 'flex items-center gap-[20px]',
        input: '!border-[#00001f]/20 focus:!border-[#00001f]/70',

        formatTextH2: 'format-text-h2 !mb-0 !text-black',
        boxButton: 'flex w-full col-2 justify-end',
        submitButton: 'w-full md:w-[200px] py-[1rem] px-[0.5rem] mt-12 text-center text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] hover:text-[var(--white-variant-hover)]'
    }
    return (
        <div className='container-estatico'>
            <main className={styles.mainStyle}>
                <div className={styles.boxSignUp}>
                    <div className='flex justify-between '>
                        <Link to='/' className='flex w-fit items-center gap-[10px] group cursor-pointer mb-12'>
                            <ArrowIcon className='size-20 text-black group-hover:text-[var(--bg-button)] transition ease-in-out duration-300' />
                            <h2 className='format-text-h2 !text-black group-hover:!text-[var(--bg-button)] !mb-0 !font-normal'>
                                Volver
                            </h2>
                        </Link>
                        <LogoComponent />
                    </div>
                    <form action="" id='contactForm' className={formStyles.formBox}>
                        <div className={formStyles.leftSide}>
                            <label
                                htmlFor="nombre"
                                className={formStyles.formatTextH2}>Nombre:
                                <span
                                    className='error'
                                    id='error-nombre' />
                                <span />
                            </label>
                            <input
                                type="text"
                                id='nombre'
                                className={formStyles.input} />

                            <label
                                htmlFor="telefono"
                                className={formStyles.formatTextH2}>Telefono:
                                <span
                                    className='error'
                                    id='error-telefono' />
                                <span />
                            </label>
                            <div className={formStyles.inputPhone}>
                                <span className='format-text-p !text-black/80 '>+56</span>
                                <input
                                    type="tel"
                                    id='telefono'
                                    className={formStyles.input} />
                            </div>

                            <label
                                htmlFor="correo"
                                className={formStyles.formatTextH2}>Correo:
                                <span
                                    className='error'
                                    id='error-correo' />
                                <span />
                            </label>
                            <input
                                type="email"
                                id='correo'
                                className={formStyles.input} />

                            <label htmlFor="contrasena-principal"
                                className={formStyles.formatTextH2}>
                                Contrseña:
                                <span
                                    className='error'
                                    id='error-contrasena-principal'>
                                </span>
                            </label>
                            <input
                                type="password"
                                id="contrasena-principal"
                                className={formStyles.input} />

                            {/* Repeticion contraseña */}
                            <label htmlFor="repite-contrasena"
                                className={formStyles.formatTextH2}>
                                Repita Contraseña:
                                <span
                                    className='error'
                                    id='error-repite-contrasena'>
                                </span>
                            </label>
                            <input
                                type="password"
                                id="repite-contrasena"
                                className={formStyles.input} />
                        </div>



                        <div className={formStyles.boxButton}>
                            <button
                                type='submit'
                                className={formStyles.submitButton}>
                                Registro
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default SignUp;
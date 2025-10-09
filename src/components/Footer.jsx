import '../index.css'
import LogoComponent from './LogoComponent.jsx'
import DiscordIcon from '../assets/icons/logo-discord.svg?react'
import InstagramIcon from '../assets/icons/logo-insta.svg?react'

function Footer() {

    const styles = {
        containerFooter: 'max-width w-full  h-auto grid grid-cols-[repeat(3,1fr)] p-8  text-white',

        // centro
        derechosStyle: 'flex justify-center items-end text-center',
        //derecha
        redesContainer: 'w-full flex justify-end gap-[20px]'
    }
    return (
        < footer className='bg-[var(--bg-primary-color)] min-h-16 md:min-h-20' >
            <div className={styles.containerFooter}>
                <LogoComponent />
                <div className={styles.derechosStyle}>
                    <p className='text-md lg:text-2xl'>2025 Ningun derecho reservado</p>
                </div>
                <div className={styles.redesContainer}>
                    <a href="https://discord.com" target='_blank' rel='noreferrer'>
                        <DiscordIcon
                            alt="icono-discord"
                            className="icon-size"
                        />
                    </a>
                    <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                        <InstagramIcon
                            alt=""
                            className="icon-size"
                        />
                    </a>
                </div>
            </div>
        </ footer>

    )
}

export default Footer;
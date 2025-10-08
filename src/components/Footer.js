import '../index.css'
import LogoComponent from './LogoComponent'
import { ReactComponent as DiscordIcon } from '../assets/icons/logo-discord.svg'
import { ReactComponent as InstagramIcon } from '../assets/icons/logo-insta.svg'

function Footer() {

    const styles = {
        containerFooter: 'max-width w-full  h-auto grid grid-cols-[repeat(3,1fr)] p-[20px] lg:px-0  text-white',

        // centro
        derechosStyle: 'flex justify-center items-end',
        //derecha
        redesContainer: 'w-full flex justify-end gap-[20px]'
    }
    return (
        < footer className='bg-[var(--bg-cards-color)] min-h-16 md:min-h-20' >
            <div className={styles.containerFooter}>
                <LogoComponent />

                <div className={styles.derechosStyle}>
                    <p className='text-2xl'>2025 Ningun derecho reservado</p>
                </div>
                <div className={styles.redesContainer}>
                    <a href="https://discord.com" target='_blank' rel='noreferrer'>
                        <DiscordIcon
                            alt="icono-discord"
                            class="icon-size"
                        />
                    </a>
                    <a href="https://www.instagram.com" target='_blank' rel='noreferrer'>
                        <InstagramIcon
                            alt=""
                            class="icon-size"
                        />
                    </a>
                </div>
            </div>
        </ footer>

    )
}

export default Footer;
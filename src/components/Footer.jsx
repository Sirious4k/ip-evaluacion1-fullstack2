import LogoComponent from './LogoComponent.jsx'
import DiscordIcon from '../assets/icons/logo-discord.svg?react'
import InstagramIcon from '../assets/icons/logo-insta.svg?react'
import { Link } from 'react-router-dom'

function Footer() {
  const styles = {
    containerFooter:
      'grid grid-cols-[repeat(3,1fr)] w-full min-h-[100px] p-8 max-width text-white',
    derechosStyle: 'flex justify-center items-end text-center',
    redesContainer: 'flex w-full justify-end gap-[20px]',
  }

  return (
    <footer className='bg-[var(--bg-primary-color)] min-h-16 md:min-h-20 shrink-0'>
      <div className={styles.containerFooter}>
        <LogoComponent />
        <div className={styles.derechosStyle}>
          <p className='text-md lg:text-2xl'>2025 Ningun derecho reservado</p>
        </div>
        <div className={styles.redesContainer}>
          <a
            href='https://discord.com'
            target='_blank'
            rel='noreferrer'
          >
            <DiscordIcon
              alt='icono-discord'
              className='icon-size'
            />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon
              alt=''
              className='icon-size'
            />
          </a>
          <Link
            to='/panel'
            className='text-2xl'
          >
            Panel
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

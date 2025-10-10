import '../index.css'
import { useEffect } from 'react'
import { initNavDropdown } from '../utils/dropdown'
import LogoComponent from './LogoComponent'
import IconUser from '../assets/icons/icon-nav-user.svg?react'
import { Link } from 'react-router-dom'
import Button from './ButtonLinkComponent'

function Nav() {
  useEffect(() => {
    const cleanup = initNavDropdown()
    return () => cleanup && cleanup()
  }, [])

  const styles = {
    mainNav:
      'fixed w-full min-h-16 md:min-h-20 top-0 p-8 bg-[var(--bg-primary-color)] z-100',

    containerSectionsNav: 'flex flex-col w-full h-full max-width gap-[20px]',

    // Top Nav
    sectionTopNav: 'flex justify-between items-center w-full',
    iconsTopNav: 'flex items-center gap-[20px]',

    // Items Nav
    containerItemsNav: 'flex gap-[20px] text-[1.5rem] lg:text-[2rem]',
    itemsHover:
      'text-white transition-colors duration-300 ease-in-out hover:text-[#00ffea]/90',

    //dropdown
    dropdown:
      'absolute mt-5 bg-[var(--bg-primary-color)] border border-[#00ffea]/50 shadow-lg list-none dropdown hidden',
    dropdownItem: 'px-6 py-2 text-white hover:bg-[#00ffea1a]',
  }

  return (
    <nav className={styles.mainNav}>
      <section className={styles.containerSectionsNav}>
        <div className={styles.sectionTopNav}>
          <LogoComponent />
          <div className={styles.iconsTopNav}>
            {/* // Falta definir enlace  */}
            <Link to='/login'>
              <IconUser className='icon-size hover:!text-[var(--hover)] transition-color ease-in-out duration-300' />
            </Link>
            <Button href='/signup'>Registro</Button >
          </div>
        </div>
        <ul className={styles.containerItemsNav}>
          <li className={styles.itemsHover}>
            <Link to='/'>Inicio</Link>
          </li>

          <li className='relative categoria-item'>
            <p className={styles.itemsHover}>Categoria</p>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>
                <a href='../pages/Computadores.js'>Computadores</a>
              </li>
              <li className={styles.dropdownItem}>
                <a href='../pages/Consolas.js'>Consolas</a>
              </li>
            </ul>
          </li>
          <li className={styles.itemsHover}>
            <Link to='/contacto'>Contacto</Link>
          </li>
          <li className={styles.itemsHover}>
            <Link to='/nosotros'>Nosotros</Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Nav

import '../index.css'
import { useState, useEffect, useRef } from 'react';
import LogoComponent from './LogoComponent'
import IconUser from '../assets/icons/icon-nav-user.svg?react';
import { Link } from 'react-router-dom';


function Nav() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);


  const styles = {
    mainNav: 'fixed w-full min-h-16 md:min-h-20 top-0 p-8 bg-[var(--bg-primary-color)] z-100',

    containerSectionsNav: 'flex flex-col w-full h-full max-width gap-[20px]',

    // Top Nav
    sectionTopNav: 'flex justify-between items-center w-full',
    iconsTopNav: 'flex flex-col gap-[20px]',

    // Items Nav
    containerItemsNav: 'flex gap-[20px] text-[1.5rem] lg:text-[2rem]',
    itemsHover: 'text-white transition-colors duration-300 ease-in-out hover:text-[#00ffea]/90',

    //dropdown
    dropdown: 'absolute mt-5 bg-[var(--bg-primary-color)] border border-[#00ffea]/50 shadow-lg list-none',
    dropdownItem: 'px-6 py-2 text-white hover:bg-[#00ffea1a]'
  }

  return (
    <nav className={styles.mainNav}>
      <section className={styles.containerSectionsNav}>
        <div className={styles.sectionTopNav}>
          <LogoComponent />
          <div className={styles.iconsTopNav}>
            {/* // Falta definir enlace  */}
            <a href='../pages/InicioSecion.js'>
              <IconUser className='icon-size' />
            </a>
          </div>
        </div>
        <ul className={styles.containerItemsNav} >
          <li className={styles.itemsHover}>
            <Link to='/'>Inicio</Link>
          </li>

          <li className='relative' ref={dropdownRef}>
            <p onClick={toggleDropdown} className={styles.itemsHover}>Categoria</p>
            {dropdownOpen && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}><a href='../pages/Computadores.js'>Computadores</a></li>
                <li className={styles.dropdownItem}><a href='../pages/Consolas.js'>Consolas</a></li>
              </ul>
            )}
          </li>
          <li className={styles.itemsHover}>
            <a href='../pages/Contacto.jsx'>Contacto</a>
          </li>
          <li className={styles.itemsHover}>
            <Link to='/nosotros'>Nosotros</Link>
          </li>
        </ul >
      </section >
    </nav >
  );
}

export default Nav;

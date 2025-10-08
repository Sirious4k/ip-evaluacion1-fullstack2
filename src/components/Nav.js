import '../index.css'
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/icon-nav-user.svg'
import LogoComponent from './LogoComponent'

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
    mainNav: 'min-h-16 md:min-h-20 w-full sticky top-0 bg-[var(--bg-cards-color)] p-[20px] lg:px-0',

    containerSectionsNav: 'h-full w-full max-width flex-col flex gap-[20px]',

    // Top Nav
    sectionTopNav: 'flex justify-between items-center w-full',
    iconsTopNav: 'flex flex-col gap-[20px]',

    // Items Nav
    containerItemsNav: 'flex gap-[20px] lg:text-[2rem] text-[1.5rem]',
    itemsHover: 'text-white hover:text-[#00ffea]/90 transition-colors duration-300 ease-in-out',

    //dropdown
    dropdown: 'absolute mt-5 bg-[var(--bg-cards-color)] border border-[#00ffea]/50 shadow-lg list-none  ',
    dropdownItem: 'px-6 py-2 hover:bg-[#00ffea1a] text-white'
  }

  return (
    <nav className={styles.mainNav}>
      <section className={styles.containerSectionsNav}>
        <div className={styles.sectionTopNav}>
          <LogoComponent />
          <div className={styles.iconsTopNav}>
            {/* // Falta definir enlace  */}
            <a href='../pages/InicioSecion.js'>
              <UserIcon className='icon-size' />
            </a>
          </div>
        </div>
        <ul className={styles.containerItemsNav} >
          <li className={styles.itemsHover}>
            <a href='index.html'>Inicio</a>
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
            <a href='../pages/Contacto.js'>Contacto</a>
          </li>
          <li className={styles.itemsHover}>
            <a href='../pages/Nosotros.js'>Nosotros</a>
          </li>
        </ul >

      </section >
    </nav >
  );
}

export default Nav;

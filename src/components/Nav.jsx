import { useEffect } from 'react'
import { useState } from 'react'
import { initNavDropdown } from '../utils/dropdown'
import LogoComponent from './LogoComponent'
import IconUser from '../assets/icons/icon-nav-user.svg?react'
import { Link } from 'react-router-dom'
import Button from './ButtonLinkComponent'
import IconCart from '../assets/icons/icon-cart.svg?react'
import { products as allProducts } from '../utils/products'

function Nav() {
  const [items, setItems] = useState([])

  // Inicializa el dropdown del menú
  useEffect(() => {
    const cleanup = initNavDropdown()
    return () => cleanup && cleanup()
  }, [])

  // 🔁 Función que actualiza el estado leyendo el localStorage
  const updateCart = () => {
    const stored = JSON.parse(localStorage.getItem('cart')) || []
    setItems(stored)
  }

  // 📡 Escucha los eventos globales
  useEffect(() => {
    updateCart() // leer al montar

    // 👂 escuchar eventos personalizados y cambios de storage
    window.addEventListener('cartUpdated', updateCart)
    window.addEventListener('storage', updateCart)

    return () => {
      window.removeEventListener('cartUpdated', updateCart)
      window.removeEventListener('storage', updateCart)
    }
  }, [])

  const categories = Array.from(new Set(allProducts.map(p => p.category)))

  const styles = {
    mainNav:
      'fixed w-full min-h-16 md:min-h-20 top-0 p-8 bg-[var(--bg-primary-color)] z-100',

    containerSectionsNav: 'flex flex-col w-full h-full max-width gap-[20px]',

    // Top Nav
    sectionTopNav: 'flex justify-between items-center w-full',
    iconsTopNav: 'flex items-center gap-[20px]',

    // Items Nav
    containerItemsNav:
      'flex gap-[20px] text-[1.5rem] lg:text-[2rem] items-center',
    itemsHover:
      'text-white transition-colors duration-300 ease-in-out hover:text-[var(--hover-alt)]/90',

    //dropdown
    dropdown:
      'absolute mt-5 bg-[var(--bg-primary-color)] border border-[#00ffea]/50 shadow-lg list-none dropdown hidden',
    dropdownItem: 'min-w-max px-6 py-2 text-white hover:bg-[#00ffea1a]',
  }

  return (
    <nav className={styles.mainNav}>
      <section className={styles.containerSectionsNav}>
        <div className={styles.sectionTopNav}>
          <LogoComponent />
          <div className={styles.iconsTopNav}>
            <Link to='/login'>
              <IconUser className='icon-size hover:!text-[var(--hover)] transition-color ease-in-out duration-300' />
            </Link>
            <Button href='/signup'>Registro</Button>
          </div>
        </div>
        <ul className={styles.containerItemsNav}>
          <li className={styles.itemsHover}>
            <Link to='/'>Inicio</Link>
          </li>

          <li className='relative categoria-item'>
            <p className={styles.itemsHover}>Categorías</p>
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>
                <Link to='/categoria'>Todas las categorias</Link>
              </li>
              {categories.map(cat => (
                <li
                  key={cat}
                  className={styles.dropdownItem}
                >
                  <Link to={`/categoria?cat=${encodeURIComponent(cat)}`}>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.itemsHover}>
            <Link to='/contacto'>Contacto</Link>
          </li>
          <li className={styles.itemsHover}>
            <Link to='/nosotros'>Nosotros</Link>
          </li>
          <li className='ml-auto'>
            <Link
              to='/carrito'
              className='group text-white hover:text-[var(--hover-alt)] transition-colors duration-300 ease-in-out'
            >
              <div className='flex items-center'>
                <IconCart className='icon-size !w-12 !h-12 transition-colors duration-300 ease-in-out group-hover:!text-[var(--hover-alt)]' />
                <span>({items.length})</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Nav

import { useEffect, useState } from 'react'
import { initForm } from '../utils/pago-validation.js'
import CloseIcon from '../assets/icons/icon-close.svg?react'

function Carrito() {
  const [cart, setCart] = useState([])
  const cartkey = 'cart'

  const updateCart = () => {
    const stored = JSON.parse(localStorage.getItem('cart')) || []
    setCart(stored)
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(cartkey) || '[]')
    const realItems = stored.filter(item => item && item.price)
    if (realItems.length !== stored.length) {
      localStorage.setItem(cartkey, JSON.stringify(realItems))
    }
    setCart(realItems)
    initForm()
  }, [])

  useEffect(() => {
    updateCart()

    window.addEventListener('cartUpdated', updateCart)
    window.addEventListener('storage', updateCart)

    return () => {
      window.removeEventListener('cartUpdated', updateCart)
      window.removeEventListener('storage', updateCart)
    }
  }, [])

  const eliminarDelCarrito = id => {
    const nuevoCarrito = [...cart]
    const index = nuevoCarrito.findIndex(item => item.id === id)
    if (index !== -1) nuevoCarrito.splice(index, 1)
    setCart(nuevoCarrito)
    localStorage.setItem(cartkey, JSON.stringify(nuevoCarrito))
    setTimeout(() => {
      window.dispatchEvent(new Event('cartUpdated'))
    }, 50)
  }

  const formStyles = {
    formBox: 'flex flex-col w-full md:max-w-[500px] h-full  gap-[10px]',
    leftSide: 'flex flex-col w-full h-full gap-[10px] ',
    inputPhone: 'flex items-center gap-[20px]',
    input: '!text-[var(--white-variant)] bg-inherit',
    formatTextH2: 'format-text-h2 !mb-0',
    boxButton: 'flex w-full col-2 justify-end',
    submitButton:
      'w-full md:w-[200px] py-[1rem] px-[0.5rem] mt-12 text-center text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] hover:text-[var(--white-variant-hover)]',
  }
  return (
    <div className='container-body-normal gradient-main'>
      <main className='main-style !py-20 '>
        <section className='max-width flex gap-[20px]'>
          <div className='flex flex-col w-full gap-[10px]'>
            <h1 className='format-text-h2 tracking-wider !mb-0'>Tu carrito</h1>
            {cart.length === 0 ? (
              <p className='format-text-p !text-left'>
                Aún no has agregado nada{' '}
              </p>
            ) : (
              <ul className='flex flex-col gap-5 w-full'>
                {cart.map((item, i) => (
                  <li
                    key={`${item.id}-${i}`}
                    className='flex items-center justify-between bg-[var(--bg-secondary)]/40 p-4 rounded-lg !cursor-default max-h-[120px] w-full'
                  >
                    <div className='flex items-center gap-5 '>
                      <div className='max-w-[100px] h-[100px] overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='w-full h-auto object-cover object-center rounded-md'
                        />
                      </div>
                      <div>
                        <h1 className='format-text-h2 tracking-wider'>
                          {item.title}
                        </h1>
                        <h2 className='format-text-h2 !text-amber-300'>
                          ${item.price}
                        </h2>
                      </div>
                    </div>

                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className='text-red-400 hover:text-red-500 transition ease-in-out duration-300 cursor-pointer'
                    >
                      <CloseIcon className='!w-15 !h-15' />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form
            action=''
            id='pagoForm'
            className={formStyles.formBox}
          >
            <div className={formStyles.leftSide}>
              <label
                htmlFor='nombre-pago'
                className={formStyles.formatTextH2}
              >
                Nombre:
                <span
                  className='error'
                  id='error-nombre'
                />
                <span />
              </label>
              <input
                type='text'
                id='nombre-pago'
                className={formStyles.input}
              />

              <label
                htmlFor='telefono-pago'
                className={formStyles.formatTextH2}
              >
                Teléfono:
                <span
                  className='error'
                  id='error-telefono'
                />
                <span />
              </label>
              <div className={formStyles.inputPhone}>
                <span className='format-text-p '>+56</span>
                <input
                  type='tel'
                  id='telefono-pago'
                  className={formStyles.input}
                />
              </div>

              <label
                htmlFor='correo-pago'
                className={formStyles.formatTextH2}
              >
                Correo:
                <span
                  className='error'
                  id='error-correo'
                />
                <span />
              </label>
              <input
                type='email'
                id='correo-pago'
                className={formStyles.input}
              />

              <label
                htmlFor='direccion-pago'
                className={formStyles.formatTextH2}
              >
                Dirección:
                <span
                  className='error'
                  id='error-direccion'
                ></span>
              </label>
              <input
                id='direccion-pago'
                rows='1'
                className={formStyles.input}
              ></input>
            </div>

            <div className='flex justify-between items-center mt-10 border-t border-[var(--hover-alt)]/30 pt-5'>
              <h1 className='format-text-h2 tracking-wider'>Subtotal</h1>
              <h2 className='format-text-h2 !text-amber-300'>
                $
                {cart
                  .reduce(
                    (total, item) =>
                      total + Number(item.price.replace(/\./g, '')),
                    0,
                  )
                  .toLocaleString('es-CL')}
              </h2>
            </div>
            <div className={formStyles.boxButton}>
              <button
                type='submit'
                className={formStyles.submitButton}
              >
                Pagar
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Carrito

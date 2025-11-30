import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPriceCLP } from '../utils/products'
import CloseIcon from '../assets/icons/icon-close.svg?react'
import { createVenta } from '../utils/ventas'
import { getSession } from '../utils/auth'

function Carrito() {
  const [cart, setCart] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const updateCart = () => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]')
    const filterItems = stored.filter(
      item => item && (item.precio || item.price),
    )
    if (filterItems.length !== stored.length) {
      localStorage.setItem('cart', JSON.stringify(filterItems))
    }
    setCart(filterItems)
  }

  useEffect(() => {
    updateCart()
    window.addEventListener('cartUpdated', updateCart)
    return () => window.removeEventListener('cartUpdated', updateCart)
  }, [])

  const eliminarDelCarrito = index => {
    const nuevoCarrito = [...cart]
    nuevoCarrito.splice(index, 1)
    setCart(nuevoCarrito)
    localStorage.setItem('cart', JSON.stringify(nuevoCarrito))
    window.dispatchEvent(new Event('cartUpdated'))
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

  const handleSubmit = async event => {
    event.preventDefault()
    setError('')
    setMessage('')

    if (cart.length === 0) {
      setError('Tu carrito está vacío')
      return
    }

    const { token } = getSession()
    if (!token) {
      setError('Debes iniciar sesión para completar la compra')
      navigate('/login')
      return
    }

    const itemsPayload = cart.map(item => ({
      productoId: item.id,
      cantidad: item.cantidad || 1,
    }))

    setSubmitting(true)
    try {
      await createVenta(itemsPayload, token)
      setMessage('Compra realizada con éxito')
      localStorage.removeItem('cart')
      window.dispatchEvent(new Event('cartUpdated'))
      setCart([])
    } catch (err) {
      setError(err.message || 'No se pudo completar la compra')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='container-body-normal gradient-main'>
      <main className='main-style !py-20 flex items-center md:items-start'>
        <section className='max-width flex flex-col md:flex-row gap-[20px]'>
          <div className='flex flex-col w-full gap-[10px]'>
            <h1 className='format-text-h2 tracking-wider !mb-0'>Tu carrito</h1>
            {cart.length === 0 ? (
              <p className='format-text-p !text-left'>
                Aún no has agregado nada
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
                          src={item.imagen || item.image}
                          alt={item.nombre || item.titulo || item.title}
                          className='w-full h-full object-contain  object-center rounded-md bg-white'
                        />
                      </div>
                      <div>
                        <h1 className='format-text-h2 tracking-wider'>
                          {item.nombre || item.titulo || item.title}
                        </h1>
                        <h2 className='format-text-h2 !text-amber-300'>
                          {formatPriceCLP(item.precio || item.price)}
                        </h2>
                      </div>
                    </div>

                    <button
                      onClick={() => eliminarDelCarrito(i)}
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
            onSubmit={handleSubmit}
            className={formStyles.formBox}
          >
            <div className={formStyles.leftSide}>
              {error && <p className='error !ml-0'>{error}</p>}
              {message && (
                <p className='format-text-p !text-green-400'>{message}</p>
              )}
            </div>

            <div className='flex justify-between items-center mt-10 border-t border-[var(--hover-alt)]/30 pt-5'>
              <h1 className='format-text-h2 tracking-wider'>Subtotal</h1>
              <h2 className='format-text-h2 !text-amber-300'>
                {formatPriceCLP(
                  cart.reduce(
                    (total, item) => {
                      const price = item.precio || item.price
                      const numPrice =
                        typeof price === 'string'
                          ? Number(price.replace(/\./g, ''))
                          : Number(price)
                      return total + numPrice
                    },
                    0,
                  ),
                )}
              </h2>
            </div>
            <div className={formStyles.boxButton}>
              <button
                type='submit'
                className={formStyles.submitButton}
                disabled={submitting}
              >
                {submitting ? 'Procesando...' : 'Pagar'}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Carrito

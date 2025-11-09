import { useParams } from 'react-router-dom'
import { useProductId } from '../hooks/useProductId'
import { formatPriceCLP } from '../utils/products'
import { Link } from 'react-router-dom'
import ArrowIcon from '../assets/icons/icon-arrow.svg?react'
function Producto() {
  const { id } = useParams()
  const { product, loading } = useProductId(id)

  const addToCart = () => {
    if (!product) return
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))
    alert(`${product.nombre} agregado al carrito`)
  }

  const styles = {
    buttonStyle:
      'w-full md:max-w-[400px] py-[1rem] px-[5rem] text-center font-black text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] hover:text-[var(--white-variant-hover)]',
    sectionBox: 'flex max-width justify-center w-full',
    containerItemsSection:
      ' bg-[var(--bg-secondary)]/30 p-8 grid grid-rows-[auto_auto]   gap-8 md:gap-16 w-fit',
    imageBox:
      'flex flex-col justify-center max-h-[300px] md:min-h-[400px]  lg:max-h-[500px] w-auto md:w-[300px] lg:w-[400px] overflow-hidden rounded-lg ',
    containerContent: ' flex-1 flex flex-col md:flex-row gap-8 md:gap-16',
    upperContent: 'flex flex-col gap-10 justify-between mb-8 md:mb-0  ',
  }

  if (loading) {
    return (
      <div className='container-body-normal gradient-main'>
        <main className='main-style !py-20 flex items-center justify-center'>
          <p className='format-text-p'>Cargando producto...</p>
        </main>
      </div>
    )
  }

  if (!product) {
    return (
      <div className='container-body-normal gradient-main'>
        <main className='main-style !py-20 flex items-center justify-center'>
          <div className='flex flex-col gap-5 items-center'>
            <p className='format-text-p'>Producto no encontrado</p>
            <Link
              to='/categoria'
              className='format-text-p text-[var(--bg-button)] hover:text-[var(--bg-button-hover)]'
            >
              Volver a categorías
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className='container-body-normal gradient-main'>
      <main className='main-style !py-20 flex items-center'>
        <section className={styles.sectionBox}>
          <div className={styles.containerItemsSection}>
            <Link
              to='/categoria'
              className='flex w-full h-fit items-center gap-[10px] group cursor-pointer '
            >
              <ArrowIcon className='size-20 text-white group-hover:text-[var(--bg-button)] transition ease-in-out duration-300' />
              <h2 className='format-text-h2 !text-white group-hover:!text-[var(--bg-button)] !mb-0 !font-normal'>
                Volver
              </h2>
            </Link>

            <div className={styles.containerContent}>
              <div className={styles.imageBox}>
                <img
                  src={product.imagen || product.image}
                  alt={product.nombre }
                  className='rounded-lg object-cover object-center h-full w-full'
                />
              </div>
              <div className={styles.upperContent}>
                <div>
                  <h1 className='format-text-h2 tracking-wider'>
                    {product.nombre}
                  </h1>
                  <h2 className='format-text-h2 !text-amber-300 !font-bold !text-left !mb-0'>
                    {formatPriceCLP(product.precio)}
                  </h2>
                  <p className='format-text-p !text-left'>
                    Categoría: {product.categoria }
                  </p>
                </div>
                <button
                  type='button'
                  onClick={addToCart}
                  className={styles.buttonStyle}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Producto

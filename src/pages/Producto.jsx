import { useParams } from 'react-router-dom'
import { products } from '../utils/products'
import { Link } from 'react-router-dom'
import ArrowIcon from '../assets/icons/icon-arrow.svg?react'
function Producto() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))
    alert(`${product.title} agregado al carrito`)
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
                  src={product.image}
                  alt={product.title}
                  className='rounded-lg object-cover object-center h-full w-full'
                />
              </div>
              <div className={styles.upperContent}>
                <div>
                  <h1 className='format-text-h2 tracking-wider'>
                    {product.title}
                  </h1>
                  <h2 className='format-text-h2 !text-amber-300 !font-bold !text-left !mb-0'>
                    ${product.price}
                  </h2>
                  <p className='format-text-p !text-left'>
                    Categoría: {product.category}
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

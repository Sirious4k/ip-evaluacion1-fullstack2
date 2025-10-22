import { Link } from 'react-router-dom'

function ItemCard({ product }) {
  const styles = {
    boxItemSectionTwo: 'flex flex-col w-full max-w-[300px] mb-5 ',
    containerImage: 'w-full h-[180px] rounded-lg overflow-hidden mb-[10px]',
    h1Items: 'text-3xl text-white truncate tracking-wider mb-5',
    h2Items: 'text-2xl text-amber-300',
  }

  return (
    <Link
      to={`/producto/${product.id}`}
      className='w-full grid  grid-cols-[repeat(auto-fill,minmax(250px,300px))] items-center'
    >
      <div className={styles.boxItemSectionTwo}>
        <div className={styles.containerImage}>
          <img
            src={product.image}
            alt={product.title}
            className='size-items'
          />
        </div>
        <h1 className={styles.h1Items}>{product.title}</h1>
        <h2 className={styles.h2Items}>${product.price}</h2>
      </div>
    </Link>
  )
}

export default ItemCard

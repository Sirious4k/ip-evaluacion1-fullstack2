import { useLocation } from 'react-router-dom'
import Sidebar from '../components/SideBar'
import ItemCard from '../components/ItemsCards'
import { useProducts } from '../hooks/useProducts'


function Categoria() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const selectedCategory = query?.get('cat')
  const { products, loading } = useProducts()


  const allCategories = Array.from(
    new Set(products.map(p => p.categoria)),
  )

  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter(
          p => (p.categoria) === selectedCategory,
        )

  if (loading) {
    return (
      <div className='container-body-normal gradient-main'>
        <div className='main-style !py-20'>
          <div className='max-width flex justify-center items-center'>
            <p className='format-text-p'>Cargando productos...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container-body-normal gradient-main'>
      <div className='main-style !py-20'>
        <div className='max-width flex flex-col gap-[20px] md:gap-0 md:flex-row flex-shrink-0 pb-5'>
          <Sidebar
            categories={allCategories}
            selected={selectedCategory}
          />
          <div className='w-full grid gap-15 grid-cols-[repeat(auto-fill,minmax(270px,4fr))] items-center'>
            {filteredProducts.length === 0 ? (
              <p className='format-text-p col-span-full text-center'>
                No se encontraron productos en esta categoría.
              </p>
            ) : (
              filteredProducts.map(p => (
                <ItemCard
                  key={p.id}
                  product={p}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categoria

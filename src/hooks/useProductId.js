import { useEffect, useState } from 'react'
import { getProducts } from '../utils/products'

export function useProductId(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        const products = await getProducts()
        const found = products.find(p => p.id === Number(id))
        setProduct(found)
      } catch (err) {
        console.error('Error al obtener producto:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchProduct()
  }, [id])

  return { product, loading, error }
}

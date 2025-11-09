const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts(){
  try {
    const response = await fetch(`${API_URL}/api/productos`)
    if (!response.ok) throw new Error('Error al obtener productos')
      return await response.json()

  } catch (error) {
    console.error ('error al obtener productos', error)
    return []
  }
}

export function formatPriceCLP(price) {
  if (price === null || price === undefined) return '$0'
  const numPrice = typeof price === 'string' ? Number(price.replace(/\./g, '')) : Number(price)
  return `$${numPrice.toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}
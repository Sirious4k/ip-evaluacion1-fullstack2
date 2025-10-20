export function initNavDropdown() {
  const categoriaItem = document.querySelector('.categoria-item')
  if (!categoriaItem) return

  const dropdown = categoriaItem.querySelector('.dropdown')

  const handleClick = n => {
    n.stopPropagation()
    dropdown.classList.toggle('show')
  }

  const handleClickOutside = () => {
    dropdown.classList.remove('show')
  }

  categoriaItem.addEventListener('click', handleClick)
  document.addEventListener('click', handleClickOutside)

  return () => {
    categoriaItem.removeEventListener('click', handleClick)
    document.removeEventListener('click', handleClickOutside)
  }
}

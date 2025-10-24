export function initForm({ onPagoExitoso } = {}) {
  const pagoNombre = document.getElementById('nombre-pago')
  const pagoTelefono = document.getElementById('telefono-pago')
  const pagoCorreo = document.getElementById('correo-pago')
  const pagoDireccion = document.getElementById('direccion-pago')
  const form = document.getElementById('pagoForm')
  const maxCaracteres = 50

  const errores = {
    nombre: document.getElementById('error-nombre'),
    telefono: document.getElementById('error-telefono'),
    correo: document.getElementById('error-correo'),
    direccion: document.getElementById('error-direccion'),
  }

  if (pagoNombre) {
    pagoNombre.addEventListener('input', () => {
      if (pagoNombre.value.length > maxCaracteres)
        pagoNombre.value = pagoNombre.value.slice(0, maxCaracteres)
      if (pagoNombre.value.trim() !== '') errores.nombre.textContent = ''
    })
  }

  if (pagoTelefono) {
    pagoTelefono.addEventListener('input', () => {
      pagoTelefono.value = pagoTelefono.value.replace(/\D/g, '')
      if (pagoTelefono.value.length > 9)
        pagoTelefono.value = pagoTelefono.value.slice(0, 9)
      if (pagoTelefono.value.length === 9) errores.telefono.textContent = ''
    })
  }

  if (pagoCorreo) {
    pagoCorreo.addEventListener('input', () => {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pagoCorreo.value.trim()))
        errores.correo.textContent = ''
    })
  }

  if (pagoDireccion) {
    pagoDireccion.addEventListener('input', () => {
      if (pagoDireccion.value.length > maxCaracteres)
        pagoDireccion.value = pagoDireccion.value.slice(0, maxCaracteres)
      if (pagoDireccion.value.trim() !== '') errores.direccion.textContent = ''
    })
  }

  if (!form) return

  form.addEventListener('submit', e => {
    e.preventDefault()

    Object.values(errores).forEach(span => (span.textContent = ''))
    let isValid = true

    if (!pagoNombre.value.trim()) {
      errores.nombre.textContent = 'Debe ingresar su nombre'
      isValid = false
    }
    if (!pagoDireccion.value.trim()) {
      errores.direccion.textContent = 'Indique su dirección completa'
      isValid = false
    }
    if (!pagoTelefono.value.trim()) {
      errores.telefono.textContent = 'Debe ingresar su teléfono'
      isValid = false
    } else if (pagoTelefono.value.length !== 9) {
      errores.telefono.textContent = 'El teléfono debe tener 9 dígitos'
      isValid = false
    }
    if (!pagoCorreo.value.trim()) {
      errores.correo.textContent = 'Debe ingresar su correo'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pagoCorreo.value.trim())) {
      errores.correo.textContent = 'Correo inválido'
      isValid = false
    }

    if (isValid) {
      requestAnimationFrame(() => {
        Object.values(errores).forEach(span => {
          if (span) span.textContent = ''
        })
      })

      form.reset()

      localStorage.removeItem('cart')

      window.dispatchEvent(new Event('cartUpdated'))

      alert('Pago realizado con éxito')

      if (onPagoExitoso) onPagoExitoso()
    }
  })
}

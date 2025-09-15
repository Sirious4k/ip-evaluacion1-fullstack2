document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const telefono = document.getElementById('telefono');
  const correo = document.getElementById('correo');
  const categoriaItem = document.querySelector('.nav-item');
  const maxCaracteres = 20;


  // DROPDOWN NAV
  if(categoriaItem) {
    categoriaItem.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = categoriaItem.querySelector('.dropdown');
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      const dropdown = categoriaItem.querySelector('.dropdown');
      dropdown.classList.remove('show');
    });
  }

  // VALIDACIÓN FORM
  if(nombre) {
    nombre.addEventListener('input', () => {
      if(nombre.value.length > maxCaracteres) {
        nombre.value = nombre.value.slice(0, maxCaracteres);
      }
    });
  }

  if(telefono) {
    telefono.addEventListener('input', () => {
      telefono.value = telefono.value.replace(/\D/g, '');
      if(telefono.value.length > 9) {
        telefono.value = telefono.value.slice(0, 9);
      }
    });
  }

  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.querySelectorAll('.error').forEach(span => span.textContent = '');
      let isValid = true;

      if(nombre.value.trim() === '') {
        document.getElementById('error-nombre').textContent = 'Debe ingresar su nombre';
        isValid = false;
      }

      if(telefono.value.trim() === '') {
        document.getElementById('error-telefono').textContent = 'Debe ingresar su teléfono';
        isValid = false;
      }

      if(correo.value.trim() === '') {
        document.getElementById('error-correo').textContent = 'Debe ingresar su correo';
        isValid = false;
      } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
          document.getElementById('error-correo').textContent = 'Correo inválido';
          isValid = false;
      }

      if(isValid) {
        alert('Formulario enviado correctamente');
        form.reset();
      }
    });
  }
});

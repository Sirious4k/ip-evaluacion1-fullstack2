const form = document.getElementById('contactForm');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');

const maxCaracteres = 20;
nombre.addEventListener('input', () => {
  if(nombre.value.length > maxCaracteres) {
    nombre.value = nombre.value.slice(0, maxCaracteres);
  }
});

telefono.addEventListener('input', () => {
  telefono.value = telefono.value.replace(/\D/g, '');
  if(telefono.value.length > 9) {
    telefono.value = telefono.value.slice(0, 9);
  }
});

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
  } else if(!/\S+@\S+\.\S+/.test(correo.value)) {
    document.getElementById('error-correo').textContent = 'Correo inválido';
    isValid = false;
  }

  if(isValid) {
    alert('Formulario enviado correctamente');
    form.reset();
  }
});

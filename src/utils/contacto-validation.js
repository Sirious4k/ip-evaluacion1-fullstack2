export function initForm() {
    const nombre = document.getElementById('nombre-contacto');
    const telefono = document.getElementById('telefono-contacto');
    const correo = document.getElementById('correo-contacto');
    const form = document.getElementById('contactForm');
    const maxCaracteres = 50;

    const errores = {
        nombre: document.getElementById('error-nombre'),
        telefono: document.getElementById('error-telefono'),
        correo: document.getElementById('error-correo'),
    };

    if (nombre) {
        nombre.addEventListener('input', () => {
            if (nombre.value.length > maxCaracteres) nombre.value = nombre.value.slice(0, maxCaracteres);
            if (nombre.value.trim() !== '') errores.nombre.textContent = '';
        });
    }

    if (telefono) {
        telefono.addEventListener('input', () => {
            telefono.value = telefono.value.replace(/\D/g, '');
            if (telefono.value.length > 9) telefono.value = telefono.value.slice(0, 9);
            if (telefono.value.length === 9) errores.telefono.textContent = '';
        });
    }

    if (correo) {
        correo.addEventListener('input', () => {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) errores.correo.textContent = '';
        });
    }

    if (form) {
        form.addEventListener('submit', (n) => {
            n.preventDefault();
            Object.values(errores).forEach(span => span.textContent = '');
            let isValid = true;

            if (nombre.value.trim() === '') {
                errores.nombre.textContent = 'Debe ingresar su nombre';
                isValid = false;
            }

            if (telefono.value.trim() === '') {
                errores.telefono.textContent = 'Debe ingresar su teléfono';
                isValid = false;
            } else if (telefono.value.length !== 9) {
                errores.telefono.textContent = 'El teléfono debe tener 9 dígitos';
                isValid = false;
            }

            if (correo.value.trim() === '') {
                errores.correo.textContent = 'Debe ingresar su correo';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
                errores.correo.textContent = 'Correo inválido';
                isValid = false;
            }

            if (isValid) {
                alert('Formulario Contacto enviado correctamente');
                form.reset();
            }
        });
    }
}

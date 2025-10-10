export function initForm() {
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const logCorreo = document.getElementById('correo-log');
    const correo = document.getElementById('correo');
    const logContrasena = document.getElementById('contrasena-log');
    const contrasena = document.getElementById('contrasena-principal');
    const repiteContrasena = document.getElementById('repite-contrasena');
    const form = document.getElementById('contactForm');
    const logForm = document.getElementById('loginForm')
    const maxCaracteres = 50;

    // const errores Registro
    const errores = {
        nombre: document.getElementById('error-nombre'),
        telefono: document.getElementById('error-telefono'),
        correo: document.getElementById('error-correo'),
        contrasena: document.getElementById('error-contrasena-principal'),
        repiteContrasena: document.getElementById('error-repite-contrasena')
    };

    //const errores LogIn
    const logErrores = {
    logCorreo: document.getElementById('error-correo-login'),
    logContrasena: document.getElementById('error-contrasena-login'),
};

    //EventListeners Registro
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

    if (contrasena && repiteContrasena) {
        contrasena.addEventListener('input', () => {
            if (contrasena.value.trim().length >= 8) errores.contrasena.textContent = '';
            if (repiteContrasena.value.trim() && contrasena.value === repiteContrasena.value) errores.repiteContrasena.textContent = '';
        });

        repiteContrasena.addEventListener('input', () => {
            if (repiteContrasena.value.trim() !== '') errores.repiteContrasena.textContent = '';
            if (contrasena.value === repiteContrasena.value) errores.repiteContrasena.textContent = '';
        });
    }

    //EventListeners LogIn
    if (logCorreo) {
    logCorreo.addEventListener('input', () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(logCorreo.value.trim())) logErrores.logCorreo.textContent = '';
    });
}

    if (logContrasena) {
    logContrasena.addEventListener('input', () => {
        if (logContrasena.value.trim().length >= 8) logErrores.logContrasena.textContent = '';
    });
}

    //form Registro
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
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

            if (!contrasena.value.trim()) {
                errores.contrasena.textContent = 'Debe ingresar su contraseña';
                isValid = false;
            } else if (contrasena.value.trim().length < 8) {
                errores.contrasena.textContent = 'La contraseña debe tener al menos 8 caracteres';
                isValid = false;
            }

            if (!repiteContrasena.value.trim()) {
                errores.repiteContrasena.textContent = 'Debe repetir su contraseña';
                isValid = false;
            } else if (contrasena.value !== repiteContrasena.value) {
                errores.repiteContrasena.textContent = 'Las contraseñas no coinciden';
                isValid = false;
            }

            if (isValid) {
                alert('Formulario enviado correctamente');
                form.reset();
            }
        });
    }

    //form LogIn
        if (logForm) {
        logForm.addEventListener('submit', (e) => {
            e.preventDefault();
            Object.values(logErrores).forEach(span => span.textContent = '');
            let isValid = true;

            if (correo.value.trim() === '') {
                logErrores.correo.textContent = 'Debe ingresar su correo';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
                logErrores.correo.textContent = 'Correo inválido';
                isValid = false;
            }

            if (!logContrasena.value.trim()) {
                logErrores.logContrasena.textContent = 'Debe ingresar su contraseña';
                isValid = false;
            } else if (logContrasena.value.trim().length < 8) {
                logErrores.logContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres';
                isValid = false;
            }

            if (isValid) {
                alert('Formulario enviado correctamente');
                logForm.reset();
            }
        });
    }
}

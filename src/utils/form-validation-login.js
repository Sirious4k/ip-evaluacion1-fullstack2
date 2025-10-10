export function initFormLogin() {
    const logCorreo = document.getElementById('correo-log');
    const logContrasena = document.getElementById('contrasena-log');
    const logForm = document.getElementById('loginForm')

    //const errores LogIn
    const logErrores = {
    logCorreo: document.getElementById('error-correo-login'),
    logContrasena: document.getElementById('error-contrasena-login'),
};

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

    //form LogIn
        if (logForm) {
        logForm.addEventListener('submit', (e) => {
            e.preventDefault();
            Object.values(logErrores).forEach(span => span.textContent = '');
            let isValid = true;

            if (logCorreo.value.trim() === '') {
                logErrores.logCorreo.textContent = 'Debe ingresar su correo';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(logCorreo.value.trim())) {
                logErrores.logCorreo.textContent = 'Correo inválido';
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
                window.location.href = '/';
            }
        });
    }
}

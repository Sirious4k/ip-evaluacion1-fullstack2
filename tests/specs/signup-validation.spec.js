import { initForm } from '../src/signup-validation.js';

describe('Pruebas del formulario de registro (signup-validation.js)', () => {
  let form, nombre, telefono, correo, direccion, contrasena, repiteContrasena;
  let errores;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="signUpForm">
        <input id="nombre" value="">
        <span id="error-nombre"></span>
        <input id="telefono" value="">
        <span id="error-telefono"></span>
        <input id="correo" value="">
        <span id="error-correo"></span>
        <input id="address" value="">
        <span id="error-direccion"></span>
        <input id="contrasena-principal" value="">
        <span id="error-contrasena-principal"></span>
        <input id="repite-contrasena" value="">
        <span id="error-repite-contrasena"></span>
        <button type="submit">Registrar</button>
      </form>
    `;

    nombre = document.getElementById('nombre');
    telefono = document.getElementById('telefono');
    correo = document.getElementById('correo');
    direccion = document.getElementById('address');
    contrasena = document.getElementById('contrasena-principal');
    repiteContrasena = document.getElementById('repite-contrasena');
    form = document.getElementById('signUpForm');

    errores = {
      nombre: document.getElementById('error-nombre'),
      telefono: document.getElementById('error-telefono'),
      correo: document.getElementById('error-correo'),
      direccion: document.getElementById('error-direccion'),
      contrasena: document.getElementById('error-contrasena-principal'),
      repiteContrasena: document.getElementById('error-repite-contrasena'),
    };

    initForm();
  });

  it('debe mostrar errores si los campos están vacíos al enviar el formulario', () => {
    form.dispatchEvent(new Event('submit', { cancelable: true }));
    expect(errores.nombre.textContent).toBe('Debe ingresar su nombre');
    expect(errores.direccion.textContent).toBe('Indique su dirección completa');
    expect(errores.telefono.textContent).toBe('Debe ingresar su teléfono');
    expect(errores.correo.textContent).toBe('Debe ingresar su correo');
    expect(errores.contrasena.textContent).toBe('Debe ingresar su contraseña');
    expect(errores.repiteContrasena.textContent).toBe('Debe repetir su contraseña');
  });

  it('debe validar correctamente cuando todos los campos son válidos', () => {
    nombre.value = 'Juan';
    telefono.value = '912345678';
    correo.value = 'juan@mail.com';
    direccion.value = 'Calle Falsa 123';
    contrasena.value = '12345678';
    repiteContrasena.value = '12345678';

    form.dispatchEvent(new Event('submit'));

    expect(Object.values(errores).every(span => span.textContent === '')).toBeTrue();
  });

  it('debe marcar error si las contraseñas no coinciden', () => {
    contrasena.value = '12345678';
    repiteContrasena.value = '87654321';
    form.dispatchEvent(new Event('submit'));
    expect(errores.repiteContrasena.textContent).toBe('Las contraseñas no coinciden');
  });

  it('debe marcar error si el teléfono tiene menos de 9 dígitos', () => {
    telefono.value = '12345';
    form.dispatchEvent(new Event('submit'));
    expect(errores.telefono.textContent).toBe('El teléfono debe tener 9 dígitos');
  });

  it('debe marcar error si el correo es inválido', () => {
    correo.value = 'correo_invalido';
    form.dispatchEvent(new Event('submit'));
    expect(errores.correo.textContent).toBe('Correo inválido');
  });
});

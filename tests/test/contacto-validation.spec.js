import { initForm } from '../src/contacto-validation.js';

describe('Pruebas de validación del formulario de contacto', () => {

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="contactForm">
        <input id="nombre-contacto" value="" />
        <span id="error-nombre"></span>

        <input id="telefono-contacto" value="" />
        <span id="error-telefono"></span>

        <input id="correo-contacto" value="" />
        <span id="error-correo"></span>

        <button type="submit">Enviar</button>
      </form>
    `;

    initForm();
  });

  it('debería mostrar errores si los campos están vacíos al enviar', () => {
    const form = document.getElementById('contactForm');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(document.getElementById('error-nombre').textContent).toBe('Debe ingresar su nombre');
    expect(document.getElementById('error-telefono').textContent).toBe('Debe ingresar su teléfono');
    expect(document.getElementById('error-correo').textContent).toBe('Debe ingresar su correo');
  });

  it('debería mostrar error si el correo es inválido', () => {
    const correo = document.getElementById('correo-contacto');
    correo.value = 'correo@invalido';
    const form = document.getElementById('contactForm');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(document.getElementById('error-correo').textContent).toBe('Correo inválido');
  });

  it('debería mostrar error si el teléfono no tiene 9 dígitos', () => {
    const telefono = document.getElementById('telefono-contacto');
    telefono.value = '12345';
    const form = document.getElementById('contactForm');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(document.getElementById('error-telefono').textContent).toBe('El teléfono debe tener 9 dígitos');
  });

  it('debería pasar todas las validaciones si los campos son correctos', () => {
    spyOn(window, 'alert'); // Evita que abra alert

    document.getElementById('nombre-contacto').value = 'Juan Pérez';
    document.getElementById('telefono-contacto').value = '987654321';
    document.getElementById('correo-contacto').value = 'correo@dominio.com';

    const form = document.getElementById('contactForm');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(window.alert).toHaveBeenCalledWith('Formulario Contacto enviado correctamente');
  });

});

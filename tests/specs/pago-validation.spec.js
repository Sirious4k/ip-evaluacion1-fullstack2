import { initForm } from '../src/pago-validation.js';

describe('Pruebas del formulario de pago (pago-validation.js)', () => {
  let form;
  let nombre, telefono, correo, direccion;
  let errores;
  let onPagoExitoso;

  beforeAll(() => {
    spyOn(window, 'alert').and.callFake(() => {});
    spyOn(window, 'requestAnimationFrame').and.callFake(cb => cb());

    const mockStorage = (() => {
      let store = {};
      return {
        getItem: key => store[key],
        setItem: (key, value) => (store[key] = value),
        removeItem: key => delete store[key],
        clear: () => (store = {}),
      };
    })();
    Object.defineProperty(window, 'localStorage', { value: mockStorage });

    spyOn(window, 'dispatchEvent');
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="pagoForm">
        <input id="nombre-pago" />
        <span id="error-nombre"></span>

        <input id="telefono-pago" />
        <span id="error-telefono"></span>

        <input id="correo-pago" />
        <span id="error-correo"></span>

        <input id="direccion-pago" />
        <span id="error-direccion"></span>

        <button type="submit">Pagar</button>
      </form>
    `;

    form = document.getElementById('pagoForm');
    nombre = document.getElementById('nombre-pago');
    telefono = document.getElementById('telefono-pago');
    correo = document.getElementById('correo-pago');
    direccion = document.getElementById('direccion-pago');

    errores = {
      nombre: document.getElementById('error-nombre'),
      telefono: document.getElementById('error-telefono'),
      correo: document.getElementById('error-correo'),
      direccion: document.getElementById('error-direccion'),
    };

    onPagoExitoso = jasmine.createSpy('onPagoExitoso');

    initForm({ onPagoExitoso });
  });

  function simulateSubmit() {
    const event = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(event);
  }



  it('debe mostrar errores si los campos están vacíos al enviar el formulario', () => {
    simulateSubmit();

    expect(errores.nombre.textContent).toBe('Debe ingresar su nombre');
    expect(errores.telefono.textContent).toBe('Debe ingresar su teléfono');
    expect(errores.correo.textContent).toBe('Debe ingresar su correo');
    expect(errores.direccion.textContent).toBe('Indique su dirección completa');
  });

  it('debe marcar error si el teléfono tiene menos de 9 dígitos', () => {
    nombre.value = 'Juan';
    telefono.value = '12345';
    correo.value = 'juan@mail.com';
    direccion.value = 'Santiago';

    simulateSubmit();

    expect(errores.telefono.textContent).toBe('El teléfono debe tener 9 dígitos');
  });

  it('debe marcar error si el correo es inválido', () => {
    nombre.value = 'Juan';
    telefono.value = '123456789';
    correo.value = 'correo_invalido';
    direccion.value = 'Santiago';

    simulateSubmit();

    expect(errores.correo.textContent).toBe('Correo inválido');
  });

  it('debe validar correctamente cuando todos los campos son válidos', done => {
    nombre.value = 'Juan';
    telefono.value = '123456789';
    correo.value = 'juan@mail.com';
    direccion.value = 'Santiago';

    spyOn(localStorage, 'removeItem').and.callThrough();

    simulateSubmit();

    setTimeout(() => {
      expect(window.alert).toHaveBeenCalledWith('Pago realizado con éxito');
      expect(localStorage.removeItem).toHaveBeenCalledWith('cart');
      expect(window.dispatchEvent).toHaveBeenCalled();
      expect(onPagoExitoso).toHaveBeenCalled();
      done();
    }, 60);
  });
});

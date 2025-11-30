import { useState } from 'react'
import ArrowIcon from '../assets/icons/icon-arrow.svg?react'
import { Link, useNavigate } from 'react-router-dom'
import LogoComponent from '../components/LogoComponent'
import { persistToken, registerUser } from '../utils/auth'

function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    password: '',
    confirm: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [globalError, setGlobalError] = useState('')

  const styles = {
    mainStyle:
      'flex items-center justify-center min-h-[100vh] !mt-0 !py-8 main-style  gradient-main ',
    boxSignUp:
      'flex flex-col max-h-auto md:max-w-[500px] md:w-[500px] w-full   p-8 bg-[var(--white-variant)] shadow-2xl',
  }

  const formStyles = {
    formBox: 'flex flex-col w-full h-full  gap-[10px]',
    leftSide: 'flex flex-col w-full h-full gap-[10px] ',

    inputPhone: 'flex items-center gap-[20px]',
    input: '!border-[#00001f]/20 focus:!border-[#00001f]/70',

    formatTextH2: 'format-text-h2 !mb-0 !text-black',
    boxButton: 'flex w-full col-2 justify-end',
    submitButton:
      'w-full md:w-[200px] py-[1rem] px-[0.5rem] mt-12 text-center text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] hover:text-[var(--white-variant-hover)] disabled:opacity-60 disabled:cursor-not-allowed',

    linkLoginButton:
      'format-text-p cursor-auto !text-black/100 !not-italic !text-[1.6rem]',
    loginButton:
      '!inline-block cursor-pointer !text-[var(--bg-button)] hover:!text-[var(--bg-button-hover)] !font-black transition-color duration-300 ease-in-out',
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
    setGlobalError('')
  }

  const validateForm = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.nombre.trim()) newErrors.nombre = 'Debe ingresar su nombre'
    if (!form.direccion.trim())
      newErrors.direccion = 'Indique su direccion completa'

    if (!form.telefono.trim()) {
      newErrors.telefono = 'Debe ingresar su telefono'
    } else if (!/^[0-9]{9}$/.test(form.telefono.trim())) {
      newErrors.telefono = 'El telefono debe tener 9 digitos'
    }

    if (!form.correo.trim()) {
      newErrors.correo = 'Debe ingresar su correo'
    } else if (!emailRegex.test(form.correo.trim())) {
      newErrors.correo = 'Correo invalido'
    }

    if (!form.password.trim()) {
      newErrors.password = 'Debe ingresar su contraseña'
    } else if (form.password.trim().length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres'
    }

    if (!form.confirm.trim()) {
      newErrors.confirm = 'Debe repetir su contraseña'
    } else if (form.password !== form.confirm) {
      newErrors.confirm = 'Las contraseñas no coinciden'
    }

    return newErrors
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const validation = validateForm()
    if (Object.keys(validation).length) {
      setErrors(validation)
      return
    }

    setSubmitting(true)
    setGlobalError('')
    try {
      const payload = {
        username: form.nombre.trim(),
        email: form.correo.trim(),
        password: form.password,
        direccion: form.direccion.trim(),
        phone: form.telefono ? `+56${form.telefono.trim()}` : '',
      }

      const data = await registerUser(payload)
      if (data?.token) persistToken(data.token)
      navigate('/')
    } catch (error) {
      setGlobalError(error.message || 'No se pudo completar el registro')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='container-body-normal'>
      <main className={styles.mainStyle}>
        <div className={styles.boxSignUp}>
          <div className='flex justify-between '>
            <Link
              to='/'
              className='flex w-fit items-center gap-[10px] group cursor-pointer mb-12'
            >
              <ArrowIcon className='size-20 text-black group-hover:text-[var(--bg-button)] transition ease-in-out duration-300' />
              <h2 className='format-text-h2 !text-black group-hover:!text-[var(--bg-button)] !mb-0 !font-normal'>
                Volver
              </h2>
            </Link>
            <LogoComponent />
          </div>
          <form
            onSubmit={handleSubmit}
            id='signUpForm'
            className={formStyles.formBox}
            noValidate
          >
            <div className={formStyles.leftSide}>
              <label
                htmlFor='nombre'
                className={formStyles.formatTextH2}
              >
                Nombre:
                <span className='error'>{errors.nombre}</span>
              </label>
              <input
                type='text'
                id='nombre'
                name='nombre'
                value={form.nombre}
                onChange={handleChange}
                className={formStyles.input}
              />

              <label
                htmlFor='telefono'
                className={formStyles.formatTextH2}
              >
                Telefono:
                <span className='error'>{errors.telefono}</span>
              </label>
              <div className={formStyles.inputPhone}>
                <span className='format-text-p !text-black/80 '>+56</span>
                <input
                  type='tel'
                  id='telefono'
                  name='telefono'
                  value={form.telefono}
                  onChange={handleChange}
                  className={formStyles.input}
                />
              </div>

              <label
                htmlFor='correo'
                className={formStyles.formatTextH2}
              >
                Correo:
                <span className='error'>{errors.correo}</span>
              </label>
              <input
                type='email'
                id='correo'
                name='correo'
                value={form.correo}
                onChange={handleChange}
                className={formStyles.input}
              />

              <label
                htmlFor='address'
                className={formStyles.formatTextH2}
              >
                Direccion:
                <span className='error'>{errors.direccion}</span>
              </label>
              <input
                id='address'
                name='direccion'
                value={form.direccion}
                onChange={handleChange}
                className={formStyles.input}
              />

              <label
                htmlFor='contrasena-principal'
                className={formStyles.formatTextH2}
              >
                Contraseña:
                <span className='error'>{errors.password}</span>
              </label>
              <input
                type='password'
                id='contrasena-principal'
                name='password'
                value={form.password}
                onChange={handleChange}
                className={formStyles.input}
              />

              <label
                htmlFor='repite-contrasena'
                className={formStyles.formatTextH2}
              >
                Repite Contraseña:
                <span className='error'>{errors.confirm}</span>
              </label>
              <input
                type='password'
                id='repite-contrasena'
                name='confirm'
                value={form.confirm}
                onChange={handleChange}
                className={formStyles.input}
              />
            </div>

            <div className='w-full text-left'>
              {globalError && <p className='error !ml-0'>{globalError}</p>}
              <Link
                to='/login'
                className={formStyles.linkLoginButton}
              >
                ¿Ya tienes cuenta?{' '}
                <span className={formStyles.loginButton}>
                  {' '}
                  Inicia Sesion Aqui{' '}
                </span>
              </Link>
            </div>

            <div className={formStyles.boxButton}>
              <button
                type='submit'
                className={formStyles.submitButton}
                disabled={submitting}
              >
                {submitting ? 'Registrando...' : 'Registro'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default SignUp

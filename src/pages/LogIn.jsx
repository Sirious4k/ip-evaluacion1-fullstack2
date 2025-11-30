import { useEffect, useState } from 'react'
import ArrowIcon from '../assets/icons/icon-arrow.svg?react'
import { Link, useNavigate } from 'react-router-dom'
import LogoComponent from '../components/LogoComponent'
import { getSession, loginUser, persistSession } from '../utils/auth'

function LogIn() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({})
  const [globalError, setGlobalError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const session = getSession()
    if (session.token) navigate('/', { replace: true })
  }, [navigate])

  const styles = {
    mainStyle:
      'flex items-center justify-center min-h-[100vh] !mt-0 main-style  ',
    boxLogIn:
      'flex flex-col md:max-w-[500px] md:w-[500px] w-full  p-8 bg-[var(--white-variant)] shadow-2xl',
  }

  const formStyles = {
    formBox: 'flex flex-col w-full h-full  gap-[10px]',

    leftSide: 'flex flex-col w-full h-full gap-[10px] ',

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

    if (!form.username.trim()) newErrors.username = 'Ingrese su usuario o correo'
    if (!form.password.trim()) {
      newErrors.password = 'Debe ingresar su contraseña'
    } else if (form.password.trim().length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres'
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
      const cleanUsername = form.username.trim()
      const data = await loginUser({
        username: cleanUsername,
        password: form.password,
      })
      if (data?.token) {
        persistSession({ token: data.token, username: cleanUsername })
      }
      navigate('/')
    } catch (error) {
      setGlobalError(error.message || 'No se pudo iniciar sesion')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='container-body-normal gradient-main'>
      <main className={styles.mainStyle}>
        <div className={styles.boxLogIn}>
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
            id='loginForm'
            className={formStyles.formBox}
            onSubmit={handleSubmit}
          >
            <div className={formStyles.leftSide}>
              <label
                htmlFor='correo-log'
                className={formStyles.formatTextH2}
              >
                Usuario o correo:
                <span className='error'>{errors.username}</span>
              </label>
              <input
                type='text'
                id='correo-log'
                name='username'
                value={form.username}
                onChange={handleChange}
                className={formStyles.input}
              />

              <label
                htmlFor='contrasena-log'
                className={formStyles.formatTextH2}
              >
                Contraseña:
                <span className='error'>{errors.password}</span>
              </label>
              <input
                type='password'
                id='contrasena-log'
                name='password'
                value={form.password}
                onChange={handleChange}
                className={formStyles.input}
              />
              <div className=' w-full !text-left flex justify-between'>
                <Link
                  to='/signup'
                  className={formStyles.linkLoginButton}
                >
                  ¿Aún no tienes cuenta?{' '}
                  <span className={formStyles.loginButton}>
                    {' '}
                    Regístrate aquí.{' '}
                  </span>
                </Link>
                <Link
                  to='/panel'
                  className='text-2xl'
                >
                  Panel
                </Link>
              </div>
              {globalError && <p className='error !ml-0'>{globalError}</p>}
              <div className={formStyles.boxButton}>
                <button
                  type='submit'
                  className={formStyles.submitButton}
                  disabled={submitting}
                >
                  {submitting ? 'Ingresando...' : 'Iniciar sesion'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default LogIn

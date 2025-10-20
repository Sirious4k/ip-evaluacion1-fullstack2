import Logo from '../assets/icons/logo.svg?react'
import { Link } from 'react-router'

function LogoComponent() {
  const styles = {
    containerLogo: 'inline-flex items-center',

    logoSize: 'w-[8rem] h-auto',
  }

  return (
    <div className={styles.containerLogo}>
      <Link to='/'>
        <Logo className={styles.logoSize} />
      </Link>
    </div>
  )
}

export default LogoComponent

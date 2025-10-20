import { Link } from 'react-router-dom'

function ButtonLinkComponent({ href, children }) {
  const styles = {
    buttonStyle:
      'w-full md:max-w-[200px] py-[1rem] px-[5rem] text-center font-black text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] hover:text-[var(--white-variant-hover)]',
  }

  return (
    <Link
      to={href}
      className={styles.buttonStyle}
    >
      {children}
    </Link>
  )
}

export default ButtonLinkComponent

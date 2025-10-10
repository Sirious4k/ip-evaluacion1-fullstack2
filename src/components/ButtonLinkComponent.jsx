import { Link } from "react-router";

function ButtonLinkComponent({ href, children }) {
    const styles = {
        buttonStyle: 'w-full md:w-[200px] py-[1rem] px-[0.5rem] text-center font-black text-[1.8rem] bg-[var(--bg-button)] text-[var(--white-variant-hover)] cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)]'

    }

    return (
        <Link
            to={href}
            className={styles.buttonStyle}>
            {children}
        </Link>
    )
}

export default ButtonLinkComponent;


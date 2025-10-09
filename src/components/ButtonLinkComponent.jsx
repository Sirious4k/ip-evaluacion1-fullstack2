
function ButtonLinkComponent({ href, children }) {
    const styles = {
        buttonStyle: 'py-[1rem] px-[0.5rem] bg-[var(--bg-button)] w-full md:w-[200px] text-center font-black cursor-pointer text-[1.8rem] transition ease-in-out duration-300 hover:bg-[var(--bg-button-hover)] text-[var(--white-variant-hover)] '
    }

    return (
        <a href={href} className={styles.buttonStyle}>

            {children}

        </a>
    )
}

export default ButtonLinkComponent;


import '../index.css'
import Logo from '../assets/icons/logo.svg?react';





function LogoComponent() {
    const styles = {
        containerLogo: 'inline-flex items-center',
        logoSize: 'w-[8rem] h-auto'
    }
    return (
        <div className={styles.containerLogo}>
            <a href='index.html'>
                <Logo className={styles.logoSize} />
            </a>
        </div>
    );
}

export default LogoComponent;


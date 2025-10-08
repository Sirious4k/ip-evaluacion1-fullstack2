import '../index.css'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'


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


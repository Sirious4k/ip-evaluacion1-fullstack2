
import '../index.css'
import ArrowIcon from '../assets/icons/icon-arrow.svg?react'
// import { useEffect } from 'react';
// import { initForm } from '../utils/form-validation';
import { Link } from 'react-router-dom'


function LogIn() {
    const styles = {
        mainStyle: 'flex items-center justify-center min-h-[100vh] !mt-0 main-style  bg-linear-to-b  bg-[linear-gradient(to_bottom,_#00001f_50%,_#fefefe_50%)]  ',
    }

    return (
        <div className='container-estatico'>
            <main className={styles.mainStyle}>
                <div>
                    <Link>
                        <ArrowIcon />
                        <h2></h2>
                    </Link>
                </div>
                <form action="">
                    <div>
                        <label htmlFor="">
                            <span></span>
                        </label>
                        <input type="text" />

                        <label htmlFor="">
                            <span></span>
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <button
                            type='submit'
                        ></button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default LogIn;
import '../index.css'

function BoxComponent({ title, content }) {
    const styles = {
        Box: 'min-h-[200px] md:min-h-[150px] border-[0.2px]  border-[var(--hover)]/60 p-8 transform transition cursor-pointer scale-100 hover:scale-102 hover:bg-[var(--hover)]/80 duration-300 flex flex-col bg-[var(--bg-primary-color)] group',

        pContainer: 'flex-1 flex justify-center items-center',

        h2Box: 'text-[var(--white-variant)]  text-[2rem] uppercase mb-[20px] group-hover:text-[var(--bg-primary-color)]',

        textBox: 'text-[var(--white-variant)]/80 text-[2.2rem] text-center italic group-hover:text-[var(--bg-primary-color)]/80'
    }

    return (
        <div className={styles.Box}>
            <h2 className={styles.h2Box}>{title}</h2>
            <div className={styles.pContainer}>
                <p className={styles.textBox}>{content}</p>
            </div>
        </div>
    )
}


export default BoxComponent
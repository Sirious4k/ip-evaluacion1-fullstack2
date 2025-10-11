function BoxComponent({ title, content }) {
    const styles = {
        Box: 'flex flex-col min-h-[200px] md:min-h-[150px] p-8 bg-[var(--bg-primary-color)] border-[0.2px] border-[var(--hover)]/60 transform transition cursor-pointer scale-100 hover:scale-102 hover:bg-[var(--hover)]/80 duration-300 group',

        pContainer: 'flex-1 flex justify-center items-center',


    }


    return (
        <div className={styles.Box}>
            <h2 className='format-text-h2'>{title}</h2>
            <div className={styles.pContainer}>
                <p className='format-text-p'>{content}</p>
            </div>
        </div>
    )
}


export default BoxComponent
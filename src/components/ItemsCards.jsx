function ItemCard({ image, title, price }) {

    const styles = {
        boxItemSectionTwo: 'flex flex-col max-w-[250px] flex-shrink-0 pb-5 gap-5',
        containerImage: 'max-w-[250px] max-h-[200px] rounded-lg overflow-hidden',
        h1Items: 'text-5xl text-white truncate tracking-wider',
        h2Items: 'text-4xl text-amber-300'
    }
    return (
        <div className={styles.boxItemSectionTwo}>
            <div className={styles.containerImage}>
                <img
                    src={image}
                    alt=""
                    className='size-items' />
            </div>
            <h1 className={styles.h1Items}>{title}</h1>
            <h2 className={styles.h2Items}>{price}</h2>
        </div>
    );
}

export default ItemCard
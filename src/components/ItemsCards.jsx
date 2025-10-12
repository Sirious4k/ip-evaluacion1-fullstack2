function ItemCard({ product }) {
    const styles = {
        boxItemSectionTwo: 'flex flex-col w-full max-w-[300px] mb-5 ',
        containerImage: 'w-full h-[200px] rounded-lg overflow-hidden mb-[10px]',
        h1Items: 'text-5xl/15 text-white truncate tracking-wider mb-5',
        h2Items: 'text-4xl text-amber-300'



    };

    return (
        <div className="w-full grid  grid-cols-[repeat(auto-fill,minmax(250px,300px))] items-center">
            <div className={styles.boxItemSectionTwo}>
                <div className={styles.containerImage}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="size-items"
                    />
                </div>
                <h1 className={styles.h1Items}>{product.title}</h1>
                <h2 className={styles.h2Items}>${product.price}</h2>
            </div>
        </div>
    );
}


export default ItemCard
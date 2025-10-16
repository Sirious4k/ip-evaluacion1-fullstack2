import { useLocation } from "react-router-dom";
import Sidebar from "../components/SideBar";
import ItemCard from "../components/ItemsCards";
import { products as allProducts } from "../utils/products";

function Categoria() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const selectedCategory = query.get("cat") || "todas";

    const filteredProducts = allProducts.filter(
        product => selectedCategory === "todas" || product.category === selectedCategory
    );

    const categories = Array.from(new Set(allProducts.map(p => p.category)));

    return (
        <div className="container-body-normal gradient-main">
            <div className="main-style !py-20">
                <div className="max-width flex flex-col gap-[20px] md:gap-0 md:flex-row flex-shrink-0 pb-5">
                    <Sidebar categories={categories} selected={selectedCategory} />
                    <div
                        key={selectedCategory}
                        className="w-full grid gap-15 grid-cols-[repeat(auto-fill,minmax(270px,4fr))] items-center"
                    >
                        {filteredProducts.map(product => (
                            <ItemCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categoria;

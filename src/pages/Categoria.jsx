import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/SideBar";
import ItemCard from "../components/ItemsCards";
import { products as allProducts } from "../utils/products";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Categoria() {
    const query = useQuery();
    const selectedCat = query.get("cat") || "todas";

    const categories = useMemo(() => {
        const set = new Set(allProducts.map(p => p.category));
        return Array.from(set);
    }, []);

    const filtered = useMemo(() => {
        if (selectedCat === "todas") return allProducts;
        return allProducts.filter(p => p.category === selectedCat);
    }, [selectedCat]);

    return (
        <div className="container-body-normal">
            <div className="main-style !py-20">
                <div className="max-width flex flex-col gap-[20px] md:gap-0 md:flex-row flex-shrink-0 pb-5">
                    <Sidebar categories={categories} selected={selectedCat} className='' />
                    <div className="w-full grid gap-15 grid-cols-[repeat(auto-fill,minmax(270px,4fr))] items-center">


                        {filtered.map((product) => (
                            <ItemCard key={product.id} product={product} />
                        ))}

                        {filtered.length === 0 && (
                            <p className="text-gray-400 mt-20 text-center w-full">
                                No hay productos en esta categoría.
                            </p>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}

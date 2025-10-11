import { Link } from "react-router-dom";

export default function Sidebar({ selected }) {
    const base = "/categorias";

    return (
        <aside className="w-64 p-6 border-r flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Categorías</h2>
            <Link
                to={`${base}?type=computadoras`}
                className={`p-2 rounded ${selected === "computadoras" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            >
                Computadoras
            </Link>
            <Link
                to={`${base}?type=consolas`}
                className={`p-2 rounded ${selected === "consolas" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            >
                Consolas
            </Link>
            <Link
                to={base}
                className={`p-2 rounded ${!selected ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            >
                Todas
            </Link>
        </aside>
    );
}

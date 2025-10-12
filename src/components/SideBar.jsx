import { Link } from "react-router-dom";

function Sidebar({ categories = [], selected }) {
    const styles = {
        containerSidebar: 'flex flex-col h-full min-w-fit pr-10 ',
        title: 'format-text-h2 mb-4',
        linkDefault: 'flex format-text-p  !not-italic !text-white px-5 py-2 hover:bg-gray-700 !text-2xl hover:!bg-[var(--bg-button)] ',
        linkSelected: 'flex format-text-p !not-italic !text-white !opacity-100 bg-[var(--bg-button)] px-5 py-2  !text-2xl ',
    }

    return (
        <aside className={styles.containerSidebar}>
            <h2 className={styles.title}>Categorías</h2>
            <ul className="flex flex-col gap-1">
                <li >
                    <Link
                        to="/categoria"
                        className={selected === "todas" ? styles.linkSelected : styles.linkDefault}
                    >
                        Todas las Categorías
                    </Link>
                </li>
                {categories.map(cat => (
                    <li key={cat}>
                        <Link
                            to={`/categoria?cat=${encodeURIComponent(cat)}`}
                            className={selected === cat ? styles.linkSelected : styles.linkDefault}
                        >
                            {cat}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;

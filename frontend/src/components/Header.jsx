import { Link } from 'react-router-dom';

export default function Header({ title, links }) {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="max-w-7x1 mx-auto px-4 py-3 flex justify-between items-center">
                {/* Title or Logo */}
                <Link to="/" className="flex items-center gap-2">
                    {typeof title === 'string' && /\.(svg|png|jpe?g|webp|gif)$/.test(title) ? (
                        <img src={title} alt="Logo" className="h-8 w-8" />
                    ) : (
                        <span className="text-xl font-bold">{title}</span>
                    )}
                </Link>

                {/* Navigation Links */}
                <nav className="space-x-6">
                    {links.map(([path, name]) => (
                        <Link
                            key={path}
                            to={path}
                            className="hover:text-gray-300 transition"
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
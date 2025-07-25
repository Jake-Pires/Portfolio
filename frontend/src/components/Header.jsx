import { Link } from 'react-router-dom';

export default function Header({ links }) {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="max-w-7x1 mx-auto px-4 py-3 flex justify-between items-center">
                {/* Title */}
                <h1 className="text-x1 font-bold">Jake Nobre</h1>

                {/* Nav links */}
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
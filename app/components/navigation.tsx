import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </li>
                <li>
                    <Link href="/health" className="text-white hover:text-gray-300">Health Check</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
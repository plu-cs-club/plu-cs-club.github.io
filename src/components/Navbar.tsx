import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          PLU CS Club
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

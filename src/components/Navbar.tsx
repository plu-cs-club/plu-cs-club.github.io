import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `relative px-3 py-2 transition-all duration-300 ${isActive(path)
      ? 'text-[var(--matrix-green)] glow-text'
      : 'text-gray-400 hover:text-[var(--matrix-green)] hover:glow-text'
    }`;

  return (
    <nav className="glass-bg fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-[var(--matrix-green)] text-xl font-semibold tracking-wider hover:glow-text transition-all duration-300"
        >
          {'>'} PLU_CS_CLUB
        </Link>
        <div className="flex gap-2">
          <Link to="/" className={linkClass('/')}>
            /home
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            /about
          </Link>
          <Link to="/contact" className={linkClass('/contact')}>
            /contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

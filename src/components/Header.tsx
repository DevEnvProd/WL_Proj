import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm p-6 flex justify-between items-center">
      <Link to="/" className="font-heading text-3xl font-bold text-[#0B3B5B]">WANDERLUST</Link>
      <nav className="font-ui text-sm uppercase tracking-widest">
        <Link to="/destinations" className="mx-4">Destinations</Link>
        <Link to="/articles" className="mx-4">Stories</Link>
        <a href="#" className="mx-4">News</a>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0B3B5B] text-white p-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-2xl mb-4">WANDERLUST</h3>
          <p className="font-ui text-sm opacity-80">Stories from the road. News from the world.</p>
        </div>
        <div>
          <h4 className="font-subheading font-bold mb-4">Navigation</h4>
          <ul className="font-ui text-sm opacity-80 space-y-2">
            <li><Link to="/" className="hover:text-[#F9C74F]">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-[#F9C74F]">Destinations</Link></li>
            <li><Link to="/articles" className="hover:text-[#F9C74F]">Stories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-subheading font-bold mb-4">Partner</h4>
          <ul className="font-ui text-sm opacity-80 space-y-2">
            <li>
              <a 
                href="https://winbox666.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#F9C74F] underline flex items-center gap-1"
              >
                Winbox Official Partner
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-subheading font-bold mb-4">About</h4>
          <p className="font-ui text-sm opacity-80">
            A premium travel log & guide designed for world explorers. All information is static and curated carefully for quality.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} WANDERLUST. All rights reserved.</p>
        <p className="mt-2 md:mt-0">18+ Disclaimer: Content is meant for general informational and educational purposes only.</p>
      </div>
    </footer>
  );
}

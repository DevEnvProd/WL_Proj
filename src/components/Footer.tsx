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
          <ul className="font-ui text-sm opacity-80">
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/articles">Stories</Link></li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h4 className="font-subheading font-bold mb-4">Legal</h4>
          <ul className="font-ui text-sm opacity-80">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>18+ Disclaimer</li>
          </ul>
        </div>
        <div>
          <h4 className="font-subheading font-bold mb-4">Follow Us</h4>
          <p className="font-ui text-sm opacity-80">@wanderlust</p>
        </div>
      </div>
    </footer>
  );
}

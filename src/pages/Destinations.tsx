import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const continents = ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania', 'Middle East'];

const destinations = [
  { name: 'Kyoto, Japan', continent: 'Asia', stories: 12, image: 'https://picsum.photos/seed/kyoto/400/300' },
  { name: 'Tuscany, Italy', continent: 'Europe', stories: 8, image: 'https://picsum.photos/seed/tuscany/400/300' },
  { name: 'Banff, Canada', continent: 'Americas', stories: 5, image: 'https://picsum.photos/seed/banff/400/300' },
  { name: 'Marrakech, Morocco', continent: 'Africa', stories: 10, image: 'https://picsum.photos/seed/marrakech/400/300' },
];

export default function Destinations() {
  const [activeContinent, setActiveContinent] = useState('Asia');

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      <Header />
      <main className="max-w-7xl mx-auto p-8 pt-32">
        <h1 className="font-heading text-5xl mb-4 text-[#0B3B5B]">Destinations</h1>
        <p className="font-body text-xl mb-8">Guides and stories from around the world</p>
        
        <div className="flex space-x-4 mb-8">
          {continents.map(c => (
            <button 
              key={c} 
              onClick={() => setActiveContinent(c)}
              className={`font-subheading font-bold px-4 py-2 ${activeContinent === c ? 'text-[#C44536] border-b-2 border-[#C44536]' : 'text-[#2D3436]'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.filter(d => d.continent === activeContinent).map(d => (
            <div key={d.name} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={d.image} alt={d.name} className="w-full rounded-xl mb-4" referrerPolicy="no-referrer" />
              <h3 className="font-subheading font-bold text-lg">{d.name}</h3>
              <p className="font-ui text-sm mb-4">{d.stories} stories</p>
              <button className="bg-[#0B3B5B] text-white px-4 py-2 rounded-full font-ui text-sm uppercase tracking-wider">Explore</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

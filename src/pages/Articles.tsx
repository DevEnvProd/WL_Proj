import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const filters = ['All', 'Destinations', 'Tips', 'Food', 'Adventure', 'News'];

const articles = [
  { id: 1, title: 'Van Life Through Patagonia', category: 'Adventure', image: 'https://picsum.photos/seed/patagonia/400/300' },
  { id: 2, title: 'Best Coffee Shops in Kyoto', category: 'Food', image: 'https://picsum.photos/seed/kyoto/400/300' },
  { id: 3, title: 'Packing Tips for Long Trips', category: 'Tips', image: 'https://picsum.photos/seed/packing/400/300' },
  { id: 4, title: 'New Train Routes in Europe', category: 'News', image: 'https://picsum.photos/seed/train/400/300' },
  { id: 5, title: 'Hidden Gems in Tuscany', category: 'Destinations', image: 'https://picsum.photos/seed/tuscany/400/300' },
  { id: 6, title: 'Hiking the Rockies', category: 'Adventure', image: 'https://picsum.photos/seed/rockies/400/300' },
];

export default function Articles() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      <Header />
      <main className="max-w-7xl mx-auto p-8 pt-32">
        <h1 className="font-heading text-5xl mb-4 text-[#0B3B5B]">All Stories</h1>
        
        <div className="flex space-x-4 mb-8">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)}
              className={`font-subheading font-bold px-4 py-2 rounded-full ${activeFilter === f ? 'bg-[#C44536] text-white' : 'bg-white text-[#2D3436]'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.filter(a => activeFilter === 'All' || a.category === activeFilter).map(a => (
            <div key={a.id} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={a.image} alt={a.title} className="w-full rounded-xl mb-4" referrerPolicy="no-referrer" />
              <span className="font-ui text-xs uppercase tracking-wider text-[#C44536]">{a.category}</span>
              <h3 className="font-subheading font-bold text-lg mb-2">{a.title}</h3>
              <button className="text-[#0B3B5B] font-bold font-ui text-sm uppercase tracking-wider">Read More</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

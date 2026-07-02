import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

const filters = ['All', 'News', 'Adventure', 'Destinations', 'Tips', 'Food'];

export default function Articles() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredArticles = articles.filter(
    a => activeFilter === 'All' || a.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      <Header />
      <main className="max-w-7xl mx-auto p-8 pt-32">
        <h1 className="font-heading text-5xl mb-4 text-[#0B3B5B]">All Stories</h1>
        <p className="font-body text-xl mb-8">Premium travel news and curated digital lifestyles.</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)}
              className={`font-subheading font-bold px-4 py-2 rounded-full transition-colors ${
                activeFilter === f ? 'bg-[#C44536] text-white' : 'bg-white text-[#2D3436] hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(a => (
            <div key={a.id} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <Link to={`/article/${a.id}`} className="block overflow-hidden rounded-xl mb-4 group">
                  <img 
                    src={a.image} 
                    alt={a.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                    referrerPolicy="no-referrer" 
                  />
                </Link>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-ui text-xs uppercase tracking-wider text-[#C44536] font-semibold">{a.category}</span>
                  <span className="font-ui text-xs text-gray-400">{a.date}</span>
                </div>
                <Link to={`/article/${a.id}`}>
                  <h3 className="font-heading font-bold text-xl mb-2 text-[#0B3B5B] hover:text-[#C44536] transition-colors">{a.title}</h3>
                </Link>
                <p className="font-body text-sm text-gray-600 line-clamp-2 mb-4">{a.excerpt}</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                <span className="font-ui text-xs text-gray-500 font-medium">By {a.author}</span>
                <Link to={`/article/${a.id}`} className="text-[#0B3B5B] font-bold font-ui text-xs uppercase tracking-wider hover:text-[#C44536] transition-colors">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

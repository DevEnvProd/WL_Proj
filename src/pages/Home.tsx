import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

const categories = [
  { name: 'News', icon: '📰' },
  { name: 'Adventure', icon: '🧗' },
  { name: 'Destinations', icon: '🌍' },
  { name: 'Tips', icon: '💡' },
  { name: 'Food', icon: '🍜' },
];

const featuredDestinations = [
  { name: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', tag: 'Temples & Tea' },
  { name: 'Tuscany, Italy', image: 'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?auto=format&fit=crop&w=600&q=80', tag: 'Sunsets & Wine' },
  { name: 'Banff, Canada', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', tag: 'Lakes & Peaks' },
  { name: 'Marrakech, Morocco', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', tag: 'Colors & Spices' },
];

export default function Home() {
  const navigate = useNavigate();
  
  // Featured Story (first article)
  const featuredStory = articles[0];
  
  // Latest 6 articles for grid
  const latestArticles = articles.slice(1, 7);
  
  // News items for ticker
  const tickerItems = articles.slice(0, 5).map(a => a.title);

  const scrollContainer = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F8F9FA] text-[#2D3436]"
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-subheading text-sm md:text-base uppercase tracking-widest text-[#F9C74F] mb-4 font-bold"
          >
            Stories from the road. News from the world.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-5xl md:text-8xl font-black tracking-tight leading-none mb-6"
          >
            Discover the world through our lens
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 font-light"
          >
            Travel stories, news, and guides from every corner of the earth
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => scrollContainer('main-content')}
            className="bg-[#C44536] hover:bg-opacity-90 text-white px-10 py-4 rounded-full font-ui uppercase tracking-widest text-xs font-bold transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Start Exploring
          </motion.button>
        </div>
      </section>

      {/* News Ticker */}
      <div className="bg-[#0B3B5B] text-white py-3 overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <span className="bg-[#C44536] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded flex-shrink-0 animate-pulse">
            LATEST NEWS
          </span>
          <div className="relative w-full overflow-hidden h-6">
            <div className="absolute flex gap-12 whitespace-nowrap animate-marquee">
              {tickerItems.map((item, idx) => (
                <span key={idx} className="font-ui text-xs tracking-wider opacity-90 flex items-center gap-2">
                  <span className="text-[#F9C74F]">★</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* Featured Story */}
        {featuredStory && (
          <section className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0B3B5B] border-b border-gray-100 pb-4">
              The Road Less Traveled
            </h2>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-100">
              <div className="lg:col-span-7 h-[350px] lg:h-auto overflow-hidden relative">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title} 
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <span className="absolute top-6 left-6 bg-[#C44536] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded-full">
                  Featured News
                </span>
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-ui uppercase tracking-widest text-gray-400 font-semibold">{featuredStory.date}</span>
                  <h3 className="font-heading text-2xl md:text-4xl font-black text-[#0B3B5B] leading-tight">
                    {featuredStory.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
                    {featuredStory.excerpt}
                  </p>
                </div>
                <div className="pt-8 border-t border-gray-100 mt-6 flex justify-between items-center">
                  <span className="font-ui text-xs text-gray-500">By {featuredStory.author}</span>
                  <Link 
                    to={`/article/${featuredStory.id}`}
                    className="bg-[#F9C74F] hover:bg-opacity-95 text-[#0B3B5B] px-6 py-3 rounded-full font-ui uppercase tracking-wider text-xs font-black transition-transform duration-300 hover:scale-102"
                  >
                    Read Story &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0B3B5B]">Explore Categories</h2>
            <p className="font-body text-gray-600">Find stories curated carefully by themes and lifestyles.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map(cat => (
              <Link 
                to="/articles" 
                key={cat.name} 
                className="bg-[#FFF9F0] border border-[#F9C74F]/10 hover:border-[#F9C74F]/40 p-6 rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                <h3 className="font-subheading font-bold text-[#0B3B5B] group-hover:text-[#C44536] transition-colors">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-gray-100 pb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-[#0B3B5B]">Latest Updates</h2>
            <Link to="/articles" className="font-ui text-xs uppercase tracking-widest text-[#C44536] font-bold hover:underline">
              View All Stories &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map(a => (
              <div key={a.id} className="bg-white p-4 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <Link to={`/article/${a.id}`} className="block overflow-hidden rounded-2xl mb-4 group">
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-ui text-[10px] uppercase tracking-wider text-[#C44536] font-bold">{a.category}</span>
                    <span className="font-ui text-xs text-gray-400">{a.date}</span>
                  </div>
                  <Link to={`/article/${a.id}`}>
                    <h4 className="font-heading font-bold text-lg text-[#0B3B5B] hover:text-[#C44536] transition-colors mb-2 leading-snug">
                      {a.title}
                    </h4>
                  </Link>
                  <p className="font-body text-xs text-gray-500 line-clamp-2">{a.excerpt}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-ui text-[10px] text-gray-400">By {a.author}</span>
                  <Link to={`/article/${a.id}`} className="text-[#0B3B5B] font-bold text-xs uppercase tracking-wider font-ui hover:text-[#C44536] transition-colors">
                    Read &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Destination Guides */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#0B3B5B]">Spotlight Destinations</h2>
            <p className="font-body text-gray-600">Curated world capitals and serene getaways waiting for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map(d => (
              <div key={d.name} className="relative h-80 rounded-3xl overflow-hidden group shadow-sm">
                <img 
                  src={d.image} 
                  alt={d.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <span className="font-ui text-[10px] uppercase tracking-widest text-[#F9C74F] font-semibold">{d.tag}</span>
                  <h4 className="font-heading text-xl font-bold">{d.name}</h4>
                  <Link to="/destinations" className="text-xs font-ui underline opacity-80 hover:opacity-100 block pt-1">Explore Guide</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exclusive Partner Section */}
        <section className="bg-[#FFF9F0] border border-[#F9C74F]/20 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="bg-[#0B3B5B] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded-full">
              Recommended Portal
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#0B3B5B]">
              Discover Global Online Leisure with Winbox
            </h3>
            <p className="font-body text-gray-700 leading-relaxed text-sm md:text-base">
              Explore professional slot systems, live tables, and secure sports betting directly through our premium verified partner. Seamless navigation, fast withdrawals, and ultimate cybersecurity standard.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a 
              href="https://winbox666.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center bg-[#C44536] text-white hover:bg-opacity-95 py-4 rounded-xl font-ui font-bold uppercase text-xs tracking-wider transition-transform hover:scale-101 shadow-sm"
            >
              Play winbox now
            </a>
            <a 
              href="https://winbox666.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center bg-[#0B3B5B] text-white hover:bg-opacity-95 py-4 rounded-xl font-ui font-semibold uppercase text-xs tracking-wider transition-transform hover:scale-101 shadow-sm"
            >
              Open winbox666
            </a>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl text-center max-w-3xl mx-auto space-y-6">
          <div className="space-y-3">
            <h3 className="font-heading text-3xl font-bold text-[#0B3B5B]">Get Wanderlust in your inbox</h3>
            <p className="font-body text-gray-500 text-sm md:text-base">Weekly digests of travel stories, destination guides, and premium news updates.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-xl border border-gray-200 font-ui text-sm focus:outline-none focus:border-[#C44536]"
            />
            <button className="bg-[#0B3B5B] hover:bg-opacity-95 text-white px-6 py-3 rounded-xl font-ui font-bold uppercase text-xs tracking-wider transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-gray-400 font-ui uppercase tracking-wider">No spam, just inspiration.</p>
        </section>

      </main>

      <Footer />
    </motion.div>
  );
}

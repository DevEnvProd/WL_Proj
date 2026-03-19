import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const categories = [
  { name: 'Destinations', icon: '🌍' },
  { name: 'Travel Tips', icon: '💡' },
  { name: 'Food & Drink', icon: '🍜' },
  { name: 'Adventure', icon: '🧗' },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F8F9FA] text-[#2D3436]"
    >
      <Header />

      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <img
          src="https://picsum.photos/seed/mountain/1920/1080"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <h2 className="font-heading text-6xl md:text-8xl mb-4">Discover the world through our lens</h2>
          <p className="font-subheading text-xl mb-8">Travel stories, news, and guides from every corner of the earth</p>
          <button className="bg-[#C44536] text-white px-8 py-3 rounded-full font-ui uppercase tracking-wider">Start Exploring</button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto p-8">
        <section className="mb-16">
          <h2 className="font-heading text-4xl mb-8 text-[#0B3B5B]">The Road Less Traveled</h2>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <img src="https://picsum.photos/seed/patagonia/800/400" alt="Patagonia" className="w-full rounded-xl mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-heading text-3xl mb-2">Van Life Through Patagonia: 3 Months on the Road</h3>
            <p className="font-body text-lg mb-4">An epic journey through the rugged landscapes of South America.</p>
            <button className="bg-[#F9C74F] text-[#0B3B5B] px-6 py-2 rounded-full font-ui uppercase tracking-wider">Read Story</button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-4xl mb-8 text-[#0B3B5B]">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(cat => (
              <div key={cat.name} className="bg-[#FFF9F0] p-6 rounded-2xl text-center">
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h3 className="font-subheading font-bold">{cat.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}

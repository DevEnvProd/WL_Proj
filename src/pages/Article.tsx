import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436] flex flex-col justify-between">
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4 text-[#0B3B5B]">Article Not Found</h1>
          <p className="font-body text-lg mb-8 text-gray-600">The story you are looking for might have moved or is no longer available.</p>
          <Link to="/articles" className="bg-[#C44536] text-white px-6 py-3 rounded-full font-ui uppercase tracking-wider text-sm font-semibold hover:bg-opacity-90 transition-colors">
            Back to All Stories
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get 3 related/other articles for recommendations
  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      <Header />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 w-full text-white">
          <span className="font-ui text-xs uppercase tracking-widest bg-[#C44536] text-white px-3 py-1 rounded-full font-semibold">
            {article.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 font-ui text-sm opacity-90">
            <div>By <span className="font-semibold">{article.author}</span></div>
            <div>•</div>
            <div>{article.date}</div>
            <div>•</div>
            <div>{article.readTime}</div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Article Content */}
        <main className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <div className="prose prose-lg max-w-none">
            {/* Pull Quote style intro */}
            <div className="border-l-4 border-[#F9C74F] pl-6 py-2 mb-8 bg-[#FFF9F0] rounded-r-xl">
              <p className="font-heading italic text-xl text-[#0B3B5B] leading-relaxed">
                {article.excerpt}
              </p>
            </div>
            
            {/* Rich text body using Lora font */}
            <div 
              className="font-body text-gray-700 text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center flex-wrap gap-4">
            <Link to="/articles" className="font-ui text-sm font-bold text-[#0B3B5B] hover:text-[#C44536] transition-colors flex items-center gap-2">
              &larr; Back to All Stories
            </Link>
            
            <div className="flex items-center gap-2 text-xs text-gray-400 font-ui">
              <span>Category: {article.category}</span>
              <span>•</span>
              <span>Published: {article.date}</span>
            </div>
          </div>
        </main>

        {/* Right Side: Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Winbox Info Badge */}
          <div className="bg-[#0B3B5B] text-white p-6 rounded-3xl shadow-sm">
            <h4 className="font-heading text-xl font-bold mb-3">Featured Partner</h4>
            <p className="font-ui text-sm opacity-90 mb-6 leading-relaxed">
              Explore safe, reliable, and premium mobile casino gaming with Winbox - the world's leading online gaming portal for adventurers.
            </p>
            <div className="space-y-3">
              <a 
                href="https://winbox666.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-[#F9C74F] text-[#0B3B5B] py-3 rounded-xl font-ui font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors"
              >
                Visit winbox
              </a>
              <a 
                href="https://winbox666.online" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-transparent border border-white/40 text-white py-3 rounded-xl font-ui font-semibold uppercase text-xs tracking-wider hover:bg-white/10 transition-colors"
              >
                Visit winbox666
              </a>
            </div>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="bg-[#FFF9F0] p-6 rounded-3xl border border-[#F9C74F]/20">
            <h4 className="font-heading text-lg font-bold text-[#0B3B5B] mb-4">Read Next</h4>
            <div className="space-y-4">
              {relatedArticles.map(rel => (
                <Link to={`/article/${rel.id}`} key={rel.id} className="block group">
                  <span className="font-ui text-[10px] uppercase tracking-wider text-[#C44536] font-semibold">
                    {rel.category}
                  </span>
                  <h5 className="font-heading font-bold text-sm text-[#0B3B5B] group-hover:text-[#C44536] transition-colors mt-1 line-clamp-2">
                    {rel.title}
                  </h5>
                  <span className="font-ui text-[10px] text-gray-400 block mt-1">
                    {rel.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Recommended Articles Carousel Footer */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-[#0B3B5B] mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(a => (
              <div key={a.id} className="bg-[#F8F9FA] p-4 rounded-2xl flex flex-col justify-between hover:shadow-sm transition-shadow">
                <div>
                  <Link to={`/article/${a.id}`} className="block overflow-hidden rounded-xl mb-4 group">
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" 
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <span className="font-ui text-[10px] uppercase tracking-wider text-[#C44536] font-semibold">
                    {a.category}
                  </span>
                  <Link to={`/article/${a.id}`}>
                    <h4 className="font-heading font-bold text-base text-[#0B3B5B] hover:text-[#C44536] transition-colors mt-1 mb-2 line-clamp-2">
                      {a.title}
                    </h4>
                  </Link>
                </div>
                <Link to={`/article/${a.id}`} className="text-[#C44536] font-bold font-ui text-xs uppercase tracking-wider mt-4">
                  Read Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

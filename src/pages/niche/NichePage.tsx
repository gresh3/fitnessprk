import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import heroMoney from '../../assets/illustrations/hero_money.png';
import heroFitness from '../../assets/illustrations/hero_fitness.png';
import heroRelationships from '../../assets/illustrations/hero_relationships.png';
import heroHealth from '../../assets/illustrations/hero_health.png';

const NichePage = ({ niche }: { niche: string }) => {
  const capitalizedNiche = niche.charAt(0).toUpperCase() + niche.slice(1);
  
  const heroes: { [key: string]: string } = {
    money: heroMoney,
    fitness: heroFitness,
    relationships: heroRelationships,
    health: heroHealth
  };

  const descriptions: { [key: string]: string } = {
    money: "Master your finances, discover passive income streams, and build lasting wealth.",
    fitness: "Reach your peak physical potential with science-backed gear and supplement reviews.",
    relationships: "Build deeper connections and master social dynamics with our expert guides.",
    health: "Optimize your sleep, energy, and mental performance with the latest biohacking tools."
  };

  const nicheProducts = products.filter(p => p.niche === niche);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-3/5 mb-12 md:mb-0 pr-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{capitalizedNiche} Optimization</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{descriptions[niche]}</p>
          </div>
          <div className="md:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img src={heroes[niche]} alt={capitalizedNiche} className="relative rounded-2xl shadow-2xl border border-white border-opacity-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-primary mb-2">Top Recommended {capitalizedNiche} Products</h2>
              <p className="text-gray-600">Hand-picked, tested, and vetted by our expert team.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nicheProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-56 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                    {product.name}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white shadow-sm text-primary text-[10px] font-black px-2 py-1 rounded border border-gray-100">2025 EDITION</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex text-cta">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs font-bold">4.9/5</span>
                  </div>
                  <h3 className="font-bold text-xl text-primary leading-tight mb-3 group-hover:text-secondary transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">{product.tagline}</p>
                  <Link to={`/products/${product.id}`} className="block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition-colors shadow-sm">
                    Read Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NichePage;

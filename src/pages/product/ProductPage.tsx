import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import trustBadge from '../../assets/components/trust_badge.svg';

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.id === slug);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="text-secondary mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-400 font-medium uppercase tracking-wider">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/${product.niche}`} className="hover:text-secondary">{product.niche}</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="bg-background rounded-3xl p-8 flex items-center justify-center border border-gray-100 shadow-sm relative overflow-hidden">
              <img src={trustBadge} alt="Trusted Review" className="absolute top-4 left-4 w-16 h-16 opacity-50" />
              <div className="w-full aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                {product.name} Product Image
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="bg-secondary bg-opacity-10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase w-fit mb-4">
              Best in {product.niche}
            </span>
            <h1 className="text-4xl font-bold text-primary mb-4 leading-tight">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.tagline}</p>
            
            <div className="bg-background p-6 rounded-2xl border border-secondary border-opacity-20 mb-8 shadow-sm">
              <h3 className="font-bold text-primary mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Expert Verdict
              </h3>
              <p className="text-gray-700 italic">"{product.verdict}"</p>
            </div>
            
            <a href={`/go/${product.link}`} className="block w-full bg-cta text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
              Check Latest Price & Availability
            </a>
            <p className="text-center text-xs text-gray-400 mt-4 italic">
              Purchases via our links may earn us a commission at no cost to you.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6">Detailed Overview</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Why it matters in 2025</h3>
            <p className="text-gray-600">In an increasingly crowded market, the {product.name} stands out by delivering consistent results and high-quality build. Our testing confirms that it's a top-tier choice for those serious about their {product.niche}.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-4 flex items-center text-xl">
                <span className="bg-green-200 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                The Pros
              </h3>
              <ul className="space-y-3">
                {product.pros.map(pro => (
                  <li key={pro} className="text-green-800 font-medium flex items-start">
                    <span className="mr-2">•</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h3 className="font-bold text-red-800 mb-4 flex items-center text-xl">
                <span className="bg-red-200 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </span>
                The Cons
              </h3>
              <ul className="space-y-3">
                {product.cons.map(con => (
                  <li key={con} className="text-red-800 font-medium flex items-start">
                    <span className="mr-2">•</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

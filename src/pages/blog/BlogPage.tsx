import { Link } from 'react-router-dom';
import heroHome from '../../assets/illustrations/hero_home.png';
import heroMoney from '../../assets/illustrations/hero_money.png';
import heroFitness from '../../assets/illustrations/hero_fitness.png';
import heroRelationships from '../../assets/illustrations/hero_relationships.png';
import heroHealth from '../../assets/illustrations/hero_health.png';

const BlogPage = () => {
  const posts = [
    {
      title: "Best Affiliate Products for Self-Improvement in 2025: The Ultimate Roundup",
      slug: "best-affiliate-products-self-improvement-2025",
      excerpt: "Whether you're looking to boost your bank account, get in shape, or hack your health, these are the top-performing tools for 2025.",
      category: "Roundup",
      image: heroHome,
      date: "May 22, 2024"
    },
    {
      title: "5 Passive Income Streams to Start in 2025: A Beginner's Guide",
      slug: "passive-income-2025",
      excerpt: "Passive income is the holy grail of financial freedom. Learn 5 realistic ways to start making money while you sleep this year.",
      category: "Money",
      image: heroMoney,
      date: "May 23, 2024"
    },
    {
      title: "Building a Home Gym on a Budget: Essential Gear for 2025",
      slug: "home-gym-budget-2025",
      excerpt: "Stop overpaying for gym memberships. We break down the most essential, space-saving gear you need for a world-class home gym.",
      category: "Fitness",
      image: heroFitness,
      date: "May 24, 2024"
    },
    {
      title: "Is Online Therapy Worth It? My Honest Experience in 2025",
      slug: "online-therapy-review-2025",
      excerpt: "Mental health is the foundation of growth. I spent three months using Online-Therapy.com; here is my unfiltered verdict.",
      category: "Relationships",
      image: heroRelationships,
      date: "May 25, 2024"
    },
    {
      title: "Why Biohackers are Obsessed with Oura Ring Data in 2025",
      slug: "oura-ring-biohacking-2025",
      excerpt: "Data-driven health is here. See how the Oura Ring Gen3 can transform your sleep, energy, and readiness scores.",
      category: "Health",
      image: heroHealth,
      date: "May 26, 2024"
    }
  ];

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">AutoAffiliate Blog</h1>
          <p className="text-xl text-gray-600">Strategies and tools for a better you.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <div key={post.slug} className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 flex flex-col md:flex-row' : ''}`}>
              <div className={`${index === 0 ? 'md:w-1/2 h-64 md:h-auto' : 'h-64'} bg-gray-200 overflow-hidden relative`}>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className={`p-8 ${index === 0 ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-secondary bg-opacity-10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h2 className={`${index === 0 ? 'text-3xl' : 'text-2xl'} font-bold text-primary mb-4 group-hover:text-secondary transition-colors`}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-secondary font-bold flex items-center hover:translate-x-1 transition-transform">
                  Read Full Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

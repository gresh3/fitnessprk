import { DollarSign, Dumbbell, Heart, Sprout } from 'lucide-react';
import { useEffect } from 'react';
import heroHome from '../../assets/illustrations/hero_home.png';

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fitnessprk.kit.com/5301921de6/index.js';
    script.async = true;
    script.setAttribute('data-uid', '5301921de6');
    document.getElementById('kit-form')?.appendChild(script);
  }, []);

  return (
    <div className="bg-background">
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Upgrade Your Life with <span className="text-secondary">Trusted</span> Recommendations
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl">
              We research and test the best products in wealth, health, and happiness so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-cta text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
                Explore Top Products
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Read Our Blog
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={heroHome} alt="AutoAffiliate Life Improvement" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-5 transform skew-x-12 translate-x-24"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Expert Advice Across Every Niche</h2>
            <p className="text-gray-600 text-lg">Detailed reviews and curated lists tailored to your specific life goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <NicheCard
              title="Money"
              description="Side hustles, investing, and financial freedom guides."
              link="/money"
              icon={<DollarSign className="w-8 h-8 text-white" />}
              color="bg-blue-500"
            />
            <NicheCard
              title="Fitness"
              description="Supplements, home gym gear, and workout reviews."
              link="/fitness"
              icon={<Dumbbell className="w-8 h-8 text-white" />}
              color="bg-green-500"
            />
            <NicheCard
              title="Relationships"
              description="Social skills, dating advice, and communication tools."
              link="/relationships"
              icon={<Heart className="w-8 h-8 text-white" />}
              color="bg-red-500"
            />
            <NicheCard
              title="Health"
              description="Sleep optimization, mental wellness, and biohacking."
              link="/health"
              icon={<Sprout className="w-8 h-8 text-white" />}
              color="bg-teal-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Join 10,000+ Life Hackers</h2>
              <p className="text-gray-300 text-lg">Get our weekly "Top 3" list of life-improving products and strategies delivered to your inbox.</p>
            </div>
            <div className="md:w-5/12 w-full">
              <div id="kit-form"></div>
              <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">No spam, ever. Unsubscribe with one click.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NicheCard = ({ title, description, link, icon, color }: { title: string; description: string; link: string; icon: any; color: string }) => (
  <a href={link} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
    <span className="text-secondary font-bold flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </a>
);

export default HomePage;
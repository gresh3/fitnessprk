const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoAffiliate Pro</h3>
            <p className="text-gray-300">Honest, high-value recommendations for your wealth, health, and happiness.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/money" className="text-gray-400 hover:text-secondary transition-colors">Money</a></li>
              <li><a href="/fitness" className="text-gray-400 hover:text-secondary transition-colors">Fitness</a></li>
              <li><a href="/relationships" className="text-gray-400 hover:text-secondary transition-colors">Relationships</a></li>
              <li><a href="/health" className="text-gray-400 hover:text-secondary transition-colors">Health</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Get the best life-improving tips delivered weekly.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white text-primary px-4 py-2 rounded-l w-full focus:outline-none" 
              />
              <button className="bg-cta px-4 py-2 rounded-r hover:bg-opacity-90 transition font-bold">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoAffiliate Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

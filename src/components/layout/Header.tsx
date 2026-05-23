import { Link } from 'react-router-dom';
import logo from '../../assets/branding/logo.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="AutoAffiliate Pro" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-primary hidden sm:inline">AutoAffiliate Pro</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/money" className="text-primary font-medium hover:text-secondary transition-colors">Money</Link>
          <Link to="/fitness" className="text-primary font-medium hover:text-secondary transition-colors">Fitness</Link>
          <Link to="/relationships" className="text-primary font-medium hover:text-secondary transition-colors">Relationships</Link>
          <Link to="/health" className="text-primary font-medium hover:text-secondary transition-colors">Health</Link>
          <Link to="/blog" className="text-primary font-medium hover:text-secondary transition-colors">Blog</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/contact" className="bg-cta text-white px-4 py-2 rounded font-bold hover:bg-opacity-90 transition">Join Now</Link>
          <button className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

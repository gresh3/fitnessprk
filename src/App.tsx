import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/home/HomePage';
import NichePage from './pages/niche/NichePage';
import ProductPage from './pages/product/ProductPage';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import RedirectPage from './pages/RedirectPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/money" element={<NichePage niche="money" />} />
            <Route path="/fitness" element={<NichePage niche="fitness" />} />
            <Route path="/relationships" element={<NichePage niche="relationships" />} />
            <Route path="/health" element={<NichePage niche="health" />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/go/:slug" element={<RedirectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

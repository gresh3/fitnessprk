import { useParams, Link } from 'react-router-dom';
import { posts } from '../../data/posts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center bg-background min-h-screen">
        <h1 className="text-2xl font-bold text-primary">Post not found</h1>
        <Link to="/blog" className="text-secondary mt-4 inline-block font-bold">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <article className="container mx-auto px-4 max-w-3xl">
        <Link to="/blog" className="text-secondary font-bold flex items-center mb-8 hover:-translate-x-1 transition-transform group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-secondary bg-opacity-10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase">{post.category}</span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">AP</div>
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-tight">{post.author}</span>
              <span className="text-xs">Expert Reviewer</span>
            </div>
          </div>
        </header>
        
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h4 className="font-bold text-primary mb-2 italic">Affiliate Disclosure</h4>
            <p className="text-sm text-gray-500">
              AutoAffiliate Pro is supported by its audience. When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you. We only recommend products we have researched or used ourselves.
            </p>
          </div>
          
          <div className="mt-12 flex justify-between items-center">
            <div className="flex space-x-4">
              <span className="text-sm font-bold text-primary">Share:</span>
              <button className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium">Twitter</button>
              <button className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium">Facebook</button>
              <button className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium">LinkedIn</button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import affiliateLinks from '../data/links.json';

const RedirectPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    const links: { [key: string]: string } = affiliateLinks;
    const targetUrl = links[slug || ''] || '/';
    
    // Simulate tracking delay
    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 1000);

    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mb-4"></div>
      <p className="text-gray-600">Redirecting to our partner...</p>
      <p className="text-sm text-gray-400 mt-2">Thanks for supporting AutoAffiliate Pro!</p>
    </div>
  );
};

export default RedirectPage;

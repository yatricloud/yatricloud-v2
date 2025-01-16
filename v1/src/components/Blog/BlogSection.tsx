import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { ViewAllBlogs } from './ViewAllBlogs';
import { fetchBlogPosts } from './blogUtils';

interface BlogSectionProps {
  onViewAll: () => void;
}

export function BlogSection({ onViewAll }: BlogSectionProps) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <>
      <section className="relative bg-[#0d1117] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Latest from our blog</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 text-glow">Stay Updated</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover insights, tutorials, and success stories from our community
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-[#161b22] rounded-lg h-96" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>

              {posts.length > 3 && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-sky-500/10 
                      text-sky-400 hover:bg-sky-500/20 transition-all duration-200 group"
                  >
                    {showAll ? 'Show Less' : 'Show All Posts'}
                    <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 
                      ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <ViewAllBlogs onViewAll={onViewAll} />
    </>
  );
}
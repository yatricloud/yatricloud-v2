import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Filter } from 'lucide-react';
import { BlogCard } from '../../components/Blog/BlogCard';
import { BlogSkeleton } from './BlogSkeleton';
import { fetchMediumPosts } from '../../utils/blog';
import type { BlogPost } from '../../types/blog';

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts = await fetchMediumPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (error) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error loading blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const categories = ['All', ...new Set(posts.flatMap(post => post.categories))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Yatri Cloud Blog</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 text-glow">Latest Articles & Updates</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay up to date with the latest in cloud computing, DevOps, and technology
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-white appearance-none cursor-pointer focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className="text-center text-red-400 mb-8">
              {error}
            </div>
          )}

          {isLoading ? (
            <BlogSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
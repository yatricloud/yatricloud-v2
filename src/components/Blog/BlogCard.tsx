import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative bg-[#161b22] rounded-lg overflow-hidden border border-[#30363d] hover:border-sky-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-50" />
      </div>
      
      <div className="p-6 relative">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(post.pubDate)}
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <User className="w-4 h-4 mr-1" />
            {post.creator}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 3).map((category, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400"
            >
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </span>
          ))}
        </div>
        
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors"
        >
          Read more
          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
            <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  );
}
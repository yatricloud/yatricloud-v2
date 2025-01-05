import React from 'react';
import { Play, User, ThumbsUp } from 'lucide-react';
import { formatViews } from '../../utils/format';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  author: string;
  views: string;
}

export function VideoCard({ title, thumbnail, author, views }: VideoCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:glow">
      <div className="relative aspect-video">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-white line-clamp-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            {formatViews(views)}
          </div>
        </div>
      </div>
    </div>
  );
}
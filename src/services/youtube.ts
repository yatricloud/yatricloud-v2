import { YOUTUBE_CONFIG } from '../config/youtube';
import { YouTubeVideo } from '../types/youtube';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Getting Started with AWS Cloud',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    author: 'Cloud Expert',
    views: '1.2K'
  },
  {
    id: '2',
    title: 'Azure DevOps Pipeline Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1600',
    author: 'DevOps Guide',
    views: '856'
  },
  {
    id: '3',
    title: 'Kubernetes for Beginners',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1600',
    author: 'K8s Master',
    views: '2.1K'
  }
];

export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const url = new URL(`${BASE_URL}/search`);
    const params = {
      key: YOUTUBE_CONFIG.API_KEY,
      channelId: YOUTUBE_CONFIG.CHANNEL_ID,
      part: 'snippet,id',
      order: 'date',
      maxResults: YOUTUBE_CONFIG.MAX_RESULTS.toString(),
      type: 'video'
    };

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(url.toString())}`);
    
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.items?.length) {
      return FALLBACK_VIDEOS;
    }

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      author: item.snippet.channelTitle,
      views: 'New'
    }));
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
    return FALLBACK_VIDEOS;
  }
}
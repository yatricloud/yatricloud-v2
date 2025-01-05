import { YouTubeVideo } from '../types/youtube';

const YOUTUBE_API_KEY = "AIzaSyAzFzSc6U0T_JNWyxJqAo9AQcHbaMsAGmk";
const CHANNEL_ID = "UC0-tQsJ6S9mp2FYiaunFCYw";

export async function fetchLatestVideos(maxResults: number = 6): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }

    const data = await response.json();
    
    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: new Date(item.snippet.publishedAt),
      description: item.snippet.description
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}
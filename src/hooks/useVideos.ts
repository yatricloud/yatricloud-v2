import { useState, useEffect } from 'react';
import { Video } from '../types/video';
import { fetchYouTubeVideos } from '../services/youtube';

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadVideos() {
      try {
        setIsLoading(true);
        const fetchedVideos = await fetchYouTubeVideos();
        setVideos(fetchedVideos);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load videos'));
        setVideos([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadVideos();
  }, []);

  return { videos, isLoading, error };
}
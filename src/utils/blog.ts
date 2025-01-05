import { BlogPost } from '../types/blog';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
];

export async function fetchMediumPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent('https://blog.yatricloud.com/feed')}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    if (!text || text.trim() === '') {
      throw new Error('Empty response received');
    }
    
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    
    const parserError = xml.querySelector('parsererror');
    if (parserError) {
      throw new Error('XML parsing failed');
    }
    
    const items = xml.querySelectorAll('item');
    
    if (!items || items.length === 0) {
      throw new Error('No blog posts found');
    }

    return Array.from(items).map((item, index) => {
      // Get content from either content:encoded or description
      const content = item.querySelector('content\\:encoded')?.textContent || 
                     item.querySelector('description')?.textContent || '';
      
      // Try multiple methods to find thumbnail
      const thumbnail = findThumbnail(content, index);

      const excerpt = extractExcerpt(content);

      return {
        title: item.querySelector('title')?.textContent || 'Untitled Post',
        link: item.querySelector('link')?.textContent || '#',
        pubDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
        creator: item.querySelector('dc\\:creator')?.textContent || 'Anonymous',
        content,
        categories: Array.from(item.querySelectorAll('category'))
          .map(cat => cat.textContent || '')
          .filter(Boolean),
        thumbnail,
        excerpt
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch blog posts');
  }
}

function findThumbnail(content: string, fallbackIndex: number): string {
  try {
    // Try to find Medium's full-size image
    const mediumImgMatch = content.match(/<img[^>]+src="([^"]+(?:max|fit)\/[^"]+)"/);
    if (mediumImgMatch?.[1]) {
      return mediumImgMatch[1];
    }

    // Try to find any image with common image extensions
    const imgMatch = content.match(/<img[^>]+src="([^"]+\.(?:jpg|jpeg|png|gif|webp)[^"]*)"[^>]*>/i);
    if (imgMatch?.[1]) {
      return imgMatch[1];
    }

    // Try to find figure with data-src
    const figureMatch = content.match(/figure[^>]+data-src="([^"]+)"/);
    if (figureMatch?.[1]) {
      return figureMatch[1];
    }

    // If no image found, use fallback
    return FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length];
  } catch (error) {
    console.warn('Error extracting thumbnail:', error);
    return FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length];
  }
}

function extractExcerpt(content: string): string {
  // Remove HTML tags and decode entities
  const div = document.createElement('div');
  div.innerHTML = content;
  const strippedContent = div.textContent || div.innerText || '';
  
  // Clean up whitespace
  const cleanContent = strippedContent.replace(/\s+/g, ' ').trim();
  
  return cleanContent.length > 160 
    ? cleanContent.slice(0, 157) + '...'
    : cleanContent;
}

export function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.warn('Invalid date format:', dateString);
    return 'Date unavailable';
  }
}
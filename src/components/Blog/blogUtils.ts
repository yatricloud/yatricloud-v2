interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('https://blog.yatricloud.com/feed');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');

    return Array.from(items).slice(0, 6).map(item => {
      // Extract the first image from content if available
      const content = item.querySelector('content\\:encoded')?.textContent || '';
      const imageMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imageMatch ? imageMatch[1] : undefined;

      // Extract and clean the excerpt
      const description = item.querySelector('description')?.textContent || '';
      const excerpt = description.replace(/<[^>]*>/g, '').slice(0, 150) + '...';

      return {
        title: item.querySelector('title')?.textContent || '',
        excerpt,
        date: new Date(item.querySelector('pubDate')?.textContent || '').toLocaleDateString(),
        category: item.querySelector('category')?.textContent || 'General',
        imageUrl
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
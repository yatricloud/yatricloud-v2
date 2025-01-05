export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  content: string;
  categories: string[];
  thumbnail: string;
  excerpt: string;
}

export interface BlogState {
  posts: BlogPost[];
  isLoading: boolean;
  error: string | null;
}
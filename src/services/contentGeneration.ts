import { supabase } from '../lib/supabase';

// API configuration types
export interface ContentAPIConfig {
  apiKey: string;
  endpoint: string;
  version?: string;
}

// Response types for different APIs
export interface GeneratedContent {
  text: string;
  sourceApi: string;
  metadata?: Record<string, any>;
}

// Base content generation service
export async function generateContent(
  prompt: string,
  apiConfig: ContentAPIConfig
): Promise<GeneratedContent> {
  // Implementation will vary based on specific API
  throw new Error('Method must be implemented by specific API service');
}
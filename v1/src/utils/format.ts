export function formatViews(views: string): string {
  const num = parseInt(views, 10);
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return views;
}
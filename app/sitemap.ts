import { MetadataRoute } from 'next';
import { allPosts } from '@/.contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const siteUrl = 'https://golee.me';

  const blogPosts =
    posts?.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString().split('T')[0],
    })) ?? [];

  const routes = ['', '/blog'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...blogPosts, ...routes];
}

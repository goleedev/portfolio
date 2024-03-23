import { MetadataRoute } from 'next';
import { allBlogPosts } from '@/.contentlayer/generated/BlogPost/_index.mjs';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allBlogPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const siteUrl = 'https://golee.me';

  const blogPosts =
    posts?.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString().split('T')[0],
    })) ?? [];

  const routes = ['', '/about', '/blog', '/projects'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...blogPosts, ...routes];
}

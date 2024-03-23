import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { allPosts } from '@/.contentlayer/generated';
import metadata from '@/utils/metadata';
import { Mdx } from './components/mdx';

interface IBlogPost {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: IBlogPost) {
  const post = await getDocFromParams({ params });

  if (!post) notFound();

  return (
    <article className="flex flex-col pt-24 pb-14 px-3 gap-1">
      <h1 className="text-2xl font-mono font-extrabold border-l-4 pb-5 border-orange dark:border-blue pl-3">
        {post.title}
      </h1>
      <time className="text-gray dark:text-gray-light text-sm mt-2 ml-auto">
        {post.date}
      </time>
      <Mdx code={post.body.code} />
    </article>
  );
}

async function getDocFromParams({ params }: IBlogPost) {
  const doc = allPosts.find((doc) => doc.slug === params.slug);

  return doc ?? null;
}

export async function generateStaticParams() {
  return allPosts.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({
  params,
}: IBlogPost): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return metadata({
    title: doc.title,
    description: doc.description,
    path: `/blog/${doc.slug}`,
    image: `/${doc.thumbnailUrl}`,
  });
}

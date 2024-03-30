'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXEmbedProvider } from 'mdx-embed';

const components = {
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      rel="noopener"
      {...props}
      className={'text-orange dark:text-blue'}
    />
  ),
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <MDXEmbedProvider>
      <div className="blog flex flex-col flex-1">
        <Component components={components} />
      </div>
    </MDXEmbedProvider>
  );
}

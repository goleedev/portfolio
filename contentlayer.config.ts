import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string' },
    thumbnailUrl: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: 'houston',
  defaultLang: 'plaintext',
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeCodeTitles,
      [
        // @ts-ignore
        rehypePrettyCode,
        rehypePrettyCodeOptions,
      ],
    ],
  },
});

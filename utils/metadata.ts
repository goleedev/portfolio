import { Metadata } from 'next';

interface IMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
  label1?: {
    name: string;
    data: string | number;
  };
  label2?: {
    name: string;
    data: string | number;
  };
}

const websiteURL = 'https://golee.me';
const siteName = 'golee.me';
const locale = 'en_GB';

export default function metadata(props: IMetadata): Metadata {
  const { title, description: desc, path, image, label1, label2 } = props;
  const description = desc + ' | GO Lee';

  const images = `${websiteURL}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: websiteURL + path,
      siteName,
      images,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
    other: {
      ['twitter:label1']: label1?.name ?? '',
      ['twitter:data1']: label1?.data ?? '',
      ['twitter:label2']: label2?.name ?? '',
      ['twitter:data2']: label2?.data ?? '',
    },
  };
}

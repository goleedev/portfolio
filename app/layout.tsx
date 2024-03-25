import { GoogleAnalytics } from '@next/third-parties/google';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'GO Lee | Frontend Engineer',
  description:
    'Loves to build things with code. Currently building things with Next.js, TypeScript, and Tailwind CSS.',
  openGraph: {
    title: 'GO Lee | Frontend Engineer',
    description:
      'Loves to build things with code. Currently building things with Next.js, TypeScript, and Tailwind CSS.',
    url: 'https://golee.me',
    siteName: 'GO Lee',
    images: ['https://golee.me/thumbnail.png'],
    locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="max-w-screen-md min-w-[320px] mx-auto transition-colors ease-in-out duration-200 dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="flex flex-col w-full h-full">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-YRD5D26SBT" />
    </html>
  );
}

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'GO Lee | Frontend Engineer',
  description:
    'Loves to build things with code. Currently building things with Next.js, TypeScript, and Tailwind CSS.',
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
    </html>
  );
}

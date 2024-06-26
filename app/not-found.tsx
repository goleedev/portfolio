'use client';

import { FrownIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col items-center justify-center text-center max-w-screen-md min-h-[calc(100vh-72px)]">
      <FrownIcon size={40} className="text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the blog post.</p>
      <button
        type="button"
        onClick={() => router.back()}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors bg-orange hover:bg-orange-light dark:bg-blue dark:hover:bg-blue-light"
      >
        Go Back
      </button>
    </section>
  );
}

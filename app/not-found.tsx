import Link from 'next/link';

export default async function NotFound() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center max-w-screen-md min-h-[calc(100vh-72px)]">
      <h2 className="text-xl font-bold">Not Found</h2>
      <p className="tracking-tight">
        View
        <Link href="/blog" className="underline pl-1">
          all posts
        </Link>
      </p>
    </section>
  );
}

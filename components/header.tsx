'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeSwitch from './theme-switch';

export default function Header() {
  const pathname = usePathname();

  const activePath = (href: string) =>
    href === pathname || (href !== '/' && pathname.startsWith(href));

  function NavLink({ title, href }: { title: string; href: string }) {
    return (
      <li className="group relative font-mono">
        <Link href={href}>
          <span
            className={`w-fit ${
              activePath(href) &&
              'font-bold underline decoration-orange-light dark:decoration-blue-light decoration-4'
            }`}
          >
            {title}
          </span>
        </Link>
      </li>
    );
  }

  return (
    <header className="fixed flex w-full max-w-screen-md px-4 justify-between py-5 z-50 animate-in fade-in slide-in-from-top bg-white dark:bg-black">
      <nav>
        <ul className="flex space-x-4">
          <NavLink title="Home" href="/" />
          {/* <NavLink title="About" href="/about" /> */}
          <NavLink title="Blog" href="/blog" />
          {/* <NavLink title="Projects" href="/projects" /> */}
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  );
}

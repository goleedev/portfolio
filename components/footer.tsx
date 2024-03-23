import Link from 'next/link';
import { Github, LinkedinIcon, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full text-center mt-auto">
      <div className="flex items-center justify-center gap-2">
        <Link href="https://github.com/goleedev" target="_blank">
          <Github size={14} />
        </Link>
        <Link href="https://www.linkedin.com/in/goleedev/" target="_blank">
          <LinkedinIcon size={14} />
        </Link>
        <Link href="https://twitter.com/goleedev" target="_blank">
          <Twitter size={14} />
        </Link>
      </div>
      <span className="text-xs">
        Copyright © {new Date().getFullYear()} GO Lee
      </span>
    </footer>
  );
}

import Link from 'next/link';
import { Cat } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const navLinks = [
    { href: '/', label: '博客' },
    { href: '/projects', label: '项目' },
    { href: '/links', label: '友链' },
    { href: '/about', label: '关于' },
  ];

  return (
    // 全宽的 header 元素
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      {/* 内部的居中容器 */}
      <div className='container flex h-14 items-center'>
        {/* ... 导航内容 ... */}
        <Link href='/' className='mr-6 flex items-center space-x-2'>
          <Cat className='h-6 w-6' />
          <span className='hidden font-bold sm:inline-block'>MyBlog</span>
        </Link>
        <nav className='flex flex-1 items-center space-x-6 text-sm font-medium'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-foreground/60 transition-colors hover:text-foreground/80'
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center justify-end space-x-4'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

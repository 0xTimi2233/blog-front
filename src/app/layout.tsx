import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

/**
 * 配置 Inter 字体作为主要的无衬线字体 (sans-serif)。
 * - subsets: 指定加载 'latin' 字符子集，优化加载性能。
 * - variable: 创建 CSS 变量 '--font-sans'，以便在 Tailwind CSS 中全局使用。
 */
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

/**
 * 配置 JetBrains Mono 字体作为等宽字体 (monospace)，常用于代码块。
 * - weight: 指定需要加载的字重。
 * - variable: 创建 CSS 变量 '--font-mono'。
 */
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

// 定义网站的全局元数据，用于 SEO 和浏览器标签页。
export const metadata: Metadata = {
  title: '我的博客 - 代码与生活的旅程',
  description:
    '一个使用 Next.js, shadcn/ui, 和 Framer Motion 构建的现代化个人博客。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 设置页面语言为中文，并抑制 next-themes 主题切换时可能出现的水合警告。
    <html lang='zh-CN' suppressHydrationWarning>
      {/**
       * 设置 body 的基础样式：
       * - cn() 函数用于智能合并 Tailwind 类名。
       * - 注入字体 CSS 变量，使其在整个应用中可用。
       * - 应用基础的背景色、默认字体和抗锯齿效果。
       */}
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

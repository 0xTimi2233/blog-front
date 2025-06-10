import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/custom/Header';
import { Footer } from '@/components/custom/Footer';
import { AnimatedPageWrapper } from '@/components/custom/AnimatedPageWrapper';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

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
    <html lang='zh-CN' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/*
            这个 div 是整个垂直布局的 flex 容器。
            它确保 Header, main, Footer 能正确地排列和伸缩。
          */}
          <div className='relative flex min-h-screen flex-col'>
            <Header />
            {/*
              main 区域现在是 flex-1，它会占据 Header 和 Footer 之间的所有可用空间。
              它自身是全宽的。
            */}
            <main className='flex-1'>
              {/*
                我们在 main 内部添加一个 container div。
                这个 div 负责将所有页面主体内容（children）约束在中心区域。
                py-8 提供了垂直方向的内边距，让内容与 Header/Footer 有呼吸空间。
              */}
              <div className='container py-8'>
                <AnimatedPageWrapper>{children}</AnimatedPageWrapper>
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

'use client';

import * as React from 'react';
import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * 主题提供者组件。
 * 这是一个客户端组件，它包装了 `next-themes` 的核心提供者。
 * 这样做是为了能在 Next.js 14 的 App Router 中安全地使用它。
 * @param children
 * @param {ThemeProviderProps} props - 包含 children 和其他 next-themes 配置。
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

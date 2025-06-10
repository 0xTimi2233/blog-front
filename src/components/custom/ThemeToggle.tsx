'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * 主题切换器组件。
 * 这是一个客户端组件，因为它需要响应用户交互并调用 `useTheme` hook。
 */
export function ThemeToggle() {
  // 从 next-themes 获取设置主题的函数
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* 触发下拉菜单的按钮，只显示图标 */}
        <Button variant='outline' size='icon'>
          {/* 亮色模式下显示太阳图标 */}
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          {/* 暗色模式下显示月亮图标 */}
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {/* 下拉菜单选项 */}
        <DropdownMenuItem onClick={() => setTheme('light')}>
          亮色
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          暗色
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          跟随系统
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

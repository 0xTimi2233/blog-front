'use client';

import { motion } from 'framer-motion';

/**
 * 页面过渡动画包装器。
 * 这是一个客户端组件，因为它使用了 `framer-motion` 来实现动画。
 * 它为其子元素提供一个优雅的淡入和向上滑动的动画效果。
 * @param {{ children: React.ReactNode }} props
 */
export function AnimatedPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial='hidden' // 初始状态
      animate='enter' // 动画结束状态
      transition={{ type: 'linear', duration: 0.5 }} // 过渡效果
    >
      {children}
    </motion.div>
  );
}

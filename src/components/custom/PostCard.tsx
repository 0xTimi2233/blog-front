"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { PostSummary } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

/**
 * 文章卡片组件。
 * 这是一个客户端组件，因为它使用了 `framer-motion` 来实现悬停动画。
 * @param {{ post: PostSummary }} props - 接收一个文章摘要对象。
 */
export function PostCard({ post }: { post: PostSummary }) {
  // 格式化日期为 "YYYY年MM月DD日"
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    // 使用 motion.article 来添加动画效果
    <motion.article
      whileHover={{ scale: 1.03 }} // 鼠标悬停时放大 3%
      transition={{ type: "spring", stiffness: 300 }} // 使用弹簧动画，效果更自然
      // 将 group 类添加到父元素，以便在悬停时控制子元素的样式
      className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <Link href={`/posts/${post.slug}`} className="block">
        {/* 
          【核心改动】
          为图片容器添加一个背景色 `bg-muted`。
          这个背景色将在图片加载完成前作为占位符显示，避免出现空白区域。
          父容器需要 relative 定位，以便 fill 的 Image 能正确定位。
        */}
        <div className="relative h-48 w-full bg-muted">
          <Image
            src={post.imageUrl}
            alt={post.title}
            // 使用 fill prop 替代旧的 layout="fill"
            fill
            // 使用 className 替代旧的 objectFit
            // object-cover: 等同于 object-fit: cover
            // transition/duration/ease: 添加平滑的缩放过渡效果
            // group-hover:scale-105: 当父元素(.group)悬停时，放大图片
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            // sizes 属性有助于 Next.js 更智能地选择图像源，提升性能
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // loading="lazy" 是 next/image 的默认行为，确保图片只在接近视口时加载
            loading="lazy"
          />
        </div>
        <div className="p-6">
          {/* 文章标题 */}
          <h2 className="mb-2 text-2xl font-bold tracking-tight">{post.title}</h2>
          {/* 文章摘要 */}
          <p className="mb-4 text-muted-foreground">{post.summary}</p>
          {/* 元数据信息 */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {/* 发布日期 */}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            {/* 阅读时间 */}
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>阅读需 {post.readingTime} 分钟</span>
            </div>
          </div>
          {/* 标签 */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
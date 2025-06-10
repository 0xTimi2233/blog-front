import { PostCard } from '@/components/custom/PostCard';
import { PostSummary } from '@/lib/types';

/**
 * 异步函数，用于从我们的 API 获取文章摘要列表。
 * @returns {Promise<PostSummary[]>} 返回一个文章摘要数组的 Promise。
 */
async function getPosts(): Promise<PostSummary[]> {
  // 这是一个在服务端执行的 fetch 请求。
  // 我们使用绝对 URL，因为它可能在构建时或服务器上执行。
  // 重要：我们添加了 next.tags 配置，这是实现按需增量静态再生的关键。
  // 所有与文章列表相关的数据都被打上了 'posts' 标签。
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    next: { tags: ['posts'] },
  });

  // 如果请求失败，抛出错误，Next.js 会捕获并显示错误页面。
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

/**
 * 博客首页。
 * 这是一个服务端组件 (RSC)，可以直接执行异步操作来获取数据。
 */
export default async function Home() {
  // 在组件渲染时直接调用数据获取函数。
  const posts = await getPosts();

  return (
    <section>
      {/* 页面介绍部分 */}
      <div className='mb-12 text-center'>
        <h1 className='text-4xl font-bold tracking-tight'>博客</h1>
        <p className='mt-2 text-lg text-muted-foreground'>
          代码人生：编织技术与生活的博客之旅
        </p>
      </div>

      {/* 
        使用 CSS Grid 布局来展示文章卡片列表。
        - grid-cols-1: 在移动设备上，每行一个卡片。
        - md:grid-cols-2: 在中等屏幕及以上，每行两个卡片。
        - gap-8: 设置卡片之间的间距。
      */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

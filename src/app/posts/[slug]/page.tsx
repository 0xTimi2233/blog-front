import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
// 终极修正：从新安装的 @shikijs/rehype 包中导入
import rehypeShiki from '@shikijs/rehype';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { PostDetail, PostSummary } from '@/lib/types';
import { Callout } from '@/components/custom/Callout';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

// 定义页面 props 的类型
type PostPageProps = {
  params: {
    slug: string;
  };
};

/**
 * 在构建时生成所有文章的静态页面路径。
 */
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts: PostSummary[] = await res.json();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * 为每个文章页面动态生成 SEO 元数据。
 */
export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: '文章未找到' };
  }
  return {
    title: post.title,
    description: post.summary,
  };
}

/**
 * 异步函数，根据 slug 从 API 获取单篇文章的完整数据。
 */
async function getPost(slug: string): Promise<PostDetail | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`,
    {
      next: { tags: ['posts', `post:${slug}`] },
    },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

/**
 * 文章详情页。
 */
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX<PostDetail>({
    source: post.content,
    components: {
      Callout,
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          // 现在这个插件可以被正确解析了
          [rehypeShiki, { theme: 'github-dark' }],
        ],
      },
    },
  });

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className='prose dark:prose-invert max-w-none'>
      <div className='mb-8 text-center'>
        <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
          {post.title}
        </h1>
        <div className='mt-4 flex justify-center flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground'>
          <div className='flex items-center gap-1'>
            <Calendar className='h-4 w-4' />
            <span>{formattedDate}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='h-4 w-4' />
            <span>阅读需 {post.readingTime} 分钟</span>
          </div>
        </div>
        <div className='mt-4 flex justify-center flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <Badge key={tag} variant='secondary'>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className='relative mb-8 h-64 md:h-96 w-full overflow-hidden rounded-lg'>
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>

      {content}
    </article>
  );
}

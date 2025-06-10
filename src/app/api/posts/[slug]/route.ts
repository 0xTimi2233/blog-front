/**
 * @file 动态 API 路由: /api/posts/[slug]
 * @description 根据文章的 slug 获取单篇文章的完整详情。
 */

import { NextResponse } from 'next/server';
import { MOCK_POSTS } from '@/lib/mock-data';

/**
 * 处理动态 GET 请求，根据 slug 查找并返回对应的文章详情。
 * @param request - Next.js 的请求对象 (此处未使用，但必须存在)。
 * @param params - 包含动态路由参数的对象，例如 { params: { slug: 'my-first-post' } }。
 * @returns {NextResponse} 如果找到文章，返回文章详情；否则返回 404 错误。
 */
export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  // 从动态路由参数中获取 slug。
  const slug = params.slug;

  // 在模拟数据中查找 slug 匹配的文章。
  const post = MOCK_POSTS.find((p) => p.slug === slug);

  // 如果找到了文章，返回完整的文章数据。
  if (post) {
    return NextResponse.json(post);
  }

  // 如果未找到文章，返回一个 404 Not Found 响应，并附带错误信息。
  return NextResponse.json({ error: '文章未找到' }, { status: 404 });
}

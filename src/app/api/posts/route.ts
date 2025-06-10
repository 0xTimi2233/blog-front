/**
 * @file API 路由: /api/posts
 * @description 提供获取所有文章摘要列表的接口。
 */

import { NextResponse } from 'next/server';
import { MOCK_POSTS } from '@/lib/mock-data';
import { PostSummary } from '@/lib/types';

/**
 * 处理 GET 请求，返回所有文章的摘要信息。
 * 这个接口主要用于博客首页的文章列表展示。
 * @returns {NextResponse} 返回一个包含 PostSummary 数组的 JSON 响应。
 */
export async function GET() {
  // 为了优化性能和减少网络传输，我们只返回文章的摘要信息。
  // 使用 map 方法遍历所有文章，并利用对象解构去除 'content' 字段。
  const summaries: PostSummary[] = MOCK_POSTS.map((post) => {
    const { content, ...summary } = post;
    return summary;
  });

  // 使用 NextResponse.json 来创建标准的 JSON 响应。
  return NextResponse.json(summaries);
}

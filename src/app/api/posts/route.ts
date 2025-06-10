/**
 * @file API 路由: /api/posts
 * @description 提供获取所有文章摘要列表的接口。
 */

import { NextResponse } from 'next/server';
import { MOCK_POSTS } from '@/lib/mock-data';
import { PostSummary } from '@/lib/types';
import { omit } from '@/lib/utils'; // 导入我们新的辅助函数

/**
 * 处理 GET 请求，返回所有文章的摘要信息。
 * 这个接口主要用于博客首页的文章列表展示。
 * @returns {NextResponse} 返回一个包含 PostSummary 数组的 JSON 响应。
 */
export async function GET() {
  /**
   * 【核心改动】
   * 我们不再使用对象解构来移除 'content' 字段，因为这会触发 ESLint 错误。
   * 相反，我们使用一个自定义的 `omit` 辅助函数来显式地从每个文章对象中
   * 移除 'content' 属性。这种方法更清晰，且不会产生任何未使用的变量。
   */
  const summaries: PostSummary[] = MOCK_POSTS.map(post => omit(post, ['content']));

  // 使用 NextResponse.json 来创建标准的 JSON 响应。
  return NextResponse.json(summaries);
}
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

/**
 * @file 按需重新验证 (On-Demand Revalidation) 的 Webhook 接口。
 * @description 这个 API 路由用于接收来自外部服务（如 CMS）的 POST 请求，
 *              以便在内容更新时，精确地让相关的页面缓存失效，实现内容的即时更新。
 *              这是一种比定时重新构建更高效、更快速的内容更新策略。
 */

/**
 * 处理 POST 请求以触发缓存失效。
 * @param {NextRequest} request - Next.js 的请求对象。
 * @returns {NextResponse} 返回一个 JSON 响应，告知操作结果。
 *
 * @example 使用 curl 调用此接口:
 * curl -X POST \
 *   -H "Authorization: Bearer a-super-secret-and-long-random-string-12345" \
 *   -H "Content-Type: application/json" \
 *   -d '{"tag": "posts"}' \
 *   http://localhost:3000/api/revalidate
 *
 * @example 更新单篇文章:
 * curl -X POST \
 *   -H "Authorization: Bearer a-super-secret-and-long-random-string-12345" \
 *   -H "Content-Type: application/json" \
 *   -d '{"tag": "post:nextjs-with-hono"}' \
 *   http://localhost:3000/api/revalidate
 */
export async function POST(request: NextRequest) {
  // --- 安全性验证 ---
  // 1. 从请求头中获取 Authorization 令牌。
  //    我们期望的格式是 "Bearer YOUR_TOKEN"。
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  // 2. 从环境变量中获取我们预设的安全令牌。
  const secret = process.env.REVALIDATE_TOKEN;

  // 3. 验证令牌是否存在且匹配。
  //    这是保护此接口不被恶意调用的关键步骤。
  if (!secret || token !== secret) {
    // 如果令牌不匹配或不存在，返回 401 Unauthorized 错误。
    return NextResponse.json({ message: '无效的令牌' }, { status: 401 });
  }

  // --- 缓存失效逻辑 ---
  try {
    // 1. 从请求体中解析出需要失效的缓存标签 (tag)。
    const body = await request.json();
    const tag = body.tag;

    // 2. 验证 tag 是否存在。
    if (!tag) {
      return NextResponse.json({ message: '请求体中缺少 "tag"' }, { status: 400 });
    }

    // 3. 调用 Next.js 核心函数 revalidateTag()。
    //    这个函数会查找所有在 fetch 请求中使用了这个 tag 的数据缓存，并使其失效。
    //    下一次对这些页面的请求将会重新获取数据并生成新的页面。
    revalidateTag(tag);

    // 4. 返回成功的响应。
    //    revalidated: true 是一个明确的信号，表示操作已成功。
    //    now: Date.now() 提供了操作完成的时间戳。
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });

  } catch (error) {
    // 如果解析 JSON 或其他过程中出现错误，返回 500 Internal Server Error。
    const errorMessage = error instanceof Error ? error.message : '未知错误';
    return NextResponse.json({ message: '服务器内部错误', error: errorMessage }, { status: 500 });
  }
}
/**
 * @file 定义应用中所有核心的数据结构类型。
 * 这是前后端数据交互的契约，也是应用状态的骨架。
 */

/**
 * 文章摘要类型。
 * 用于文章列表页，不包含完整的文章内容，以优化加载性能。
 */
export interface PostSummary {
  // 文章的唯一标识符，通常用于 URL。
  slug: string;
  // 文章标题。
  title: string;
  // 文章的简短摘要。
  summary: string;
  // 文章的封面图片 URL。
  imageUrl: string;
  // 文章标签数组。
  tags: string[];
  // 文章发布日期，采用 ISO 8601 格式字符串 (例如 "2024-06-11T12:00:00.000Z")。
  publishedAt: string;
  // 预计阅读时间，单位为分钟。
  readingTime: number;
}

/**
 * 文章详情类型。
 * 继承自 PostSummary，并增加了完整的文章内容。
 * 用于文章详情页。
 */
export interface PostDetail extends PostSummary {
  // 文章的完整内容，为 Markdown 格式的字符串。
  content: string;
}

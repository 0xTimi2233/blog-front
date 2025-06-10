/**
 * @file 提供整个应用的模拟博客文章数据。
 * 在没有真实后端的情况下，这里是所有内容的来源。
 * 数据已扩充，以更好地测试布局和组件。
 */

import { PostDetail } from './types';

export const MOCK_POSTS: PostDetail[] = [
  {
    slug: '2024-remote-work-freedom',
    title: '2024・应届牛马到远程自由',
    summary:
      '面临着最后半年的大学生涯，与大多数大学生不同，我无时不在期盼着毕业这天的到来。步入职场进入了一家 AI 初创公司开始了“牛马”生活。最终我选择在国庆前提桶跑路，回到老家开始黑奴 play，却未曾料到，一份远程工作机会和一位新伙伴悄然而至...',
    imageUrl:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop',
    tags: ['年终总结', '工作', '远程'],
    publishedAt: new Date('2024-12-31T00:00:00.000Z').toISOString(),
    readingTime: 12,
    content: `
# 序章：牛马的觉醒

面临着最后半年的大学生涯，与大多数大学生不同，我无时不在期盼着毕业这天的到来。步入职场进入了一家 AI 初创公司开始了“牛马”生活。

## 第一份工作：AI 初创的迷与思

初入职场，一切都是新鲜的。我被分配到了一个核心项目中，负责构建用户界面。

### 日常工作清单
1.  **需求评审**：与产品经理和设计师对齐需求。
2.  **技术方案设计**：编写技术文档，评估实现难度。
3.  **代码开发**：这是我最享受的部分，将想法变为现实。
4.  **线上问题修复**：最具挑战性的部分，需要快速定位并解决问题。

<Callout type="warning">注意：长时间的 996 工作会严重影响身心健康！这是一个惨痛的教训。</Callout>

> “选择比努力更重要。” - 某位不知名的大佬

## 转折点：远程工作的曙光

最终我选择在国庆前提桶跑路，回到老家开始黑奴 play，却未曾料到，一份远程工作机会和一位新伙伴悄然而至... 这段经历让我深刻理解到，工作不仅仅是为了生存，更是为了生活。

下面是一段示例代码，展示了如何在 React 中使用 \`useState\` Hook：

\`\`\`typescript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 使用 useEffect 来观察 count 的变化
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    console.log('Count changed to:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

远程工作带来了前所未有的自由，但也需要更强的自律。

### 我的远程工作心得
- **明确的上下班界限**：仪式感很重要。
- **高效的沟通工具**：Slack, Zoom, Loom 是我的三件套。
- **定期的线下团建**：保持团队凝聚力。

希望我的经历能给你带来一些启发。
    `,
  },
  {
    slug: 'nextjs-with-hono',
    title: 'Next.js 使用 Hono 接管 API',
    summary:
      '直入正题，Next.js 自带的 API Routes (现已改名为 Route Handlers) 异常难用，例如当你需要编写一个 RESTful API 时，尤为痛苦。Hono 是一个轻量级、高性能的 Web 框架，它的 API 设计优雅，非常适合用来构建 API。',
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop',
    tags: ['Next.js', 'Hono', 'API'],
    publishedAt: new Date('2024-10-02T00:00:00.000Z').toISOString(),
    readingTime: 7,
    content: `
# 为什么选择 Hono?

Next.js 自带的 API Routes (现已改名为 Route Handlers) 异常难用，例如当你需要编写一个 RESTful API 时，尤为痛苦。

Hono 是一个轻量级、高性能的 Web 框架，它的 API 设计优雅，非常适合用来构建 API。

## 优点对比

| 特性 | Next.js Route Handlers | Hono |
|---|---|---|
| 路由 | 基于文件系统 | 编程式，更灵活 |
| 中间件 | 有限且复杂 | 强大且易用 |
| 性能 | 良好 | 极致 |
| 生态 | 绑定 Vercel | 跨运行时 |

<Callout type="info">Hono 不仅可以用于 Next.js，还可以运行在 Cloudflare Workers, Deno, Bun 等多种环境中，这为你的 API 提供了极大的灵活性。</Callout>

## 快速上手

下面是一个在 Next.js 中使用 Hono 的简单示例，代码不言自明。

\`\`\`javascript
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

// 推荐在 Vercel 部署时使用 Edge Runtime
export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

// 可以链式定义路由
app.post('/users', (c) => {
    // ...创建用户的逻辑
    return c.json({ message: 'User created' }, 201)
})

export const GET = handle(app)
export const POST = handle(app)
\`\`\`

如你所见，代码非常简洁且富有表现力。与 Next.js 的原生方式相比，Hono 在构建复杂的 API 时优势巨大。
    `,
  },
  {
    slug: 'mastering-css-grid',
    title: '精通 CSS Grid 布局：从入门到实战',
    summary:
      'Flexbox 解决了我们过去在 CSS 中遇到的一维布局问题，而 CSS Grid 则为我们带来了真正的二维布局能力。本文将带你深入理解 Grid 布局的核心概念，并通过实例让你彻底掌握它。',
    imageUrl:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2874&auto=format&fit=crop',
    tags: ['CSS', '前端', '布局'],
    publishedAt: new Date('2024-08-15T00:00:00.000Z').toISOString(),
    readingTime: 15,
    content: `
# CSS Grid：二维布局的革命

长期以来，Web 布局一直是一个挑战。我们用过 \`table\`, \`float\`, \`position\`，后来有了 Flexbox。Flexbox 非常适合处理一维布局（一行或一列），但对于复杂的二维网格，它就显得力不从心了。

CSS Grid 的出现，就是为了解决这个问题。

## 核心概念

要掌握 Grid，你需要理解两个核心部分：**容器（Container）** 和 **项目（Item）**。

### 容器属性
- \`display: grid | inline-grid\`
- \`grid-template-columns\`: 定义列宽
- \`grid-template-rows\`: 定义行高
- \`gap\`: 定义网格间距

<Callout type="success">实践是最好的老师。打开你的开发者工具，跟着下面的例子一起敲代码吧！</Callout>

### 一个经典的圣杯布局示例

\`\`\`css
.holy-grail-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; /* 三列布局，中间为主体 */
  grid-template-rows: auto 1fr auto; /* 头部、主体、尾部 */
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 10px;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

这段代码创建了一个响应式的、经典的圣杯布局，而代码量却如此之少。这就是 Grid 的魅力所在。

## 结论

CSS Grid 是现代 Web 开发的必备技能。它与 Flexbox 并非替代关系，而是互补关系。掌握它们，你就能随心所欲地构建任何你想要的布局。
    `,
  },
  {
    slug: 'react-hooks-deep-dive',
    title: '深入理解 React Hooks：useState, useEffect 和自定义 Hooks',
    summary:
      'React Hooks 是自 React 16.8 以来最激动人心的特性。它让我们可以在不编写 class 的情况下使用 state 以及其他的 React 特性。本文将带你深入理解最常用的 Hooks，并教你如何创建自己的自定义 Hooks。',
    imageUrl:
      'https://images.unsplash.com/photo-1631624215848-3b701a59630f?q=80&w=2940&auto=format&fit=crop',
    tags: ['React', 'Hooks', 'JavaScript'],
    publishedAt: new Date('2024-06-20T00:00:00.000Z').toISOString(),
    readingTime: 18,
    content: `
# React Hooks：函数组件的超能力

在 Hooks 出现之前，如果你想为组件添加 state 或者生命周期方法，你必须把它转换成一个 Class 组件。Hooks 的出现彻底改变了这一现状。

## \`useState\`: 状态魔法

这是最基础也是最重要的 Hook。它允许你向函数组件添加一个 state 变量。

\`\`\`jsx
const [state, setState] = useState(initialState);
\`\`\`

React 会在多次渲染之间“记住”这个 state。\`useState\` 返回一个数组，包含当前 state 和一个更新它的函数。

## \`useEffect\`: 副作用的舞台

网络请求、DOM 操作、订阅... 这些都属于“副作用”。\`useEffect\` 就是专门用来处理这些副作用的。

\`\`\`jsx
useEffect(() => {
  // 你的副作用代码
  
  return () => {
    // 清理函数（可选）
    // 在组件卸载或下一次 effect 执行前运行
  };
}, [dependencies]); // 依赖项数组
\`\`\`

<Callout type="danger">注意：\`useEffect\` 的依赖项数组至关重要！如果忘记提供，可能会导致无限循环或过时的状态。一定要使用 ESLint 插件来检查它。</Callout>

## 自定义 Hooks：逻辑的复用

这是 Hooks 最强大的地方。你可以将组件逻辑提取到可重用的函数中。自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。

例如，创建一个 \`useWindowSize\` 的 Hook：

\`\`\`javascript
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 空数组表示只在挂载和卸载时执行

  return size;
}
\`\`\`

现在，任何组件都可以通过调用 \`const size = useWindowSize();\` 来获取当前的窗口尺寸，而无需关心其内部实现。这就是逻辑复用的魅力。
    `,
  },
];

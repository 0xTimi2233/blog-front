export default function Home() {
  return (
    // 使用 Flexbox 实现全屏垂直水平居中布局，并设置内边距。
    <main className='flex min-h-screen flex-col items-center justify-center p-8'>
      {/* 容器内文本居中 */}
      <div className='text-center'>
        {/* 标题样式：4xl大号字体、粗体、紧凑字间距 */}
        <h1 className='text-4xl font-bold tracking-tight'>我的博客</h1>
        {/* 副标题样式：添加上边距，并使用柔和的次要文本颜色 */}
        <p className='mt-4 text-muted-foreground'>内容即将呈现...</p>
      </div>
    </main>
  );
}

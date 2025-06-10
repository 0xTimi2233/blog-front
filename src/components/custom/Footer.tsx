export function Footer() {
  return (
    // 全宽的 footer 元素
    <footer className='w-full py-6 md:px-8 md:py-0'>
      {/* 内部的居中容器 */}
      <div className='container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row'>
        <p className='text-center text-sm leading-loose text-muted-foreground'>
          © {new Date().getFullYear()} MyBlog. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

# 1、创建项目
``` bash
 pnpm create next-app@14 blog-front --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
```

# 2、安装依赖
``` bash
 pnpm dlx shadcn@latest init
```

``` text
sony@sonydeMBP blog-front % pnpm dlx shadcn@latest init
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Which style would you like to use? › New York (Recommended)
✔ Which color would you like to use as the base color? › Slate
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating CSS variables in src/app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - src/lib/utils.ts

Success! Project initialization completed.
You may now add components.
```

``` bash
 pnpm add framer-motion next-mdx-remote shiki remark-gfm rehype-slug next-themes
```

提示

``` text
╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: unrs-resolver.                                                    │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

``` bash
 pnpm approve-builds
```

```text
sony@sonydeMBP blog-front % pnpm approve-builds
✔ Choose which packages to build (Press <space> to select, <a> to toggle all, <i> to invert selection) · No items were selected
All packages were added to ignoredBuiltDependencies.
```

依赖文件

``` json
{
    "dependencies": {
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "framer-motion": "^12.16.0",
        "lucide-react": "^0.513.0",
        "next": "14.2.29",
        "next-mdx-remote": "^5.0.0",
        "next-themes": "^0.4.6",
        "react": "^18",
        "react-dom": "^18",
        "rehype-slug": "^6.0.0",
        "remark-gfm": "^4.0.1",
        "shiki": "^3.6.0",
        "tailwind-merge": "^3.3.0",
        "tailwindcss-animate": "^1.0.7"
    },
    "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "eslint": "^8",
        "eslint-config-next": "14.2.29",
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "typescript": "^5"
    }
}
```

创建文件夹

``` bash
 mkdir -p src/components/ui src/components/custom src/lib src/app/api
```
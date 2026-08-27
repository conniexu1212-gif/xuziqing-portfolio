# XUZIQING Portfolio V1

一个面向游戏营销、品牌营销与内容策划岗位的响应式职业作品集网站。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
pnpm install
pnpm dev
```

浏览器打开 `http://localhost:3000/`。

如使用 npm，也可以运行：

```bash
npm install
npm run dev
```

## 生产构建

```bash
pnpm build
```

## 内容维护

- 项目内容：`app/data/projects.js`
- 首页结构：`app/page.jsx`
- 项目详情模板：`app/projects/[slug]/page.jsx`
- 全站样式：`app/globals.css`
- 项目素材：建议按项目放入 `public/projects/<project-slug>/`

当前项目图片与视频均为明确占位，不含第三方素材。茶话弄任职时间已按最新资料写为 `2024.03—2025.07`。

# Octo Designer 预览站

这个目录只保留 Octo Designer 设计系统预览站本身，不再承载任何历史示例代码。

## 目录职责

- `src/App.tsx`：设计系统同步预览页入口
- `src/generated/design-system-registry.ts`：由同步脚本生成的 registry
- `public/`：预览站静态资源
- `Design System Visual Guide.html`：构建后内联生成的可直接打开版本

## 运行方式

从项目根目录执行：

```bash
npm --prefix 05-自动化工作流 run ds:dev
npm --prefix 05-自动化工作流 run ds:build
```

如果只想单独运行预览站：

```bash
npm --prefix 04-预览网站 run dev
npm --prefix 04-预览网站 run build
```

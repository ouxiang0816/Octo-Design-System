# Breadcrumb 面包屑

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.breadcrumb`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.breadcrumb -->

### Figma 自动采集

> Figma 面包屑支持 2/3/4 层路径，项间距 4px，文字 12px/20px，父级 #777777，当前项 #191919，分隔符 #AEAEAE。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-1214&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:1214 |
| 缓存 | 02-markdown文档/figma/component.breadcrumb.context.json |
| 截图 | 02-markdown文档/figma/component.breadcrumb.screenshot.png |
| 尺寸 | text 12px/20px; gap 4px; optional icon 12px |
| 颜色 | parent #777777; current #191919; separator #AEAEAE |
| 布局 | inline-flex; horizontal path with slash or icon separator |
| 变体/状态 | 2层 / 3层 / 4层; 默认 / 选中 |

<!-- DS_AUTO_END component.breadcrumb -->

基于 Shadcn/ui `Breadcrumb`。字号 12px，行高 20px，项间距 4px。

| 项类型 | 颜色 |
|---|---|
| 当前项（不可点击） | `#191919` |
| 父级项（可点击） | `#777777`，hover 变 `#0067D1` |
| 分隔符 `/` | `#AEAEAE` |

超过 4 层时中间层折叠为 `…`；可选 Chevron 图标替代 `/`。

<!-- DS_SPEC_END -->

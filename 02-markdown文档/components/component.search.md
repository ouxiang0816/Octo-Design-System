# Search 搜索框

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.search`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.search -->

### Figma 自动采集

> Figma 搜索框为 280px 宽、32px 高，圆角 4px，右侧 14px 搜索图标，覆盖默认、悬浮、聚焦状态。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-1256&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:1256 |
| 缓存 | 02-markdown文档/figma/component.search.context.json |
| 截图 | 02-markdown文档/figma/component.search.screenshot.png |
| 尺寸 | width 280px; height 32px; padding 8px 12px; icon 14px; radius 4px |
| 颜色 | border default #C9C9C9; hover #191919; focus #0067D1; placeholder #777777; background #FFFFFF |
| 布局 | flex row; align center; justify between; text left and search icon right |
| 变体/状态 | Default / 悬浮 / 聚焦 |

<!-- DS_AUTO_END component.search -->

基于 Shadcn/ui `Input` + lucide `Search`。高度 32px，默认宽 280px，圆角 4px，内边距 12px。

| 状态 | 边框 |
|---|---|
| 默认 | `#C9C9C9` |
| hover | `#191919` |
| focus | `#0067D1` |

搜索图标 14px 右侧对齐，颜色 `#777777`；可选清除 × 图标。placeholder 描述搜索对象（「搜索需求」）；不占满整屏（除非搜索是页面主任务）。

<!-- DS_SPEC_END -->

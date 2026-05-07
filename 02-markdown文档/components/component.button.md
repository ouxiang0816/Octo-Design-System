# Button 按钮

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.button`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.button -->

### Figma 自动采集

> Figma 节点包含主要按钮、次要按钮、下拉按钮、文本按钮，并覆盖默认、悬停、点击状态。按钮基准高度约 30-32px，圆角 4px，字号 14px/22px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=17-1112&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 17:1112 |
| 缓存 | 02-markdown文档/figma/component.button.context.json |
| 截图 | 02-markdown文档/figma/component.button.screenshot.png |
| 尺寸 | height 30-32px; padding 4px 16px; radius 4px |
| 颜色 | primary #0067D1; hover #2E86DE; active #004EA8; text #FFFFFF/#191919; border #C9C9C9 |
| 布局 | inline-flex; center aligned; icon + text gap 4-8px depending variant |
| 变体/状态 | 主要按钮 / 次要按钮 / 下拉按钮 / 文本按钮; 默认 / 悬停 / 点击 |

<!-- DS_AUTO_END component.button -->

基于 Shadcn/ui `Button` 扩展。圆角 4px，字号 14px / 行高 22px，水平内边距 16px，垂直内边距 4px。

| Variant | 背景 | 文本 | 边框 | 用途 |
|---|---|---|---|---|
| `primary` 默认 | `#0067D1` | `#FFFFFF` | 无 | 页面唯一主操作 |
| `primary` hover | `#2E86DE` | `#FFFFFF` | 无 | — |
| `primary` active | `#004EA8` | `#FFFFFF` | 无 | — |
| `secondary` 默认 | `#FFFFFF` | `#191919` | 1px `#C9C9C9` | 次级操作 |
| `secondary` hover | `#FFFFFF` | `#2E86DE` | 1px `#2E86DE` | — |
| `secondary` active | `#FFFFFF` | `#004EA8` | 1px `#004EA8` | — |
| `text` 文本按钮 | 透明 | `#191919` | 无 | 轻量操作、内联跳转 |

规则：同一区域最多一个 `primary`；文案用命令式（「导出」「新建」「保存」「取消」）；图标在文字左侧，间距 8px。

<!-- DS_SPEC_END -->

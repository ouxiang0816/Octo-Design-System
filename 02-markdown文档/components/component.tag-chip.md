# Tag / Chip 标签

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.tag-chip`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.tag-chip -->

### Figma 自动采集

> Figma Tag/Chip 为 22px 高、4px 圆角，使用 10px/16px 文本，包含蓝、橙、红、绿四种语义色。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=300-494&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 300:494 |
| 缓存 | 02-markdown文档/figma/component.tag-chip.context.json |
| 截图 | 02-markdown文档/figma/component.tag-chip.screenshot.png |
| 尺寸 | height 22px; padding 2px 8px; radius 4px; text 10px/16px |
| 颜色 | blue rgba(0,103,209,0.2)/#0067D1; orange rgba(250,140,22,0.2)/#FA8C16; red rgba(255,77,79,0.2)/#FF4D4F; green rgba(115,209,61,0.2)/#73D13D |
| 布局 | inline-flex center; compact status label |
| 变体/状态 | 蓝 / 橙 / 红 / 绿 |

<!-- DS_AUTO_END component.tag-chip -->

高度 22px（py-2px），水平内边距 8px，圆角 4px，**字号 10px**，行高 16px。

| 颜色变体 | 背景 | 文字 |
|---|---|---|
| 蓝（默认） | `rgba(0,103,209,0.2)` | `#0067D1` |
| 橙 | `rgba(250,140,22,0.2)` | `#FA8C16` |
| 红 | `rgba(255,77,79,0.2)` | `#FF4D4F` |
| 绿 | `rgba(115,209,61,0.2)` | `#73D13D` |

变体：只读 / 可关闭 / 可点击；超出截断 + 省略号。仅用于状态标识，不用于装饰。

<!-- DS_SPEC_END -->

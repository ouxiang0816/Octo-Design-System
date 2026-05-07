# Switch 开关

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.switch`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.switch -->

### Figma 自动采集

> Figma 开关尺寸 38x20px，包含开/关状态，滑块 16px，胶囊轨道。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-820&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:820 |
| 缓存 | 02-markdown文档/figma/component.switch.context.json |
| 截图 | 02-markdown文档/figma/component.switch.screenshot.png |
| 尺寸 | track 38x20px; thumb 16px; radius full |
| 颜色 | on track #0067D1; off track gray; thumb #FFFFFF |
| 布局 | single switch control; thumb translates horizontally between off/on |
| 变体/状态 | 开 / 关 |

<!-- DS_AUTO_END component.switch -->

基于 Shadcn/ui `Switch`。尺寸 38×20px（胶囊形，圆角 999px），滑块 16px 圆形。

| 状态 | 轨道色 |
|---|---|
| 开启 | `#0067D1` |
| 关闭 | `#D1D5DC` |
| disabled | 透明度 50% |

点击整个开关区域触发；过渡动画 200ms ease。

<!-- DS_SPEC_END -->

# Steps 步骤条

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.steps`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.steps -->

### Figma 自动采集

> Figma Steps 支持 2-5 步，步骤图标 32px 圆形，完成态浅蓝底蓝边，当前态品牌蓝底，待完成态浅灰底灰边，连接线 1px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=112-382&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 112:382 |
| 缓存 | 02-markdown文档/figma/component.steps.context.json |
| 截图 | 02-markdown文档/figma/component.steps.screenshot.png |
| 尺寸 | step icon 32x32px; title 14px/22px; helper 12px/20px; connector 1px |
| 颜色 | done bg #E6F2FD border #0067D1; current bg #0067D1 text #FFFFFF; pending bg rgba(25,25,25,0.05) border #C9C9C9; connector #0067D1/#DFDFDF |
| 布局 | horizontal flex; icon above title/helper; connector centered to icon |
| 变体/状态 | 2 / 3 / 4 / 5 steps; 完成 / 当前 / 待完成 |

<!-- DS_AUTO_END component.steps -->

步骤图标直径 32px（圆形 rounded-999px），连接线 1px，标题 14px Medium `#191919`，辅助文字 12px `#777777`，图标与文字间距 8px。

| 状态 | 图标样式 | 连接线 |
|---|---|---|
| 完成 | 浅蓝底 `#E6F2FD` + 蓝边 `#0067D1` + 白 ✓ | `#0067D1` |
| 当前 | 蓝底 `#0067D1` + 白色数字 | `#0067D1` |
| 待完成 | 背景 `rgba(25,25,25,0.05)` + 边 `#C9C9C9` + `#AEAEAE` 数字 | `#DFDFDF` |
| 错误 | 红底 `#FF4D4F` + 白 ✕ | `#DFDFDF` |

变体：水平 / 垂直；可点击 / 不可点击；仅用于流程进度，不用于内容切换。

<!-- DS_SPEC_END -->

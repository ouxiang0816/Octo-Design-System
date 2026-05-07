# Tabs 页签

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.tabs`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.tabs -->

### Figma 自动采集

> Figma Tabs 容器高度 54px，页签间距 32px，选中项底部 2px 品牌蓝线，文字 14px/20px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-561&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:561 |
| 缓存 | 02-markdown文档/figma/component.tabs.context.json |
| 截图 | 02-markdown文档/figma/component.tabs.screenshot.png |
| 尺寸 | tab height 54px; active underline 2px; gap 32px; text 14px/20px |
| 颜色 | active underline #0067D1; text #101828 |
| 布局 | horizontal flex tabs; active item with bottom border |
| 变体/状态 | 2 / 3 / 4 / 5 / 6 tabs; 选中 / 未选中 |

<!-- DS_AUTO_END component.tabs -->

容器高度 54px，页签间距 32px（gap），字号 14px，行高 20px。

| 状态 | 文字色 | 字重 | 底部线 |
|---|---|---|---|
| 选中 | `#101828` | Medium | 2px `#0067D1` |
| 未选中 | `#101828` | Regular | 无 |

用于同层级内容切换；不用于主流程步骤；超出时显示左右滚动箭头。

<!-- DS_SPEC_END -->

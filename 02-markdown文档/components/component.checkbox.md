# Checkbox 复选框

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.checkbox`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.checkbox -->

### Figma 自动采集

> Figma 复选框包含未选与选中状态，控件尺寸 16x16px，圆角 4px，标签文字 12px，控件与标签间距 8px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=300-307&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 300:307 |
| 缓存 | 02-markdown文档/figma/component.checkbox.context.json |
| 截图 | 02-markdown文档/figma/component.checkbox.screenshot.png |
| 尺寸 | box 16x16px; check icon 10px; gap 8px; radius 4px |
| 颜色 | unchecked border #C9C9C9; checked background #0067D1; text #191919; check #FFFFFF |
| 布局 | inline-flex; align start; checkbox left and label right |
| 变体/状态 | 未选 / 选中 |

<!-- DS_AUTO_END component.checkbox -->

基于 Shadcn/ui `Checkbox`。尺寸 16×16px，圆角 4px，标签文字 12px `#191919`，间距 8px。

| 状态 | 样式 |
|---|---|
| 未选 | 边框 `#C9C9C9` |
| 选中 | 背景 `#0067D1`，白色 ✓（10px check icon） |
| 半选 | 背景 `#0067D1`，横线 |
| disabled | 背景 `#F5F5F5`，边框 `#C9C9C9` |

标签在右侧；纵向排列间距 8px；支持单独 / 组 / 全选（含半选）。

<!-- DS_SPEC_END -->

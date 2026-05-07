# Radio 单选框

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.radio`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.radio -->

### Figma 自动采集

> Figma 单选框包含未选与选中状态，控件尺寸 16x16px，全圆，标签文字 12px，间距 8px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=300-338&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 300:338 |
| 缓存 | 02-markdown文档/figma/component.radio.context.json |
| 截图 | 02-markdown文档/figma/component.radio.screenshot.png |
| 尺寸 | radio 16x16px; gap 8px; radius full |
| 颜色 | unchecked border #C9C9C9; checked brand #0067D1; text #191919 |
| 布局 | inline-flex; radio left and label right |
| 变体/状态 | 未选 / 选中 |

<!-- DS_AUTO_END component.radio -->

基于 Shadcn/ui `RadioGroup`。尺寸 16×16px，圆角 9999px，标签文字 12px `#191919`，间距 8px。

| 状态 | 样式 |
|---|---|
| 未选 | 边框 `#C9C9C9` |
| 选中 | 外圈 `#0067D1` + 中心实心蓝点 |
| disabled | 灰色 |

标签在右侧；纵向排列间距 8px；支持单独 / Radio Group。

<!-- DS_SPEC_END -->

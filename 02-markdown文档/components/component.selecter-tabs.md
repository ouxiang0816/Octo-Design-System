# Selecter Tabs 选块页签

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.selecter-tabs`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.selecter-tabs -->

### Figma 自动采集

> Selecter Tabs 选块页签：胶囊容器内的页签切换，选中项白底高亮，未选中项融入灰色背景

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=747-387&t=c3kqE9nJlM81M4uv-4 |
| Figma 节点 | 747:387 |
| 缓存 | 02-markdown文档/figma/component.selecter-tabs.context.json |
| 截图 | 02-markdown文档/figma/component.selecter-tabs.screenshot.png |
| 尺寸 | 容器: p-2px rounded-4px; tab item: px-12px py-4px rounded-4px; 无固定宽度 |
| 颜色 | 容器背景: rgba(25,25,25,0.05); 选中 tab: bg-white text #0067D1 font-medium; 未选中 tab: transparent text #191919 font-regular |
| 布局 | flex row, items-center, p-2px; 每个 tab item 为 flex 居中，rounded-4px |
| 变体/状态 | property1: '2'|'3'|'4'|'5' 控制显示 2–5 个页签; 每个 tab property1: true(选中)/false(未选中) |

<!-- DS_AUTO_END component.selecter-tabs -->

<!-- DS_MANUAL_START component.selecter-tabs -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.selecter-tabs -->

<!-- DS_SPEC_END -->

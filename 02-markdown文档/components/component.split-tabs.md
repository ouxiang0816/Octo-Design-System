# Split Tabs 分割线页签

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.split-tabs`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.split-tabs -->

### Figma 自动采集

> Split Tabs 分割线页签：水平排列的页签组，用竖向分隔线隔开各页签，选中项蓝色加粗，未选中灰色常规字重

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=747-284&t=c3kqE9nJlM81M4uv-4 |
| Figma 节点 | 747:284 |
| 缓存 | 02-markdown文档/figma/component.split-tabs.context.json |
| 截图 | 02-markdown文档/figma/component.split-tabs.screenshot.png |
| 尺寸 | tab item: px-12px py-4px; 分隔线: height 20px, width 0 (1px border); 容器无固定宽度，flex 自适应 |
| 颜色 | 选中文字: #0067D1 font-medium; 未选中文字: #191919 font-regular; 分隔线: #DFDFDF |
| 布局 | flex row, items-center; 每个 tab item 为 flex 居中; 分隔线穿插在 tab 之间 |
| 变体/状态 | property1: '1'|'2'|'3'|'4' 控制显示 1–4 个页签; 每个 tab 内部 property1: '选择'|'未选中' |

<!-- DS_AUTO_END component.split-tabs -->

<!-- DS_MANUAL_START component.split-tabs -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.split-tabs -->

<!-- DS_SPEC_END -->

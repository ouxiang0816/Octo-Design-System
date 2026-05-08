# Progress

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.progress`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

<!-- DS_AUTO_START component.progress -->

### Figma 自动采集

> Progress 进度条：水平进度轨道 + 标签行，支持显示/隐藏操作按钮（暂停/取消），百分比文字右侧跟随

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=748-456&t=c3kqE9nJlM81M4uv-4 |
| Figma 节点 | 748:456 |
| 缓存 | 02-markdown文档/figma/component.progress.context.json |
| 截图 | 02-markdown文档/figma/component.progress.screenshot.png |
| 尺寸 | 容器宽度: 227px (flex 可拉伸); 轨道高度: 4px rounded-30px; 进度条高度: 4px rounded-28px; label/操作文字: text-12px leading-20px |
| 颜色 | 轨道背景: #DFDFDF; 进度填充: #0067D1; 标签文字: #191919; 操作链接(暂停/取消): #0067D1; 百分比: #191919 |
| 布局 | flex col, items-start; 上行: label 左 + 操作链接 右 (justify-between pr-32px); 下行: 轨道 flex-1 + 百分比文字 gap-8px |
| 变体/状态 | propValue: true 显示操作按钮(暂停/取消); false 隐藏操作按钮 |

<!-- DS_AUTO_END component.progress -->

<!-- DS_MANUAL_START component.progress -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.progress -->

<!-- DS_SPEC_END -->

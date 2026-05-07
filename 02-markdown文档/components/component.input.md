# Input 输入框

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.input`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

基于 Shadcn/ui `Input`。高度 32px，圆角 4px，水平内边距 12px，字号 12px。

| 状态 | 边框 | 说明 |
|---|---|---|
| 默认 | `#C9C9C9` | — |
| focus | `#0067D1` + 光晕 `rgba(0,103,209,0.2)` | — |
| error | `#FF4D4F` | 错误提示在输入框下方 |
| disabled | `#C9C9C9` | 背景 `#F5F5F5`，cursor:not-allowed |

placeholder 文字：12px `#777777`；帮助文字与错误提示共用位置（错误时替换）。

<!-- DS_SPEC_END -->

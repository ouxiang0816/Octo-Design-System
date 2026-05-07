# Avatar 头像

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.avatar`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

基于 Shadcn/ui `Avatar`。圆形（圆角 9999px）。

| 尺寸 | 值 |
|---|---|
| S | 24px |
| M | 32px |
| L | 40px |
| XL | 64px |

兜底：图片加载失败 → 首字母（背景 `#D1D5DC`，文字 `#FFFFFF`）。Group 叠加间距 −8px，超出显示 +N。

<!-- DS_SPEC_END -->

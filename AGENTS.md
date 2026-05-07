# Octo Design System — AI Agent Instructions

当用户要求"用 Octo 设计系统"、"按设计规范"或"用设计系统组件"生成 UI 代码时，遵循以下流程。

## 第一步：读取规范

从以下 URL 获取最新设计规范（每次任务开始时必须重新获取，不使用缓存记忆）：

```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/02-markdown%E6%96%87%E6%A1%A3/AI_REFERENCE.md
```

## 第二步：使用组件源码

Octo Design System **没有 npm 包**。对于规范中已实现的组件（`AI_REFERENCE.md` 的可用组件表中 `exportName` 列有值），必须从 GitHub 获取源码并复制到目标项目，**禁止自己重新实现**。

**组件源码 URL 规则：**
```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/{组件文件名}.tsx
```

**工具函数（所有组件必须）：**
```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/utils.ts
```

**外部依赖：** 只有 `lucide-react`，运行 `npm install lucide-react` 安装。

## 第三步：生成代码

- 颜色、字号、圆角严格使用 `AI_REFERENCE.md` 中 `## Design Tokens` 定义的值
- 使用 React + TypeScript + Tailwind CSS
- 未实现的组件用符合 Token 规范的原生 HTML/Tailwind 替代，并注明"此组件暂未实现"

## 注意

- 如果 URL 不可达，告知用户并请求本地提供 `AI_REFERENCE.md`
- 所有规范以 `AI_REFERENCE.md` 为准，不依赖训练记忆中的规范

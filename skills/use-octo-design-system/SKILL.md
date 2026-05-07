---
name: use-octo-design-system
description: 使用 Octo 设计系统生成符合规范的 UI 代码。当用户要求"用 Octo 设计系统"、"按设计规范"、"用设计系统组件"时触发。
---

# use-octo-design-system

## 数据来源

**规范文件 URL（始终读取最新版本）：**
```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/02-markdown%E6%96%87%E6%A1%A3/AI_REFERENCE.md
```

---

## 执行步骤

1. **读取规范**：用 WebFetch 工具获取上方 URL 的最新 `AI_REFERENCE.md`。

2. **理解用户需求**：明确用户要构建什么界面或组件。

3. **选择组件**：从 `## 可用组件` 表中选择合适的组件，优先使用已实现的组件（`exportName` 列）。

4. **获取并使用组件源码**：
   - Octo Design System **没有 npm 包**，不能用 `@octo/design-system` 导入
   - 对于规范中已实现的组件（`exportName` 列有值），必须用 WebFetch 从 GitHub 获取源码，直接复制到目标项目中使用，**禁止自己重新实现**
   - 源码基础 URL：`https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/{文件名}.tsx`
   - 所有组件依赖 `utils.ts`，也需一并复制：`https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/utils.ts`
   - 外部依赖只有 `lucide-react`，用 `npm install lucide-react` 安装

5. **遵循规范生成代码**：
   - 颜色、字号、圆角严格使用 `## Design Tokens` 中定义的值
   - 遵守 `## AI 生成规则` 的必须/禁止项
   - 满足 `## 验收清单` 的所有条目

6. **代码格式**：使用 React + TypeScript，Tailwind CSS 类名。

---

## 示例触发语

- "用 Octo 设计系统做一个登录表单"
- "按设计规范实现一个带搜索的列表页"
- "用设计系统组件写一个文件上传区域"
- "帮我检查这段代码是否符合 Octo 设计规范"

---

## 注意事项

- 如读取失败（文件不存在或 URL 不可达），告知用户并请求提供 `AI_REFERENCE.md` 文件路径。
- `AI_REFERENCE.md` 是自动生成文件，内容以该文件为准，不依赖记忆中的规范。
- 如果用户要求的组件不在可用组件列表中，按以下两步处理：
  1. **基础保底**：所有颜色、字号、圆角、间距必须严格使用 `## Design Tokens` 中的值，不得使用任何未定义的魔法数字
  2. **视觉对齐**：用 WebFetch 读取最相近的已有组件规范（`https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/02-markdown%E6%96%87%E6%A1%A3/components/component.{最近似组件id}.md`），以其视觉结构（高度、padding、边框、状态样式）为基准实现，并在代码注释中注明 `// TODO: 此组件暂未纳入设计系统，建议补充规范`

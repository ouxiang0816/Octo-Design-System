# 如何使用这套设计系统

这套设计系统按五类目录维护：`01-excel表/` 负责轻量管理，`02-markdown文档/` 负责详细规范与 Figma 缓存，`03-开发组件/` 负责真实 React 组件，`04-预览网站/` 负责可交互网页预览，`05-自动化工作流/` 负责同步和构建脚本。

## 本文件职责

- 说明团队和 AI 如何维护、同步、检索和构建这套设计系统。
- 约定各文件的读取顺序、命令入口和协作边界。

## 本文件不负责

- 不定义视觉 token 和全局设计原则；这些由 `BASE.md` 负责。
- 不承载单个组件的详细规格正文；这些由 `COMPONENTS.md` 和 `components/component.*.md` 负责。

从现在开始，**AI 检索的主入口**不是整本 `COMPONENTS.md`，而是：
- `05-自动化工作流/generated/design-system-registry.json`
- `02-markdown文档/BASE.md`
- `02-markdown文档/components/component.*.md`

**当前手动维护的主源有两类**：
- `01-excel表/设计系统组件清单V1.synced.xlsx`：只维护 A–D 列
- `02-markdown文档/components/component.*.md`：按组件维护详细规范

## 日常维护流程

### 第一步：在表格里登记

打开 `01-excel表/设计系统组件清单V1.synced.xlsx`，只维护 A–D 四列：

| 列 | 内容 | 说明 |
|---|---|---|
| A | 组件名称 | 英文名 + 中文名（换行） |
| B | 状态 | `需要` / `新增` / `修改` / `已有` / `暂定` |
| C | Figma设计链接 | 设计稿节点 URL |
| D | 备注说明 | 尺寸、交互等补充说明 |

E 列起为系统自动填充，不需要手动修改。

### 第二步：查看哪些组件需要抓取 Figma 数据

```bash
npm --prefix 05-自动化工作流 run ds:figma-needed
```

只有 B 列状态包含「**需要**」「**新增**」「**修改**」的组件才会出现在待抓取列表中。把输出结果给 Claude，说「帮我抓取这些组件的 Figma 数据」即可。

### 第三步：Claude 抓取 Figma 并生成 context.json

Claude 使用 Figma MCP，按待抓取列表逐个调用，保存到：
- `02-markdown文档/figma/{id}.context.json`
- `02-markdown文档/figma/{id}.screenshot.png`

### 第四步：同步到 Markdown 和 registry

```bash
npm --prefix 05-自动化工作流 run ds:sync
```

同步会生成：

| 产物 | 作用 |
|---|---|
| `02-markdown文档/components/component.*.md` | 主规范文档；Figma 自动采集块会写回到对应组件文件 |
| `02-markdown文档/COMPONENTS.md` | 从单组件规范自动聚合出的总表 |
| `04-预览网站/src/generated/design-system-registry.ts` | Excel + Markdown 合并后的统一 registry |
| `05-自动化工作流/generated/design-system-registry.json` | 给 AI / 脚本使用的机器可读 registry |
| `01-excel表/设计系统组件清单V1.synced.xlsx` E 列起 | 系统 ID、同步状态等自动列 |

### 第五步：确认 Markdown 规范（你来看）

打开 `02-markdown文档/COMPONENTS.md` 或对应 `02-markdown文档/components/component.*.md`，确认自动区块里的尺寸、颜色、变体描述是否正确。确认后告知 Claude「规范确认，请更新组件代码」。

### 第六步：Claude 更新 React 组件代码

Claude 先读取 `05-自动化工作流/generated/design-system-registry.json` 定位目标组件，再按需读取 `BASE.md`、对应 `component.*.md`，最后修改 `03-开发组件/components.tsx` 和 `interactiveDemos.tsx`。

### 第七步：构建预览网站

```bash
npm --prefix 05-自动化工作流 run ds:build
```

构建完成后，`04-预览网站/Design System Visual Guide.html` 即可双击打开查看所有可交互组件。

---

## 命令速查

| 命令 | 作用 |
|---|---|
| `npm --prefix 05-自动化工作流 run ds:figma-needed` | 列出状态为「需要/新增/修改」且缺少 Figma 缓存的组件 |
| `npm --prefix 05-自动化工作流 run ds:figma` | 查看所有已链接 Figma 的组件缓存状态 |
| `npm --prefix 05-自动化工作流 run ds:check` | 只校验 Excel / Markdown 映射，不写文件 |
| `npm --prefix 05-自动化工作流 run ds:sync` | 将 Figma 缓存写入 Markdown，生成 registry 和同步表 |
| `npm --prefix 05-自动化工作流 run ds:build` | 同步 + 构建 React 预览 + 内联到 HTML |
| `npm --prefix 05-自动化工作流 run ds:dev` | 同步 + 启动 Vite 本地预览（开发用） |

## 同步规则

- Excel 负责轻量管理字段：组件名称、状态、Figma设计链接、备注说明。
- Figma 缓存负责从设计稿提取尺寸、颜色、布局、变体和截图。
- Markdown 负责详细设计规范；单组件规范文档是人工维护主源。
- `02-markdown文档/components/component.*.md` 是组件规范主源，自动区块由 Figma 缓存写回到对应文件。
- `02-markdown文档/COMPONENTS.md` 是从单组件规范自动聚合出的总表。
- React 组件负责可复用实现和可交互示例，统一放在 `03-开发组件/`。
- 网页预览从 registry 和 React 组件生成。
- 网站上的组件示例必须可操作：Switch 可切换，Checkbox/Radio 可选择，Select 可展开，Tabs 可切换，Drawer 可打开关闭，Input/Search 可输入。

同步状态含义：

| 状态 | 含义 |
|---|---|
| `synced` | Excel、Markdown、React 组件、HTML 预览均已映射 |
| `missing-figma` | 表格有 Figma 链接，但缺少本地 Figma context 缓存 |
| `missing-md` | 表格里有条目，但 `components/component.*.md` 尚无对应组件规范 |
| `missing-component` | 已有 MD 规范，但尚未注册 React 组件 |
| `missing-preview` | 已有 MD / 组件，但缺少网页预览锚点 |
| `conflict` | Excel 自定义规格和 MD 详细规范冲突 |

## 让 AI 生成 Demo

不要默认把整本 `COMPONENTS.md` 喂给 AI。推荐顺序：

1. 先读 `05-自动化工作流/generated/design-system-registry.json`，确定要用哪些组件。
2. 始终加载 `02-markdown文档/BASE.md`。
3. 只加载对应的 `02-markdown文档/components/component.*.md`。
4. 做页面生成时，再补一个 `02-markdown文档/templates/*.md`。
5. 只有在需要追溯总表、排查同步问题时，才读 `COMPONENTS.md`。

也就是说，常规上下文从：

`BASE.md + COMPONENTS.md + template`

改成：

`registry.json + BASE.md + 目标组件切片 + template`

`02-markdown文档/templates/` 仍按页面类型选择：

| 页面类型 | 模板 |
|---|---|
| Figma 插件、浏览器插件、单任务配置面板 | `02-markdown文档/templates/plugin-panel.md` |
| 项目列表、团队空间、文件夹管理 | `02-markdown文档/templates/project-space.md` |
| 组件库、图标库、设计资产检索 | `02-markdown文档/templates/asset-library.md` |
| 设计规范检查、一致性报告、质量验收 | `02-markdown文档/templates/check-report.md` |

## 如何新增模板（维护者）

1. 在 `02-markdown文档/templates/` 下新建 `your-page-type.md`
2. 按照现有模板结构填写：适用场景 → 首屏结构 → 布局尺寸 → 必备组件 → 禁止项 → AI Prompt
3. 在 `HOWTO.md` 的「页面类型 → 选哪个模板」表格里加一行

**不需要修改 BASE.md**（除非 token 或全局规则有变更）。

## 文件说明

| 文件 | 作用 | 更新频率 |
|---|---|---|
| `02-markdown文档/BASE.md` | 核心 token + 全局规则 | 低（token 变更时） |
| `02-markdown文档/components/component.*.md` | 单组件规范主源，供人工维护和 AI 渐进式读取 | 中（组件规格变更时） |
| `02-markdown文档/COMPONENTS.md` | 从单组件规范自动聚合出的总表 + 同步索引 | 自动 |
| `02-markdown文档/templates/*.md` | 各页面类型约束 + 即用 Prompt | 中（新增页面类型时） |
| `03-开发组件/` | 真实 React 组件和可交互预览示例 | 中（组件实现变更时） |
| `02-markdown文档/figma/*.context.json` | Codex/Figma MCP 采集的结构化摘要 | 自动 / Codex |
| `02-markdown文档/figma/*.screenshot.png` | Codex/Figma MCP 采集的设计截图 | 自动 / Codex |
| `04-预览网站/src/generated/design-system-registry.ts` | 自动生成 registry，不手改 | 自动 |
| `05-自动化工作流/generated/design-system-registry.json` | AI / 脚本的主检索入口，不手改 | 自动 |
| `01-excel表/设计系统组件清单V1.synced.xlsx` | 自动生成的同步映射表副本 | 自动 |
| `04-预览网站/Design System Visual Guide.html` | 自动生成的网页预览 | 自动 |

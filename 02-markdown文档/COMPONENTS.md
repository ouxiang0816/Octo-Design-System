# Octo Designer 设计系统 — 基础组件规格

> 与 BASE.md 配合使用。本文件为自动聚合总表；AI 与团队成员应优先通过 `05-自动化工作流/generated/design-system-registry.json` 定位后，再按需读取 `02-markdown文档/components/component.*.md`。
> 本文件参数以 Figma 实测为准（文件：Octo-Designer，UuRaxW6YNJVqnaxq0ihi6S）。

### 本文件职责

- 作为组件规范总表，汇总各组件主规范文档和同步索引。
- 便于整体浏览、校对和对外分享，不再作为组件规范唯一主源。

### 本文件不负责

- 不作为 AI 的默认首读入口；常规检索优先走 `registry.json + BASE.md + component.*.md`。
- 不承担团队协作流程说明；流程和命令统一写在 `HOWTO.md`。

---

## Button 按钮

<!-- DS_AUTO_START component.button -->

### Figma 自动采集

> Figma 节点包含主要按钮、次要按钮、下拉按钮、文本按钮，并覆盖默认、悬停、点击状态。按钮基准高度约 30-32px，圆角 4px，字号 14px/22px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=17-1112&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 17:1112 |
| 缓存 | 02-markdown文档/figma/component.button.context.json |
| 截图 | 02-markdown文档/figma/component.button.screenshot.png |
| 尺寸 | height 30-32px; padding 4px 16px; radius 4px |
| 颜色 | primary #0067D1; hover #2E86DE; active #004EA8; text #FFFFFF/#191919; border #C9C9C9 |
| 布局 | inline-flex; center aligned; icon + text gap 4-8px depending variant |
| 变体/状态 | 主要按钮 / 次要按钮 / 下拉按钮 / 文本按钮; 默认 / 悬停 / 点击 |

<!-- DS_AUTO_END component.button -->

基于 Shadcn/ui `Button` 扩展。圆角 4px，字号 14px / 行高 22px，水平内边距 16px，垂直内边距 4px。

| Variant | 背景 | 文本 | 边框 | 用途 |
|---|---|---|---|---|
| `primary` 默认 | `#0067D1` | `#FFFFFF` | 无 | 页面唯一主操作 |
| `primary` hover | `#2E86DE` | `#FFFFFF` | 无 | — |
| `primary` active | `#004EA8` | `#FFFFFF` | 无 | — |
| `secondary` 默认 | `#FFFFFF` | `#191919` | 1px `#C9C9C9` | 次级操作 |
| `secondary` hover | `#FFFFFF` | `#2E86DE` | 1px `#2E86DE` | — |
| `secondary` active | `#FFFFFF` | `#004EA8` | 1px `#004EA8` | — |
| `text` 文本按钮 | 透明 | `#191919` | 无 | 轻量操作、内联跳转 |

规则：同一区域最多一个 `primary`；文案用命令式（「导出」「新建」「保存」「取消」）；图标在文字左侧，间距 8px。

---

## Icon Button 图标按钮

基于 Shadcn/ui `Button` variant="icon"。尺寸 30×30px，圆角 6px，图标 14px。

| 状态 | 背景 | 图标色 |
|---|---|---|
| 默认 | 透明 | `#191919` |
| hover | `#F3F4F6` | `#191919` |
| active | `#E5E7EB` | `#191919` |
| disabled | 透明 | `#BFBFBF` |

规则：纯图标无文字；用于工具栏、关闭、更多等；必须叠加 Tooltip 说明用途。

---

## Text Link 文字链接

内联使用，无边框无背景。字号 12–14px。

| 状态 | 颜色 | 装饰 |
|---|---|---|
| 默认 | `#0067D1` | 无下划线 |
| hover | `#2E86DE` | 下划线 |
| disabled | `#BFBFBF` | 无 |

规则：用于文档跳转、帮助入口；不用于主操作按钮。

---

## Input 输入框

基于 Shadcn/ui `Input`。高度 32px，圆角 4px，水平内边距 12px，字号 12px。

| 状态 | 边框 | 说明 |
|---|---|---|
| 默认 | `#C9C9C9` | — |
| focus | `#0067D1` + 光晕 `rgba(0,103,209,0.2)` | — |
| error | `#FF4D4F` | 错误提示在输入框下方 |
| disabled | `#C9C9C9` | 背景 `#F5F5F5`，cursor:not-allowed |

placeholder 文字：12px `#777777`；帮助文字与错误提示共用位置（错误时替换）。

---

## Search 搜索框

<!-- DS_AUTO_START component.search -->

### Figma 自动采集

> Figma 搜索框为 280px 宽、32px 高，圆角 4px，右侧 14px 搜索图标，覆盖默认、悬浮、聚焦状态。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-1256&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:1256 |
| 缓存 | 02-markdown文档/figma/component.search.context.json |
| 截图 | 02-markdown文档/figma/component.search.screenshot.png |
| 尺寸 | width 280px; height 32px; padding 8px 12px; icon 14px; radius 4px |
| 颜色 | border default #C9C9C9; hover #191919; focus #0067D1; placeholder #777777; background #FFFFFF |
| 布局 | flex row; align center; justify between; text left and search icon right |
| 变体/状态 | Default / 悬浮 / 聚焦 |

<!-- DS_AUTO_END component.search -->

基于 Shadcn/ui `Input` + lucide `Search`。高度 32px，默认宽 280px，圆角 4px，内边距 12px。

| 状态 | 边框 |
|---|---|
| 默认 | `#C9C9C9` |
| hover | `#191919` |
| focus | `#0067D1` |

搜索图标 14px 右侧对齐，颜色 `#777777`；可选清除 × 图标。placeholder 描述搜索对象（「搜索需求」）；不占满整屏（除非搜索是页面主任务）。

---

## Select 下拉选择

<!-- DS_AUTO_START component.select -->

### Figma 自动采集

> Figma 下拉选择包含默认与选中/展开状态。触发器圆角 4px，边框默认 #C9C9C9，展开时边框 #0067D1，下拉面板白底并使用 0 4px 4px rgba(0,0,0,0.16) 阴影。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-884&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:884 |
| 缓存 | 02-markdown文档/figma/component.select.context.json |
| 截图 | 02-markdown文档/figma/component.select.screenshot.png |
| 尺寸 | trigger height about 32px; padding 4px 12px; menu item padding 4px 8px; radius 4px |
| 颜色 | border default #C9C9C9; open #0067D1; text #191919; background #FFFFFF |
| 布局 | trigger inline-flex gap 8px; expanded menu vertical list width 96px |
| 变体/状态 | 默认 / 选中（展开） |

<!-- DS_AUTO_END component.select -->

基于 Shadcn/ui `Select`。触发器高度 32px（内边距 12px / 4px），圆角 4px，字号 14px。

| 状态 | 触发器边框 |
|---|---|
| 默认 | `#C9C9C9` |
| focus / 展开 | `#0067D1` |

下拉面板：bg `#FFFFFF`，阴影 `0px 4px 4px rgba(0,0,0,0.16)`，圆角 4px；  
下拉项：px-8 py-4，高约 30px，文字 14px `#191919`；  
选中项背景 `#EFF6FF`，右侧显示 `✓` 图标（`#0067D1`）。  
变体：单选 / 多选（多选 Tag 在触发器内，bg `#DBEAFE`）；可搜索 / 不可搜索。  
规则：下拉宽度 ≥ 触发器宽度；超出视口时向上展开。

**Props（React 组件）**

| Prop | 类型 | 说明 |
|---|---|---|
| `options` | `string[]` | 选项列表，必填 |
| `value` | `string` | 当前选中值 |
| `onChange` | `(value: string) => void` | 选中回调 |
| `label` | `string` | 触发器显示文本（不传则显示 value） |

**使用示例**

```tsx
const [value, setValue] = useState('页面设计')
<SelectBox
  options={['组件库', '页面设计', '图标资产', '插画素材']}
  value={value}
  onChange={setValue}
/>
```

**组件源码**

外部项目无法通过 npm 安装时，从以下地址获取源码直接复制到项目中使用：

```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/select-box.tsx
```

依赖：`lucide-react`（Check、ChevronDown 图标），以及同目录 `utils.ts` 中的 `cx` 工具函数：
```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/utils.ts
```

**禁止**自己重新实现下拉选择，必须复用此源码，否则会导致选中态、✓ 图标、边框焦点等细节与规范不符。

---

## Checkbox 复选框

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

---

## Radio 单选框

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

---

## Switch 开关

<!-- DS_AUTO_START component.switch -->

### Figma 自动采集

> Figma 开关尺寸 38x20px，包含开/关状态，滑块 16px，胶囊轨道。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-820&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:820 |
| 缓存 | 02-markdown文档/figma/component.switch.context.json |
| 截图 | 02-markdown文档/figma/component.switch.screenshot.png |
| 尺寸 | track 38x20px; thumb 16px; radius full |
| 颜色 | on track #0067D1; off track gray; thumb #FFFFFF |
| 布局 | single switch control; thumb translates horizontally between off/on |
| 变体/状态 | 开 / 关 |

<!-- DS_AUTO_END component.switch -->

基于 Shadcn/ui `Switch`。尺寸 38×20px（胶囊形，圆角 999px），滑块 16px 圆形。

| 状态 | 轨道色 |
|---|---|
| 开启 | `#0067D1` |
| 关闭 | `#D1D5DC` |
| disabled | 透明度 50% |

点击整个开关区域触发；过渡动画 200ms ease。

---

## Tag / Chip 标签

<!-- DS_AUTO_START component.tag-chip -->

### Figma 自动采集

> Figma Tag/Chip 为 22px 高、4px 圆角，使用 10px/16px 文本，包含蓝、橙、红、绿四种语义色。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=300-494&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 300:494 |
| 缓存 | 02-markdown文档/figma/component.tag-chip.context.json |
| 截图 | 02-markdown文档/figma/component.tag-chip.screenshot.png |
| 尺寸 | height 22px; padding 2px 8px; radius 4px; text 10px/16px |
| 颜色 | blue rgba(0,103,209,0.2)/#0067D1; orange rgba(250,140,22,0.2)/#FA8C16; red rgba(255,77,79,0.2)/#FF4D4F; green rgba(115,209,61,0.2)/#73D13D |
| 布局 | inline-flex center; compact status label |
| 变体/状态 | 蓝 / 橙 / 红 / 绿 |

<!-- DS_AUTO_END component.tag-chip -->

高度 22px（py-2px），水平内边距 8px，圆角 4px，**字号 10px**，行高 16px。

| 颜色变体 | 背景 | 文字 |
|---|---|---|
| 蓝（默认） | `rgba(0,103,209,0.2)` | `#0067D1` |
| 橙 | `rgba(250,140,22,0.2)` | `#FA8C16` |
| 红 | `rgba(255,77,79,0.2)` | `#FF4D4F` |
| 绿 | `rgba(115,209,61,0.2)` | `#73D13D` |

变体：只读 / 可关闭 / 可点击；超出截断 + 省略号。仅用于状态标识，不用于装饰。

---

## 步进器 步进器

<!-- DS_AUTO_START component.步进器 -->

### Figma 自动采集

> 步进器由减号图标、竖线分隔符、数值、竖线分隔符、加号图标横向排列，边框圆角4px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=493-403&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 493:403 |
| 缓存 | 02-markdown文档/figma/component.步进器.context.json |
| 截图 | 02-markdown文档/figma/component.步进器.screenshot.png |
| 尺寸 | height ~30px; padding 8px 12px; radius 4px; icon 14px; separator 1px vertical line |
| 颜色 | border #DFDFDF; text #191919; background #FFFFFF |
| 布局 | flex row; align center; gap 14px; [minus-icon] | [number] | [plus-icon] |
| 变体/状态 | 默认（展示数值） |

<!-- DS_AUTO_END component.步进器 -->

<!-- DS_MANUAL_START component.步进器 -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.步进器 -->

---

## File Upload 文件上传

<!-- DS_AUTO_START component.file-upload -->

### Figma 自动采集

> 文件上传区为虚线边框拖拽区域，宽375px高200px，中央竖向排列上传图标、提示文字和格式说明。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=716-272&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 716:272 |
| 缓存 | 02-markdown文档/figma/component.file-upload.context.json |
| 截图 | 02-markdown文档/figma/component.file-upload.screenshot.png |
| 尺寸 | width 375px; height 200px; radius 4px; plus-icon 20px |
| 颜色 | background rgba(25,25,25,0.05); border dashed #DFDFDF; text #191919; link-text #0067D1; helper #777777 |
| 布局 | flex col; center; gap 8px; [plus-icon] above [text+link] above [helper-text] |
| 变体/状态 | 默认上传区 |

<!-- DS_AUTO_END component.file-upload -->

<!-- DS_MANUAL_START component.file-upload -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.file-upload -->

---

## File Card 文件卡片

<!-- DS_AUTO_START component.file-card -->

### Figma 自动采集

> 文件卡片展示文件名、大小、上传者和日期，左侧带32px文档图标，圆角8px边框卡片。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=493-295&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 493:295 |
| 缓存 | 02-markdown文档/figma/component.file-card.context.json |
| 截图 | 02-markdown文档/figma/component.file-card.screenshot.png |
| 尺寸 | width 300px; padding 12px; radius 8px; file-icon 32px |
| 颜色 | border #DFDFDF; title #191919; meta-text #777777 |
| 布局 | flex row; justify between; align end; [icon+name+size] left, [uploader+date] right |
| 变体/状态 | 有图标 / 无图标（propValue 控制） |

<!-- DS_AUTO_END component.file-card -->

<!-- DS_MANUAL_START component.file-card -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.file-card -->

---

## Drawer / Sheet 抽屉

基于 Shadcn/ui `Sheet`。从右侧弹出，遮罩 `rgba(0,0,0,0.3)`。

| 项目 | 值 |
|---|---|
| 宽度 | 378–480px |
| 标题栏高度 | 56px |
| 内容区内边距 | 24px |
| 背景 | `#FFFFFF` |
| 左侧阴影 | `shadow.lg` |

标题左对齐，× 关闭右对齐；底部操作栏固定（可选）；内容区独立滚动；Esc 或点击遮罩关闭。

<!-- DS_SYNC_INDEX_START -->

---

## Top Navigation 顶部导航

高度 56px，背景 `#FFFFFF`，底部 1px `#E5E7EB` 分隔线。

| 区域 | 内容 |
|---|---|
| 左侧品牌区 | 菜单按钮 + Logo + 产品名（14px Bold `#101828`）+ 副标题（10px `#777777`） |
| 中部页签区 | 当前页签：2px `#0067D1` 下划线，文字 `#101828` Medium；非当前：`#101828` Regular；页签间距 32px |
| 右侧工具区 | 搜索图标 + 头像或账户入口 |

规则：只承载全局区域切换，不放复杂业务筛选。

---

## Side Navigation 侧边导航

<!-- DS_AUTO_START component.side-navigation -->

### Figma 自动采集

> Figma 左侧导航宽 255px，菜单项高 36px，选中项使用 #EFF6FF 背景，文本 12px/20px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=17-1305&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 17:1305 |
| 缓存 | 02-markdown文档/figma/component.side-navigation.context.json |
| 截图 | 02-markdown文档/figma/component.side-navigation.screenshot.png |
| 尺寸 | width 255px; item height 36px; horizontal padding 16px; icon 16px; arrow 14px |
| 颜色 | selected #EFF6FF; text #191919 |
| 布局 | vertical menu list; item row justify between; optional icon and arrow |
| 变体/状态 | 默认 / 选中; 可有图标 / 可有箭头 |

<!-- DS_AUTO_END component.side-navigation -->

宽度 255px，水平内边距 16px，菜单项高度 36px，文字 12px，行高 20px。

| 状态 | 背景 | 文字 |
|---|---|---|
| 默认 | 透明 | `#191919` |
| hover | `#F9FAFB` | `#191919` |
| 选中 | `#EFF6FF` | `#191919` |
| 分组标题 | 透明 | `#364153` Medium 12px |

图标 16px，展开箭头 14px 右侧对齐；当前项只用浅蓝背景，不叠加粗边框；分组标题不可点击。

---

## Breadcrumb 面包屑

<!-- DS_AUTO_START component.breadcrumb -->

### Figma 自动采集

> Figma 面包屑支持 2/3/4 层路径，项间距 4px，文字 12px/20px，父级 #777777，当前项 #191919，分隔符 #AEAEAE。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-1214&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:1214 |
| 缓存 | 02-markdown文档/figma/component.breadcrumb.context.json |
| 截图 | 02-markdown文档/figma/component.breadcrumb.screenshot.png |
| 尺寸 | text 12px/20px; gap 4px; optional icon 12px |
| 颜色 | parent #777777; current #191919; separator #AEAEAE |
| 布局 | inline-flex; horizontal path with slash or icon separator |
| 变体/状态 | 2层 / 3层 / 4层; 默认 / 选中 |

<!-- DS_AUTO_END component.breadcrumb -->

基于 Shadcn/ui `Breadcrumb`。字号 12px，行高 20px，项间距 4px。

| 项类型 | 颜色 |
|---|---|
| 当前项（不可点击） | `#191919` |
| 父级项（可点击） | `#777777`，hover 变 `#0067D1` |
| 分隔符 `/` | `#AEAEAE` |

超过 4 层时中间层折叠为 `…`；可选 Chevron 图标替代 `/`。

---

## Tabs 页签

<!-- DS_AUTO_START component.tabs -->

### Figma 自动采集

> Figma Tabs 容器高度 54px，页签间距 32px，选中项底部 2px 品牌蓝线，文字 14px/20px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=278-561&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 278:561 |
| 缓存 | 02-markdown文档/figma/component.tabs.context.json |
| 截图 | 02-markdown文档/figma/component.tabs.screenshot.png |
| 尺寸 | tab height 54px; active underline 2px; gap 32px; text 14px/20px |
| 颜色 | active underline #0067D1; text #101828 |
| 布局 | horizontal flex tabs; active item with bottom border |
| 变体/状态 | 2 / 3 / 4 / 5 / 6 tabs; 选中 / 未选中 |

<!-- DS_AUTO_END component.tabs -->

容器高度 54px，页签间距 32px（gap），字号 14px，行高 20px。

| 状态 | 文字色 | 字重 | 底部线 |
|---|---|---|---|
| 选中 | `#101828` | Medium | 2px `#0067D1` |
| 未选中 | `#101828` | Regular | 无 |

用于同层级内容切换；不用于主流程步骤；超出时显示左右滚动箭头。

---

## Steps 步骤条

<!-- DS_AUTO_START component.steps -->

### Figma 自动采集

> Figma Steps 支持 2-5 步，步骤图标 32px 圆形，完成态浅蓝底蓝边，当前态品牌蓝底，待完成态浅灰底灰边，连接线 1px。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=112-382&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 112:382 |
| 缓存 | 02-markdown文档/figma/component.steps.context.json |
| 截图 | 02-markdown文档/figma/component.steps.screenshot.png |
| 尺寸 | step icon 32x32px; title 14px/22px; helper 12px/20px; connector 1px |
| 颜色 | done bg #E6F2FD border #0067D1; current bg #0067D1 text #FFFFFF; pending bg rgba(25,25,25,0.05) border #C9C9C9; connector #0067D1/#DFDFDF |
| 布局 | horizontal flex; icon above title/helper; connector centered to icon |
| 变体/状态 | 2 / 3 / 4 / 5 steps; 完成 / 当前 / 待完成 |

<!-- DS_AUTO_END component.steps -->

步骤图标直径 32px（圆形 rounded-999px），连接线 1px，标题 14px Medium `#191919`，辅助文字 12px `#777777`，图标与文字间距 8px。

| 状态 | 图标样式 | 连接线 |
|---|---|---|
| 完成 | 浅蓝底 `#E6F2FD` + 蓝边 `#0067D1` + 白 ✓ | `#0067D1` |
| 当前 | 蓝底 `#0067D1` + 白色数字 | `#0067D1` |
| 待完成 | 背景 `rgba(25,25,25,0.05)` + 边 `#C9C9C9` + `#AEAEAE` 数字 | `#DFDFDF` |
| 错误 | 红底 `#FF4D4F` + 白 ✕ | `#DFDFDF` |

变体：水平 / 垂直；可点击 / 不可点击；仅用于流程进度，不用于内容切换。

**Props（React 组件）**

| Prop | 类型 | 说明 |
|---|---|---|
| `items` | `string[]` | 步骤标签数组，必填 |
| `currentStep` | `number` | 当前步骤索引（0-based），不传时组件内部管理 |
| `onStepChange` | `(step: number) => void` | 步骤切换回调 |

**使用示例**

```tsx
// 受控用法（外部控制步骤）
<Steps items={['选择文件', '填写信息', '确认上传']} currentStep={1} onStepChange={setStep} />

// 非受控用法（组件内部管理状态）
<Steps items={['选择文件', '填写信息', '确认上传']} />
```

**组件源码**

外部项目无法通过 npm 安装时，从以下地址获取源码直接复制到项目中使用：

```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/steps.tsx
```

依赖：`lucide-react`（Check、X 图标），以及同目录 `utils.ts` 中的 `cx` 工具函数：
```
https://raw.githubusercontent.com/ouxiang0816/Octo-Design-System/main/03-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/utils.ts
```

**禁止**自己重新实现步骤条，必须复用此源码，否则会导致步骤状态颜色、连接线、图标等细节与规范不符。

---

## Avatar 头像

基于 Shadcn/ui `Avatar`。圆形（圆角 9999px）。

| 尺寸 | 值 |
|---|---|
| S | 24px |
| M | 32px |
| L | 40px |
| XL | 64px |

兜底：图片加载失败 → 首字母（背景 `#D1D5DC`，文字 `#FFFFFF`）。Group 叠加间距 −8px，超出显示 +N。

---

## Badge 徽章

仅用于状态标识，不用于装饰。字号 11px，高度 20px，圆角 4px。

数字徽章：小红点直径 8px，背景 `#FF4D4F`，文字 `#FFFFFF`；超过 99 显示 99+；叠加在目标元素右上角。

---

## Toast / Message 全局提示

<!-- DS_AUTO_START component.toast-message -->

### Figma 自动采集

> Toast全局提示为白色浮层卡片，宽269px，含状态图标、主文字、关闭按钮，可选描述行。

| 项目 | 内容 |
|---|---|
| 来源 | https://www.figma.com/design/UuRaxW6YNJVqnaxq0ihi6S/Octo-Designer?node-id=493-350&t=MwJLOtifyWl4Xd53-4 |
| Figma 节点 | 493:350 |
| 缓存 | 02-markdown文档/figma/component.toast-message.context.json |
| 截图 | 02-markdown文档/figma/component.toast-message.screenshot.png |
| 尺寸 | width 269px; padding 12px 16px; radius 8px; status-icon 14px; close-icon 8px |
| 颜色 | background #FFFFFF; shadow 0px 8px 8px rgba(0,0,0,0.16); title #191919; description #777777 |
| 布局 | flex col; gap 8px; header row justify-between [icon+title] and [close-icon]; optional description row with 22px left indent |
| 变体/状态 | 普通 / 带描述（propValue）; Variant2 |

<!-- DS_AUTO_END component.toast-message -->

<!-- DS_MANUAL_START component.toast-message -->

人工补充区：如需补充业务语义、特殊交互或实现注意事项，请写在此区块内。

<!-- DS_MANUAL_END component.toast-message -->

---

<!-- DS_SYNC_INDEX_START -->

## 同步索引

> 自动生成：由 `npm run ds:sync` 更新，用于连接表格清单、Markdown 规范、React 组件和网页预览。

| 系统ID | 组件 | Markdown | React | HTML预览 | 同步状态 |
|---|---|---|---|---|---|
| `component.button` | Button 按钮 | [Button 按钮](#button) | `Button` | `#button` | `synced` |
| `component.icon-button` | Icon Button 图标按钮 | [Icon Button 图标按钮](#icon-button) | `IconButton` | `#icon-button` | `synced` |
| `component.text-link` | Text Link 文字链接 | [Text Link 文字链接](#text-link) | `TextLink` | `#text-link` | `synced` |
| `component.input` | Input 输入框 | [Input 输入框](#input) | `Input` | `#input` | `synced` |
| `component.textarea` | Textarea 多行输入 | — | — | — | `missing-md` |
| `component.search` | Search 搜索框 | [Search 搜索框](#search) | `SearchInput` | `#search` | `synced` |
| `component.inputnumber` | InputNumber 数字输入 | — | — | — | `missing-md` |
| `component.select` | Select 下拉选择 | [Select 下拉选择](#select) | `SelectBox` | `#select` | `synced` |
| `component.checkbox` | Checkbox 复选框 | [Checkbox 复选框](#checkbox) | `Checkbox` | `#checkbox` | `synced` |
| `component.radio` | Radio 单选框 | [Radio 单选框](#radio) | `Radio` | `#radio` | `synced` |
| `component.switch` | Switch 开关 | [Switch 开关](#switch) | `Switch` | `#switch` | `synced` |
| `component.slider` | Slider 滑块 | — | — | — | `missing-md` |
| `component.upload` | Upload 上传 | — | — | — | `missing-md` |
| `component.scrollbar` | Scrollbar 滚动条 | — | — | — | `missing-md` |
| `component.tag-chip` | Tag / Chip 标签 | [Tag / Chip 标签](#tag-chip) | `Tag` | `#tag-chip` | `synced` |
| `component.步进器` | 步进器 步进器 | [步进器 步进器](#步进器) | `Stepper` | `#步进器` | `synced` |
| `component.file-upload` | File Upload 文件上传 | [File Upload 文件上传](#file-upload) | `FileUpload` | `#file-upload` | `synced` |
| `component.card` | Card 卡片 | — | — | — | `missing-md` |
| `component.file-card` | File Card 文件卡片 | [File Card 文件卡片](#file-card) | `FileCard` | `#file-card` | `synced` |
| `component.collapse` | Collapse 折叠面板 | — | — | — | `missing-md` |
| `component.modal-dialog` | Modal / Dialog 对话框 | — | — | — | `missing-md` |
| `component.drawer-sheet` | Drawer / Sheet 抽屉 | [Drawer / Sheet 抽屉](#drawer-sheet) | `DrawerPreview` | `#drawer-sheet` | `synced` |
| `component.popover` | Popover 气泡弹框 | — | — | — | `missing-md` |
| `component.tooltip` | Tooltip 文字提示 | — | — | — | `missing-md` |
| `component.toolbar` | Toolbar 工具栏 | — | — | — | `missing-md` |
| `component.split-panel` | Split Panel 分割面板 | — | — | — | `missing-md` |
| `component.top-navigation` | Top Navigation 顶部导航 | [Top Navigation 顶部导航](#top-navigation) | `TopNavigation` | `#top-navigation` | `synced` |
| `component.side-navigation` | Side Navigation 侧边导航 | [Side Navigation 侧边导航](#side-navigation) | `SideNavigation` | `#side-navigation` | `synced` |
| `component.breadcrumb` | Breadcrumb 面包屑 | [Breadcrumb 面包屑](#breadcrumb) | `Breadcrumb` | `#breadcrumb` | `synced` |
| `component.tabs` | Tabs 页签 | [Tabs 页签](#tabs) | `Tabs` | `#tabs` | `synced` |
| `component.dropdown-menu` | Dropdown Menu 下拉菜单 | — | — | — | `missing-md` |
| `component.pagination` | Pagination 分页器 | — | — | — | `missing-md` |
| `component.steps` | Steps 步骤条 | [Steps 步骤条](#steps) | `Steps` | `#steps` | `synced` |
| `component.back-button` | Back Button 返回按钮 | — | — | — | `missing-md` |
| `component.anchor` | Anchor 锚点导航 | — | — | — | `missing-md` |
| `component.form` | Form 表单容器 | — | — | — | `missing-md` |
| `component.form-item` | Form Item 表单项 | — | — | — | `missing-md` |
| `component.校验状态-validation` | Validation 校验状态 | — | — | — | `missing-md` |
| `component.help-text` | Help Text 帮助文字 | — | — | — | `missing-md` |
| `component.table` | Table 表格 | — | — | — | `missing-md` |
| `component.list` | List 列表 | — | — | — | `missing-md` |
| `component.tree` | Tree 树形控件 | — | — | — | `missing-md` |
| `component.avatar` | Avatar 头像 | [Avatar 头像](#avatar) | `Avatar` | `#avatar` | `synced` |
| `component.badge` | Badge 徽章 | [Badge 徽章](#badge) | `Badge` | `#badge` | `synced` |
| `component.progress` | Progress 进度条 | — | — | — | `missing-md` |
| `component.statistic` | Statistic 指标块 | — | — | — | `missing-md` |
| `component.empty-state` | Empty State 空状态 | — | — | — | `missing-md` |
| `component.skeleton` | Skeleton 骨架屏 | — | — | — | `missing-md` |
| `component.descriptions` | Descriptions 描述列表 | — | — | — | `missing-md` |
| `component.divider` | Divider 分隔线 | — | — | — | `missing-md` |
| `component.alert` | Alert 行内提示 | — | — | — | `missing-md` |
| `component.toast-message` | Toast / Message 全局提示 | [Toast / Message 全局提示](#toast-message) | `Toast` | `#toast-message` | `synced` |
| `component.notification` | Notification 通知提醒 | — | — | — | `missing-md` |
| `component.spin-loading` | Spin / Loading 加载 | — | — | — | `missing-md` |
| `component.popconfirm` | Popconfirm 气泡确认 | — | — | — | `missing-md` |

<!-- DS_SYNC_INDEX_END -->

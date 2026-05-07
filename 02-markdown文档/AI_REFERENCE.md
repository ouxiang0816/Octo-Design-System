# Octo Design System · AI Reference

> 自动生成，请勿手动编辑。最后同步：2026-05-07 09:00 UTC
> 供 Claude Code / Codex / OpenCode 等 AI 编码工具读取，确保生成代码符合 Octo 设计规范。

---

## 使用方式

在项目的 `CLAUDE.md` / `AGENTS.md` 中引用本文件（GitHub 迁移后替换为 raw URL）：
```
参考 Octo 设计规范：<本文件绝对路径或 GitHub raw URL>
```

---

## 可用组件

| 系统ID | 中文名 | 导出名 | 分类 |
|---|---|---|---|
| `component.button` | 按钮 | `Button` | 基础类 |
| `component.icon-button` | 图标按钮 | `IconButton` | 基础类 |
| `component.text-link` | 文字链接 | `TextLink` | 基础类 |
| `component.input` | 输入框 | `Input` | 基础类 |
| `component.search` | 搜索框 | `SearchInput` | 基础类 |
| `component.select` | 下拉选择 | `SelectBox` | 基础类 |
| `component.checkbox` | 复选框 | `Checkbox` | 基础类 |
| `component.radio` | 单选框 | `Radio` | 基础类 |
| `component.switch` | 开关 | `Switch` | 基础类 |
| `component.tag-chip` | 标签 | `Tag` | 基础类 |
| `component.步进器` | 步进器 | `Stepper` | 基础类 |
| `component.file-upload` | 文件上传 | `FileUpload` | 基础类 |
| `component.file-card` | 文件卡片 | `FileCard` | 容器类 |
| `component.drawer-sheet` | 抽屉 | `DrawerPreview` | 容器类 |
| `component.top-navigation` | 顶部导航 | `TopNavigation` | 导航类 |
| `component.side-navigation` | 侧边导航 | `SideNavigation` | 导航类 |
| `component.breadcrumb` | 面包屑 | `Breadcrumb` | 导航类 |
| `component.tabs` | 页签 | `Tabs` | 导航类 |
| `component.steps` | 步骤条 | `Steps` | 导航类 |
| `component.avatar` | 头像 | `Avatar` | 数据展示类 |
| `component.badge` | 徽章 | `Badge` | 数据展示类 |
| `component.toast-message` | 全局提示 | `Toast` | 反馈类 |

## 导入方式

```tsx
import {
  Button,
  IconButton,
  TextLink,
  Input,
  SearchInput,
  SelectBox,
  Checkbox,
  Radio,
  Switch,
  Tag,
  Stepper,
  FileUpload,
  FileCard,
  DrawerPreview,
  TopNavigation,
  SideNavigation,
  Breadcrumb,
  Tabs,
  Steps,
  Avatar,
  Badge,
  Toast,
} from '@octo/design-system'
```

---

## 组件规范

### Button（按钮）

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

### IconButton（图标按钮）

基于 Shadcn/ui `Button` variant="icon"。尺寸 30×30px，圆角 6px，图标 14px。

| 状态 | 背景 | 图标色 |
|---|---|---|
| 默认 | 透明 | `#191919` |
| hover | `#F3F4F6` | `#191919` |
| active | `#E5E7EB` | `#191919` |
| disabled | 透明 | `#BFBFBF` |

规则：纯图标无文字；用于工具栏、关闭、更多等；必须叠加 Tooltip 说明用途。

### TextLink（文字链接）

内联使用，无边框无背景。字号 12–14px。

| 状态 | 颜色 | 装饰 |
|---|---|---|
| 默认 | `#0067D1` | 无下划线 |
| hover | `#2E86DE` | 下划线 |
| disabled | `#BFBFBF` | 无 |

规则：用于文档跳转、帮助入口；不用于主操作按钮。

### Input（输入框）

基于 Shadcn/ui `Input`。高度 32px，圆角 4px，水平内边距 12px，字号 12px。

| 状态 | 边框 | 说明 |
|---|---|---|
| 默认 | `#C9C9C9` | — |
| focus | `#0067D1` + 光晕 `rgba(0,103,209,0.2)` | — |
| error | `#FF4D4F` | 错误提示在输入框下方 |
| disabled | `#C9C9C9` | 背景 `#F5F5F5`，cursor:not-allowed |

placeholder 文字：12px `#777777`；帮助文字与错误提示共用位置（错误时替换）。

### SearchInput（搜索框）

基于 Shadcn/ui `Input` + lucide `Search`。高度 32px，默认宽 280px，圆角 4px，内边距 12px。

| 状态 | 边框 |
|---|---|
| 默认 | `#C9C9C9` |
| hover | `#191919` |
| focus | `#0067D1` |

搜索图标 14px 右侧对齐，颜色 `#777777`；可选清除 × 图标。placeholder 描述搜索对象（「搜索需求」）；不占满整屏（除非搜索是页面主任务）。

### SelectBox（下拉选择）

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

### Checkbox（复选框）

基于 Shadcn/ui `Checkbox`。尺寸 16×16px，圆角 4px，标签文字 12px `#191919`，间距 8px。

| 状态 | 样式 |
|---|---|
| 未选 | 边框 `#C9C9C9` |
| 选中 | 背景 `#0067D1`，白色 ✓（10px check icon） |
| 半选 | 背景 `#0067D1`，横线 |
| disabled | 背景 `#F5F5F5`，边框 `#C9C9C9` |

标签在右侧；纵向排列间距 8px；支持单独 / 组 / 全选（含半选）。

### Radio（单选框）

基于 Shadcn/ui `RadioGroup`。尺寸 16×16px，圆角 9999px，标签文字 12px `#191919`，间距 8px。

| 状态 | 样式 |
|---|---|
| 未选 | 边框 `#C9C9C9` |
| 选中 | 外圈 `#0067D1` + 中心实心蓝点 |
| disabled | 灰色 |

标签在右侧；纵向排列间距 8px；支持单独 / Radio Group。

### Switch（开关）

基于 Shadcn/ui `Switch`。尺寸 38×20px（胶囊形，圆角 999px），滑块 16px 圆形。

| 状态 | 轨道色 |
|---|---|
| 开启 | `#0067D1` |
| 关闭 | `#D1D5DC` |
| disabled | 透明度 50% |

点击整个开关区域触发；过渡动画 200ms ease。

### Tag（标签）

高度 22px（py-2px），水平内边距 8px，圆角 4px，**字号 10px**，行高 16px。

| 颜色变体 | 背景 | 文字 |
|---|---|---|
| 蓝（默认） | `rgba(0,103,209,0.2)` | `#0067D1` |
| 橙 | `rgba(250,140,22,0.2)` | `#FA8C16` |
| 红 | `rgba(255,77,79,0.2)` | `#FF4D4F` |
| 绿 | `rgba(115,209,61,0.2)` | `#73D13D` |

变体：只读 / 可关闭 / 可点击；超出截断 + 省略号。仅用于状态标识，不用于装饰。

### Stepper（步进器）


### FileUpload（文件上传）


### FileCard（文件卡片）


### DrawerPreview（抽屉）

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

### TopNavigation（顶部导航）

高度 56px，背景 `#FFFFFF`，底部 1px `#E5E7EB` 分隔线。

| 区域 | 内容 |
|---|---|
| 左侧品牌区 | 菜单按钮 + Logo + 产品名（14px Bold `#101828`）+ 副标题（10px `#777777`） |
| 中部页签区 | 当前页签：2px `#0067D1` 下划线，文字 `#101828` Medium；非当前：`#101828` Regular；页签间距 32px |
| 右侧工具区 | 搜索图标 + 头像或账户入口 |

规则：只承载全局区域切换，不放复杂业务筛选。

### SideNavigation（侧边导航）

宽度 255px，水平内边距 16px，菜单项高度 36px，文字 12px，行高 20px。

| 状态 | 背景 | 文字 |
|---|---|---|
| 默认 | 透明 | `#191919` |
| hover | `#F9FAFB` | `#191919` |
| 选中 | `#EFF6FF` | `#191919` |
| 分组标题 | 透明 | `#364153` Medium 12px |

图标 16px，展开箭头 14px 右侧对齐；当前项只用浅蓝背景，不叠加粗边框；分组标题不可点击。

### Breadcrumb（面包屑）

基于 Shadcn/ui `Breadcrumb`。字号 12px，行高 20px，项间距 4px。

| 项类型 | 颜色 |
|---|---|
| 当前项（不可点击） | `#191919` |
| 父级项（可点击） | `#777777`，hover 变 `#0067D1` |
| 分隔符 `/` | `#AEAEAE` |

超过 4 层时中间层折叠为 `…`；可选 Chevron 图标替代 `/`。

### Tabs（页签）

容器高度 54px，页签间距 32px（gap），字号 14px，行高 20px。

| 状态 | 文字色 | 字重 | 底部线 |
|---|---|---|---|
| 选中 | `#101828` | Medium | 2px `#0067D1` |
| 未选中 | `#101828` | Regular | 无 |

用于同层级内容切换；不用于主流程步骤；超出时显示左右滚动箭头。

### Steps（步骤条）

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

### Avatar（头像）

基于 Shadcn/ui `Avatar`。圆形（圆角 9999px）。

| 尺寸 | 值 |
|---|---|
| S | 24px |
| M | 32px |
| L | 40px |
| XL | 64px |

兜底：图片加载失败 → 首字母（背景 `#D1D5DC`，文字 `#FFFFFF`）。Group 叠加间距 −8px，超出显示 +N。

### Badge（徽章）

仅用于状态标识，不用于装饰。字号 11px，高度 20px，圆角 4px。

数字徽章：小红点直径 8px，背景 `#FF4D4F`，文字 `#FFFFFF`；超过 99 显示 99+；叠加在目标元素右上角。

### Toast（全局提示）


---

## Design Tokens

## 颜色 Token

| Token | 值 | 用途 |
|---|---|---|
| `brand.primary` | `#0067D1` | 主按钮、当前导航下划线、关键操作 |
| `brand.primary.hover` | `#2E86DE` | 主按钮 hover |
| `text.primary` | `#191919` | 正文、导航文本、菜单文本 |
| `text.strong` | `#101828` | 品牌名、当前导航、重要标题 |
| `text.secondary` | `#777777` | 辅助说明、placeholder |
| `text.tertiary` | `#364153` | 左侧导航分组标题 |
| `border.default` | `#E5E7EB` | 顶部导航分隔线、通用浅边框 |
| `border.input` | `#C9C9C9` | 输入框边框 |
| `surface.page` | `#FFFFFF` | 页面主背景 |
| `surface.selected` | `#EFF6FF` | 选中背景（导航、列表） |
| `surface.avatar` | `#D1D5DC` | 头像兜底背景 |

颜色规则：品牌蓝禁止大面积铺背景；普通文本禁止使用蓝色；同一页面不得出现多套高饱和颜色。

## 状态色（语义色）

| 语义 | 前景色 | 背景色（浅） | 用途 |
|---|---|---|---|
| Success | `#52C41A` | `#F6FFED` | 成功状态、Badge、Alert |
| Warning | `#FAAD14` | `#FFFBE6` | 警告状态 |
| Error | `#FF4D4F` | `#FFF2F0` | 错误状态、必填星号 |
| Info | `#0067D1` | `#EFF6FF` | 信息提示（同 brand.primary） |
| Disabled 文本 | `#BFBFBF` | — | 禁用态文字 |
| Disabled 背景 | — | `#F5F5F5` | 禁用态控件背景 |

规则：语义色只用于状态标识（Badge、Alert 色条、状态点），不铺大面积背景。

## 字号规格

### 标题层级

| 级别 | 字号 / 行高 / 字重 | 用途 |
|---|---|---|
| H1 | 24px / 32px / Semibold | 页面主标题 |
| H2 | 20px / 28px / Semibold | 区块标题 |
| H3 | 16px / 24px / Medium | 卡片 / 面板标题 |
| H4 | 14px / 22px / Medium | 表单分组标题 |

### 正文 / 控件

| 场景 | 字号 | 行高 | 字重 |
|---|---|---|---|
| 品牌名 | 14px | 20px | Bold |
| 主文本 / 按钮 | 14px | 22px | Regular |
| 输入框 / 搜索框 | 12px | 18px | Regular |
| 左侧菜单 | 12px | 20px | Regular |
| 左侧分组标题 | 12px | 20px | Medium |
| 面包屑 | 12px | 20px | Regular |
| 辅助说明 / 步骤描述 | 12px | 20px | Regular |
| Tag 标签 | 10px | 16px | Regular |

## 圆角 Token

| Token | 值 | 用途 |
|---|---|---|
| `radius.sm` | 4px | 按钮、输入框、Tag、Badge、下拉触发器 |
| `radius.md` | 6px | 图标按钮 hover 容器、Popover |
| `radius.lg` | 8px | 卡片、Modal、Drawer |
| `radius.full` | 9999px | 头像、Switch、圆形步骤图标 |

## 关键组件尺寸

| 组件 | 高度 / 尺寸 |
|---|---|
| 顶部导航 | 56px |
| 左侧导航宽度 | 255px |
| 侧栏菜单项 | 36px（px-16） |
| 主按钮 / 次按钮 | ~30px（py-4，水平 px-16，字号 14px/22px） |
| 输入框 / 搜索框 / Select | 32px（px-12） |
| Icon Button | 30×30px |
| Switch | 38×20px |
| Tag | 高 22px（py-2，px-8） |
| Checkbox / Radio | 16×16px |
| Steps 图标 | 32px 圆形 |
| Drawer 宽度 | 378–480px |
| Avatar S/M/L/XL | 24 / 32 / 40 / 64px |
| Tabs 容器 | 54px 高，页签间距 32px |

---

## AI 生成规则

**必须：**
- 使用上方 token、组件和尺寸约束
- 生成真实可操作的工具界面，不生成展示型落地页
- 包含必要状态（空态、加载态、选中态、hover 态）
- 文案使用工具型命令式：「导出」「新建」「保存」「取消」
- 使用图标表达常见动作：搜索、更多、关闭、展开、导入、导出

**禁止：**
- 大面积紫蓝渐变、玻璃拟态、装饰光斑
- 把页面主体验包在大卡片中
- 多套不一致的圆角、边框或按钮风格
- 同一区域超过一个主按钮
- 营销型文案和无业务意义的装饰插画

## 验收清单

- [ ] 主色使用 `#0067D1`，未滥用于背景或普通文本
- [ ] 按钮 30px、输入框 32px、菜单项 36px、顶部导航 56px
- [ ] 圆角统一（按钮/输入框 4px，卡片 ≤ 8px）
- [ ] 无营销型 Hero 和装饰大卡片
- [ ] 当前状态、选中态、hover 有明确视觉反馈
- [ ] 常见桌面宽度下正常显示
- [ ] 文案是工具型、动作型、具体明确
- [ ] 组件可映射到 Shadcn/ui
- [ ] 颜色未硬编码，落在 CSS variables 或 Tailwind theme


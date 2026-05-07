# Select 下拉选择

> 组件规范主源。与 `../BASE.md` 配合使用。
> 系统ID：`component.select`。本文件人工维护；`../COMPONENTS.md` 由同步脚本自动聚合生成。

<!-- DS_SPEC_START -->

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

<!-- DS_SPEC_END -->

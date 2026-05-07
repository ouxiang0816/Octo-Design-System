/* eslint-disable react-refresh/only-export-components */
import { useState, type ReactNode } from 'react'
import { Download, MoreHorizontal, Plus, Search, Settings } from 'lucide-react'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  DrawerPreview,
  FileCard,
  FileUpload,
  IconButton,
  Input,
  InteractiveFrame,
  Radio,
  SelectBox,
  SideNavigation,
  Stepper,
  Steps,
  Switch,
  Tabs,
  Tag,
  TextLink,
  Toast,
  ToolbarExample,
  TopNavigation,
} from '../../03-开发组件/components'

function InputDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Input placeholder="请输入名称" value={value} onChange={(event) => setValue(event.target.value)} helperText={`当前输入 ${value.length} 个字符`} />
      <Input placeholder="错误状态" error helperText="组件名称不能为空" />
      <Input placeholder="禁用状态" disabled />
    </div>
  )
}

function SearchDemo() {
  const [value, setValue] = useState('Button')
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-[280px]">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="搜索组件名称"
          className="h-8 w-full rounded-sm border border-[#C9C9C9] bg-white pl-3 pr-8 text-[12px] leading-[18px] text-[#191919] outline-none transition-all placeholder:text-[#777777] hover:border-[#191919] focus:border-[#0067D1] focus:shadow-[0_0_0_2px_rgba(0,103,209,0.2)]"
        />
        {value ? (
          <button type="button" onClick={() => setValue('')} className="absolute right-3 top-1/2 -translate-y-1/2 border-0 bg-transparent p-0 text-[#777777]">
            ×
          </button>
        ) : (
          <Search size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#777777]" />
        )}
      </div>
      <span className="text-[11px] text-[#777777]">可输入和清空，当前关键词：{value || '空'}</span>
    </div>
  )
}

function SelectDemo() {
  const [value, setValue] = useState('原子组件')
  return <SelectBox value={value} onChange={setValue} options={['全部组件', '原子组件', '复合组件', '布局组件']} />
}

function CheckboxDemo() {
  const [checked, setChecked] = useState(true)
  return (
    <div className="flex flex-col gap-2">
      <Checkbox label={checked ? '已选择，点击取消' : '未选择，点击选择'} checked={checked} onCheckedChange={setChecked} />
      <Checkbox label="半选状态" indeterminate />
      <Checkbox label="禁用状态" disabled />
    </div>
  )
}

function RadioDemo() {
  const [value, setValue] = useState('a')
  return (
    <div className="flex flex-col gap-2">
      <Radio label="选项 A" checked={value === 'a'} onSelect={() => setValue('a')} />
      <Radio label="选项 B" checked={value === 'b'} onSelect={() => setValue('b')} />
      <Radio label="禁用状态" disabled />
    </div>
  )
}

function StepperDemo() {
  const [val, setVal] = useState(5)
  return (
    <InteractiveFrame title="点击加减按钮调整数值">
      <Stepper value={val} min={0} max={99} onChange={setVal} />
    </InteractiveFrame>
  )
}

function ToastDemo() {
  const [visible, setVisible] = useState(true)
  return (
    <InteractiveFrame title="点击关闭后可重新显示">
      {visible
        ? <Toast title="这是一条普通的反馈提示" description="这是一条普通的反馈提示" onClose={() => setVisible(false)} />
        : <Button onClick={() => setVisible(true)}>重新显示 Toast</Button>
      }
    </InteractiveFrame>
  )
}

function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <InteractiveFrame title="点击开关切换状态">
      <Switch label={checked ? '已开启' : '已关闭'} checked={checked} onCheckedChange={setChecked} />
    </InteractiveFrame>
  )
}

export const componentDemoMap: Record<string, ReactNode> = {
  'component.button': (
    <div className="flex flex-wrap items-center gap-3">
      <Button icon={<Plus size={14} />}>新建</Button>
      <Button variant="secondary" icon={<Download size={14} />}>导出</Button>
      <Button variant="text">取消</Button>
      <Button disabled>保存</Button>
    </div>
  ),
  'component.icon-button': (
    <div className="flex flex-wrap items-center gap-3">
      <IconButton label="搜索" icon={<Search size={14} />} />
      <IconButton label="设置" icon={<Settings size={14} />} />
      <IconButton label="更多" icon={<MoreHorizontal size={14} />} />
      <IconButton label="禁用" disabled />
    </div>
  ),
  'component.text-link': (
    <div className="flex flex-wrap items-center gap-4 text-[14px]">
      <TextLink>查看文档</TextLink>
      <TextLink className="text-[12px]">帮助入口</TextLink>
      <TextLink aria-disabled>不可用链接</TextLink>
    </div>
  ),
  'component.input': <InputDemo />,
  'component.search': <SearchDemo />,
  'component.select': <SelectDemo />,
  'component.checkbox': <CheckboxDemo />,
  'component.radio': <RadioDemo />,
  'component.switch': <SwitchDemo />,
  'component.tag-chip': (
    <div className="flex flex-wrap items-center gap-2">
      <Tag label="组件" />
      <Tag label="待审核" variant="orange" />
      <Tag label="错误" variant="red" />
      <Tag label="已发布" variant="green" />
      <Tag label="可关闭" closable />
    </div>
  ),
  'component.top-navigation': <TopNavigation />,
  'component.side-navigation': <SideNavigation />,
  'component.breadcrumb': <Breadcrumb />,
  'component.tabs': <Tabs />,
  'component.steps': <Steps />,
  'component.badge': (
    <div className="flex flex-wrap items-center gap-3">
      <Badge label="Success" variant="green" />
      <Badge label="Warning" variant="orange" />
      <Badge label="Error" variant="red" />
      <Badge label="Info" />
    </div>
  ),
  'component.avatar': (
    <div className="flex items-center gap-3">
      <Avatar label="S" size="s" />
      <Avatar label="M" />
      <Avatar label="L" size="l" />
      <Avatar label="XL" size="xl" />
    </div>
  ),
  'component.drawer-sheet': <DrawerPreview />,
  'component.步进器': <StepperDemo />,
  'component.file-upload': <FileUpload />,
  'component.file-card': (
    <div className="flex flex-col gap-3">
      <FileCard name="设计规范.pdf" size="2.4 M" uploader="李明" date="2024.03.15" />
      <FileCard name="组件清单.xlsx" size="512 KB" uploader="王芳" date="2024.04.01" showIcon={false} />
    </div>
  ),
  'component.toast-message': <ToastDemo />,
}

export const fallbackDemo = <ToolbarExample />

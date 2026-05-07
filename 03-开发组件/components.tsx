import { useState, type ReactNode } from 'react'
import type React from 'react'
import {
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Menu,
  Minus,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  X,
} from 'lucide-react'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type ButtonVariant = 'primary' | 'secondary' | 'text'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  icon?: React.ReactNode
}

const buttonVariantClass: Record<ButtonVariant, string> = {
  primary: 'border-transparent bg-[#0067D1] text-white hover:bg-[#2E86DE] active:bg-[#004EA8] disabled:bg-[#F5F5F5] disabled:text-[#BFBFBF]',
  secondary: 'border-[#C9C9C9] bg-white text-[#191919] hover:border-[#2E86DE] hover:text-[#2E86DE] active:border-[#004EA8] active:text-[#004EA8] disabled:border-[#C9C9C9] disabled:bg-[#F5F5F5] disabled:text-[#BFBFBF]',
  text: 'border-transparent bg-transparent text-[#191919] hover:text-[#2E86DE] active:text-[#004EA8] disabled:text-[#BFBFBF]',
}

export function Button({ variant = 'primary', icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        'inline-flex h-[30px] items-center justify-center gap-2 whitespace-nowrap rounded-sm border px-4 text-[14px] leading-[22px] transition-colors duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0067D1] disabled:cursor-not-allowed',
        buttonVariantClass[variant],
        className,
      )}
    >
      {icon ? <span className="flex items-center">{icon}</span> : null}
      {children}
    </button>
  )
}

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon?: React.ReactNode
}

export function IconButton({ label, icon = <MoreHorizontal size={14} />, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      title={label}
      {...props}
      className={cx(
        'inline-flex h-[30px] w-[30px] items-center justify-center rounded-md border-0 bg-transparent text-[#191919] transition-colors duration-100 hover:bg-[#F3F4F6] active:bg-[#E5E7EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0067D1] disabled:cursor-not-allowed disabled:text-[#BFBFBF]',
        className,
      )}
    >
      {icon}
    </button>
  )
}

export function TextLink({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cx('cursor-pointer text-[#0067D1] no-underline hover:text-[#2E86DE] hover:underline aria-disabled:pointer-events-none aria-disabled:text-[#BFBFBF]', className)}
    >
      {children}
    </a>
  )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  helperText?: string
}

export function Input({ error, helperText, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1">
      <input
        {...props}
        className={cx(
          'h-8 w-[220px] rounded-sm border bg-white px-3 text-[12px] leading-[18px] text-[#191919] outline-none transition-all duration-100 placeholder:text-[#777777] hover:border-[#191919] focus:border-[#0067D1] focus:shadow-[0_0_0_2px_rgba(0,103,209,0.2)] disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#BFBFBF]',
          error ? 'border-[#FF4D4F] focus:border-[#FF4D4F] focus:shadow-[0_0_0_2px_rgba(255,77,79,0.18)]' : 'border-[#C9C9C9]',
          className,
        )}
      />
      {helperText ? (
        <span className={cx('text-[11px] leading-4', error ? 'text-[#FF4D4F]' : 'text-[#777777]')}>{helperText}</span>
      ) : null}
    </label>
  )
}

export function SearchInput({ value = '', placeholder = '搜索组件名称' }: { value?: string; placeholder?: string }) {
  return (
    <div className="relative w-[280px]">
      <input
        value={value}
        readOnly
        placeholder={placeholder}
        className="h-8 w-full rounded-sm border border-[#C9C9C9] bg-white pl-3 pr-8 text-[12px] leading-[18px] text-[#191919] outline-none transition-all duration-100 placeholder:text-[#777777] hover:border-[#191919] focus:border-[#0067D1] focus:shadow-[0_0_0_2px_rgba(0,103,209,0.2)]"
      />
      {value
        ? <X size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777777]" />
        : <Search size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#777777]" />
      }
    </div>
  )
}

export function SelectBox({
  label,
  options = ['全部组件', '原子组件', '复合组件'],
  value = '组件类型',
  onChange,
  defaultOpen = false,
}: {
  label?: string
  options?: string[]
  value?: string
  onChange?: (value: string) => void
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const current = label ?? value
  return (
    <div className="relative w-[200px]">
      <button
        type="button"
        onClick={() => setOpen((next) => !next)}
        className={cx(
          'flex h-8 w-full items-center justify-between rounded-sm border bg-white px-3 text-left text-[14px] leading-[22px] text-[#191919] transition-all duration-100 hover:border-[#191919]',
          open ? 'border-[#0067D1] shadow-[0_0_0_2px_rgba(0,103,209,0.2)]' : 'border-[#C9C9C9]',
        )}
      >
        {current}
        <ChevronDown size={14} className={cx('text-[#777777] transition-transform duration-200', open && 'rotate-180')} />
      </button>
      {open ? (
        <div className="absolute left-0 top-9 z-10 w-full overflow-hidden rounded-sm border border-[#E5E7EB] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.16)]">
          {options.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                onChange?.(item)
                setOpen(false)
              }}
              className={cx('flex h-[30px] w-full items-center px-3 text-left text-[14px] text-[#191919] hover:bg-[#F3F4F6]', item === value && 'bg-[#EFF6FF]')}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Checkbox({
  label,
  checked = false,
  indeterminate,
  disabled,
  onCheckedChange,
}: {
  label: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cx('inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[12px] leading-5 text-[#191919]', disabled ? 'cursor-not-allowed text-[#BFBFBF]' : 'cursor-pointer')}
    >
      <span
        className={cx(
          'flex h-4 w-4 items-center justify-center rounded-sm border-[1.5px]',
          checked || indeterminate ? 'border-[#0067D1] bg-[#0067D1] text-white' : 'border-[#C9C9C9] bg-white',
          disabled && 'border-[#C9C9C9] bg-[#F5F5F5] text-[#BFBFBF]',
        )}
      >
        {checked ? <Check size={10} /> : indeterminate ? <Minus size={10} /> : null}
      </span>
      {label}
    </button>
  )
}

export function Radio({ label, checked, disabled, onSelect }: { label: string; checked?: boolean; disabled?: boolean; onSelect?: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={checked}
      onClick={onSelect}
      className={cx('inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[12px] leading-5 text-[#191919]', disabled ? 'cursor-not-allowed text-[#BFBFBF]' : 'cursor-pointer')}
    >
      <span className={cx('flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] bg-white', checked ? 'border-[#0067D1]' : 'border-[#C9C9C9]', disabled && 'bg-[#F5F5F5]')}>
        <span className={cx('h-1.5 w-1.5 rounded-full bg-[#0067D1]', checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0')} />
      </span>
      {label}
    </button>
  )
}

export function Switch({
  label,
  checked = false,
  disabled,
  onCheckedChange,
}: {
  label?: string
  checked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cx('inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[12px] leading-5 text-[#191919]', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer')}
    >
      <span className={cx('relative h-5 w-[38px] rounded-full transition-colors duration-200', checked ? 'bg-[#0067D1]' : 'bg-[#D1D5DC]')}>
        <span className={cx('absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200', checked && 'translate-x-[18px]')} />
      </span>
      {label}
    </button>
  )
}

type Tone = 'blue' | 'orange' | 'red' | 'green' | 'gray'

const toneClass: Record<Tone, string> = {
  blue: 'bg-[rgba(0,103,209,0.2)] text-[#0067D1]',
  orange: 'bg-[rgba(250,140,22,0.2)] text-[#FA8C16]',
  red: 'bg-[rgba(255,77,79,0.2)] text-[#FF4D4F]',
  green: 'bg-[rgba(115,209,61,0.2)] text-[#73D13D]',
  gray: 'bg-[#F3F4F6] text-[#777777]',
}

export function Tag({ label, variant = 'blue', closable }: { label: string; variant?: Tone; closable?: boolean }) {
  return (
    <span className={cx('inline-flex h-[22px] items-center gap-1 rounded-sm px-2 text-[10px] leading-4', toneClass[variant])}>
      {label}
      {closable ? <X size={10} className="opacity-70" /> : null}
    </span>
  )
}

export function Badge({ label, variant = 'blue' }: { label: string; variant?: Tone }) {
  return <span className={cx('inline-flex h-5 items-center rounded-sm px-2 text-[11px] font-medium leading-5', toneClass[variant])}>{label}</span>
}

export function Avatar({ label = 'OD', size = 'm' }: { label?: string; size?: 's' | 'm' | 'l' | 'xl' }) {
  const sizeClass = {
    s: 'h-6 w-6 text-[9px]',
    m: 'h-8 w-8 text-[12px]',
    l: 'h-10 w-10 text-[14px]',
    xl: 'h-16 w-16 text-[22px]',
  }[size]
  return <span className={cx('inline-flex items-center justify-center rounded-full bg-[#D1D5DC] font-semibold text-white', sizeClass)}>{label}</span>
}

export function TopNavigation() {
  return (
    <div className="flex h-14 min-w-[620px] items-center overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
      <div className="flex h-full items-center gap-2 border-r border-[#E5E7EB] px-4">
        <IconButton label="菜单" icon={<Menu size={14} />} />
        <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#0067D1] text-[10px] font-bold text-white">OD</div>
        <div>
          <div className="text-[14px] font-bold leading-5 text-[#101828]">Octo Designer</div>
          <div className="text-[10px] leading-none text-[#777777]">Design System</div>
        </div>
      </div>
      <div className="flex h-full flex-1 items-center gap-8 px-4">
        {['组件库', 'Token 管理', '检查报告'].map((item, index) => (
          <div key={item} className={cx('relative flex h-full items-center text-[14px] leading-5 text-[#101828]', index === 0 ? 'font-medium' : 'font-normal')}>
            {item}
            {index === 0 ? <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0067D1]" /> : null}
          </div>
        ))}
      </div>
      <div className="flex h-full items-center gap-1 border-l border-[#E5E7EB] px-3">
        <IconButton label="搜索" icon={<Search size={14} />} />
        <Avatar label="王" size="s" />
      </div>
    </div>
  )
}

export function SideNavigation() {
  return (
    <div className="w-[255px] rounded-lg border border-[#E5E7EB] bg-white p-2">
      {[
        ['资产管理', ['组件库', '图标库', '颜色 Token']],
        ['工具', ['同步设置', '导出配置']],
      ].map(([group, items]) => (
        <div key={group as string} className="mb-1">
          <div className="flex h-7 items-center px-3 text-[12px] font-medium leading-5 text-[#364153]">{group}</div>
          {(items as string[]).map((item, index) => (
            <div key={item} className={cx('flex h-9 items-center gap-2 rounded-sm px-3 text-[12px] leading-5 text-[#191919]', index === 0 && group === '资产管理' ? 'bg-[#EFF6FF]' : 'hover:bg-[#F9FAFB]')}>
              <Settings size={16} />
              <span className="flex-1">{item}</span>
              {index === 0 ? <ChevronRight size={14} className="text-[#777777]" /> : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function Breadcrumb() {
  return (
    <div className="flex items-center gap-1 text-[12px] leading-5">
      <TextLink className="text-[#777777]">组件库</TextLink>
      <ChevronRight size={12} className="text-[#AEAEAE]" />
      <TextLink className="text-[#777777]">基础类</TextLink>
      <ChevronRight size={12} className="text-[#AEAEAE]" />
      <span className="text-[#191919]">Button 规范</span>
    </div>
  )
}

export function Tabs({ items = ['全部', '组件', 'Token'] }: { items?: string[] }) {
  const [active, setActive] = useState(items[0])
  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
      <div className="flex h-[54px] items-center gap-8 border-b border-[#E5E7EB] px-4">
        {items.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActive(tab)}
            className={cx('relative flex h-full items-center border-0 bg-transparent p-0 text-[14px] leading-5 text-[#101828]', tab === active ? 'font-medium' : 'font-normal hover:text-[#0067D1]')}
          >
            {tab}
            {tab === active ? <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0067D1]" /> : null}
          </button>
        ))}
      </div>
      <div className="p-4 text-[12px] leading-5 text-[#777777]">当前显示：{active}</div>
    </div>
  )
}

export function Steps({ items = ['步骤一', '步骤二', '步骤三', '步骤四'] }: { items?: string[] }) {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <div className="flex min-w-[520px] flex-col gap-3">
      <div className="flex items-start">
        {items.map((label, index) => {
          const state = index < currentStep ? 'done' : index === currentStep ? 'current' : 'pending'
          return (
            <div key={label} className="flex flex-1 items-start">
              <button
                type="button"
                aria-current={state === 'current' ? 'step' : undefined}
                onClick={() => setCurrentStep(index)}
                className="flex min-w-[82px] cursor-pointer flex-col items-center gap-2 border-0 bg-transparent p-0 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0067D1]"
              >
                <span
                  className={cx(
                    'flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] text-[14px] font-medium transition-colors duration-200',
                    state === 'done' && 'border-[#0067D1] bg-[#E6F2FD] text-[#0067D1]',
                    state === 'current' && 'border-[#0067D1] bg-[#0067D1] text-white',
                    state === 'pending' && 'border-[#C9C9C9] bg-[rgba(25,25,25,0.05)] text-[#AEAEAE]',
                  )}
                >
                  {state === 'done' ? <Check size={18} /> : index + 1}
                </span>
                <span className="text-[13px] font-medium leading-5 text-[#191919]">{label}</span>
                <span className="text-[11px] leading-4 text-[#777777]">
                  {state === 'done' ? '已完成' : state === 'current' ? '当前步骤' : '待完成'}
                </span>
              </button>
              {index < items.length - 1 ? <span className={cx('mt-4 h-px flex-1 transition-colors duration-200', index < currentStep ? 'bg-[#0067D1]' : 'bg-[#DFDFDF]')} /> : null}
            </div>
          )
        })}
      </div>
      <div className="text-[12px] leading-5 text-[#777777]">点击步骤节点切换当前步骤：{items[currentStep]}</div>
    </div>
  )
}

export function StepStatusPreview() {
  const steps = [
    ['完成', 'done'],
    ['当前', 'current'],
    ['待完成', 'pending'],
    ['错误', 'error'],
  ]
  return (
    <div className="flex min-w-[520px] items-start">
      {steps.map(([label, state], index) => (
        <div key={label} className="flex flex-1 items-start">
          <div className="flex min-w-[82px] flex-col items-center gap-2">
            <span
              className={cx(
                'flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] text-[14px] font-medium',
                state === 'done' && 'border-[#0067D1] bg-[#E6F2FD] text-[#0067D1]',
                state === 'current' && 'border-[#0067D1] bg-[#0067D1] text-white',
                state === 'pending' && 'border-[#C9C9C9] bg-[rgba(25,25,25,0.05)] text-[#AEAEAE]',
                state === 'error' && 'border-[#FF4D4F] bg-[#FF4D4F] text-white',
              )}
            >
              {state === 'done' ? <Check size={18} /> : state === 'error' ? <X size={18} /> : index + 1}
            </span>
            <span className="text-[13px] font-medium leading-5 text-[#191919]">{label}</span>
          </div>
          {index < steps.length - 1 ? <span className={cx('mt-4 h-px flex-1', index < 2 ? 'bg-[#0067D1]' : 'bg-[#DFDFDF]')} /> : null}
        </div>
      ))}
    </div>
  )
}

export function DrawerPreview() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative h-[260px] overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#F5F6F8]">
      <div className="flex h-full items-center justify-center">
        <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      </div>
      {open ? (
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" onClick={() => setOpen(false)}>
          <div className="absolute bottom-0 right-0 top-0 flex w-[380px] flex-col bg-white shadow-lg" onClick={(event) => event.stopPropagation()}>
            <div className="flex h-14 items-center justify-between border-b border-[#E5E7EB] px-6">
              <span className="text-[14px] font-semibold text-[#101828]">资产详情</span>
              <IconButton label="关闭" icon={<X size={14} />} onClick={() => setOpen(false)} />
            </div>
            <div className="flex-1 p-6 text-[12px] leading-5 text-[#777777]">
              抽屉内容区独立滚动，底部操作栏固定。点击遮罩或关闭按钮可关闭。
            </div>
            <div className="flex h-14 items-center justify-end gap-2 border-t border-[#E5E7EB] px-6">
              <Button variant="secondary" onClick={() => setOpen(false)}>取消</Button>
              <Button onClick={() => setOpen(false)}>保存</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function InteractiveFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[12px] font-medium leading-5 text-[#364153]">{title}</div>
      {children}
    </div>
  )
}

export function Stepper({
  value = 0,
  min = 0,
  max = 999,
  onChange,
}: {
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
}) {
  return (
    <div className="inline-flex w-fit items-center gap-3.5 rounded-sm border border-[#DFDFDF] bg-white px-3 py-2">
      <button
        type="button"
        disabled={value <= min}
        onClick={() => onChange?.(value - 1)}
        className="flex items-center justify-center border-0 bg-transparent p-0 text-[#191919] transition-colors hover:text-[#0067D1] disabled:cursor-not-allowed disabled:text-[#BFBFBF]"
      >
        <Minus size={14} />
      </button>
      <span className="h-[15px] w-px shrink-0 bg-[#DFDFDF]" />
      <span className="min-w-[2ch] text-center text-[14px] leading-[22px] text-[#191919]">{value}</span>
      <span className="h-[15px] w-px shrink-0 bg-[#DFDFDF]" />
      <button
        type="button"
        disabled={value >= max}
        onClick={() => onChange?.(value + 1)}
        className="flex items-center justify-center border-0 bg-transparent p-0 text-[#191919] transition-colors hover:text-[#0067D1] disabled:cursor-not-allowed disabled:text-[#BFBFBF]"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}

export function FileUpload({
  accept = 'doc、xlsx、pdf',
  maxSize = '5M',
  onClick,
}: {
  accept?: string
  maxSize?: string
  onClick?: () => void
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="flex h-[200px] w-[375px] cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[#DFDFDF] bg-[rgba(25,25,25,0.05)] transition-colors hover:border-[#0067D1]"
    >
      <Plus size={20} className="text-[#191919]" />
      <div className="flex items-center gap-0.5 text-[14px] leading-[22px]">
        <span className="text-[#191919]">将文件拖到此处或</span>
        <span className="text-[#0067D1]">单击上传</span>
      </div>
      <span className="text-[12px] leading-[20px] text-[#777777]">不超过 {maxSize}，支持 {accept}</span>
    </div>
  )
}

export function FileCard({
  name = '文件名称.doc',
  size = '3.1 M',
  uploader = '张三',
  date = '2022.11.04',
  showIcon = true,
}: {
  name?: string
  size?: string
  uploader?: string
  date?: string
  showIcon?: boolean
}) {
  return (
    <div className="flex w-[300px] items-end justify-between rounded-lg border border-[#DFDFDF] p-3">
      <div className="flex items-center gap-2">
        {showIcon ? (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-[#0067D1]">
            <FileText size={32} strokeWidth={1.5} />
          </div>
        ) : null}
        <div className="flex flex-col gap-1">
          <span className="text-[14px] leading-normal text-[#191919]">{name}</span>
          <span className="text-[12px] leading-normal text-[#777777]">{size}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[12px] leading-normal text-[#777777]">
        <span>{uploader}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export function Toast({
  title = '这是一条普通的反馈提示',
  description,
  onClose,
}: {
  title?: string
  description?: string
  onClose?: () => void
}) {
  return (
    <div className="flex w-[269px] flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-[0px_8px_8px_rgba(0,0,0,0.16)]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#0067D1] text-[9px] font-bold italic text-white">i</span>
          <span className="text-[12px] leading-[20px] text-[#191919]">{title}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex shrink-0 items-center border-0 bg-transparent p-0 text-[#777777] hover:text-[#191919]"
        >
          <X size={10} />
        </button>
      </div>
      {description ? (
        <div className="pl-[22px] text-[12px] leading-[20px] text-[#777777]">{description}</div>
      ) : null}
    </div>
  )
}

export function ToolbarExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <SearchInput />
      <SelectBox label="原子组件" />
      <Button variant="secondary" icon={<Download size={14} />}>导出</Button>
      <Button>新建</Button>
    </div>
  )
}

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cx } from './utils'

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

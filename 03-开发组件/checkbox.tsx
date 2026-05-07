import { Check, Minus } from 'lucide-react'
import { cx } from './utils'

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

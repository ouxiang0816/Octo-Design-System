import { useState } from 'react'
import { cx } from './utils'

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

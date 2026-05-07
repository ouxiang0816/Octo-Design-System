import { cx } from './utils'

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

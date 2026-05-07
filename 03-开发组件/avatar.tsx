import { cx } from './utils'

export function Avatar({ label = 'OD', size = 'm' }: { label?: string; size?: 's' | 'm' | 'l' | 'xl' }) {
  const sizeClass = {
    s: 'h-6 w-6 text-[9px]',
    m: 'h-8 w-8 text-[12px]',
    l: 'h-10 w-10 text-[14px]',
    xl: 'h-16 w-16 text-[22px]',
  }[size]
  return <span className={cx('inline-flex items-center justify-center rounded-full bg-[#D1D5DC] font-semibold text-white', sizeClass)}>{label}</span>
}

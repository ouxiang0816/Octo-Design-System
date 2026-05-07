import { cx, type Tone, toneClass } from './utils'

export function Badge({ label, variant = 'blue' }: { label: string; variant?: Tone }) {
  return <span className={cx('inline-flex h-5 items-center rounded-sm px-2 text-[11px] font-medium leading-5', toneClass[variant])}>{label}</span>
}

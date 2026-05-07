import { X } from 'lucide-react'
import { cx, type Tone, toneClass } from './utils'

export function Tag({ label, variant = 'blue', closable }: { label: string; variant?: Tone; closable?: boolean }) {
  return (
    <span className={cx('inline-flex h-[22px] items-center gap-1 rounded-sm px-2 text-[10px] leading-4', toneClass[variant])}>
      {label}
      {closable ? <X size={10} className="opacity-70" /> : null}
    </span>
  )
}

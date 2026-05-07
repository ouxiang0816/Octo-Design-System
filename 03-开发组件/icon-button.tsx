import type React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { cx } from './utils'

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

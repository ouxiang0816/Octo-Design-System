import type React from 'react'
import { cx } from './utils'

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

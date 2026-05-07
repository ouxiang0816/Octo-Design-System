import type React from 'react'
import { cx } from './utils'

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

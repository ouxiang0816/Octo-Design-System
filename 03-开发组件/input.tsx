import type React from 'react'
import { cx } from './utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  helperText?: string
}

export function Input({ error, helperText, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1">
      <input
        {...props}
        className={cx(
          'h-8 w-[220px] rounded-sm border bg-white px-3 text-[12px] leading-[18px] text-[#191919] outline-none transition-all duration-100 placeholder:text-[#777777] hover:border-[#191919] focus:border-[#0067D1] focus:shadow-[0_0_0_2px_rgba(0,103,209,0.2)] disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#BFBFBF]',
          error ? 'border-[#FF4D4F] focus:border-[#FF4D4F] focus:shadow-[0_0_0_2px_rgba(255,77,79,0.18)]' : 'border-[#C9C9C9]',
          className,
        )}
      />
      {helperText ? (
        <span className={cx('text-[11px] leading-4', error ? 'text-[#FF4D4F]' : 'text-[#777777]')}>{helperText}</span>
      ) : null}
    </label>
  )
}

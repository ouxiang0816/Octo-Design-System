import type { ReactNode } from 'react'

export function InteractiveFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[12px] font-medium leading-5 text-[#364153]">{title}</div>
      {children}
    </div>
  )
}

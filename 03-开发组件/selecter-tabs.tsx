import { useState } from 'react'
import { cx } from './utils'

export function SelecterTabs({ items = ['页签一', '页签二', '页签三'] }: { items?: string[] }) {
  const [active, setActive] = useState(items[0])
  return (
    <div className="inline-flex items-center rounded-[4px] bg-[rgba(25,25,25,0.05)] p-0.5">
      {items.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActive(tab)}
          className={cx(
            'rounded-[4px] border-0 px-3 py-1 text-[14px] leading-5 transition-colors',
            tab === active ? 'bg-white font-medium text-[#0067D1]' : 'bg-transparent font-normal text-[#191919]',
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

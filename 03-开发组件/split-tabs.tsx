import { useState } from 'react'
import { cx } from './utils'

export function SplitTabs({ items = ['页签一', '页签二', '页签三'] }: { items?: string[] }) {
  const [active, setActive] = useState(items[0])
  return (
    <div className="flex items-center">
      {items.map((tab, index) => (
        <div key={tab} className="flex items-center">
          {index > 0 && <div className="h-5 w-px shrink-0 bg-[#DFDFDF]" />}
          <button
            type="button"
            onClick={() => setActive(tab)}
            className={cx(
              'border-0 bg-transparent px-3 py-1 text-[14px] leading-5',
              tab === active ? 'font-medium text-[#0067D1]' : 'font-normal text-[#191919]',
            )}
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  )
}

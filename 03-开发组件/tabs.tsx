import { useState } from 'react'
import { cx } from './utils'

export function Tabs({ items = ['全部', '组件', 'Token'] }: { items?: string[] }) {
  const [active, setActive] = useState(items[0])
  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
      <div className="flex h-[54px] items-center gap-8 border-b border-[#E5E7EB] px-4">
        {items.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActive(tab)}
            className={cx('relative flex h-full items-center border-0 bg-transparent p-0 text-[14px] leading-5 text-[#101828]', tab === active ? 'font-medium' : 'font-normal hover:text-[#0067D1]')}
          >
            {tab}
            {tab === active ? <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0067D1]" /> : null}
          </button>
        ))}
      </div>
      <div className="p-4 text-[12px] leading-5 text-[#777777]">当前显示：{active}</div>
    </div>
  )
}

import { ChevronRight, Settings } from 'lucide-react'
import { cx } from './utils'

export function SideNavigation() {
  return (
    <div className="w-[255px] rounded-lg border border-[#E5E7EB] bg-white p-2">
      {[
        ['资产管理', ['组件库', '图标库', '颜色 Token']],
        ['工具', ['同步设置', '导出配置']],
      ].map(([group, items]) => (
        <div key={group as string} className="mb-1">
          <div className="flex h-7 items-center px-3 text-[12px] font-medium leading-5 text-[#364153]">{group}</div>
          {(items as string[]).map((item, index) => (
            <div key={item} className={cx('flex h-9 items-center gap-2 rounded-sm px-3 text-[12px] leading-5 text-[#191919]', index === 0 && group === '资产管理' ? 'bg-[#EFF6FF]' : 'hover:bg-[#F9FAFB]')}>
              <Settings size={16} />
              <span className="flex-1">{item}</span>
              {index === 0 ? <ChevronRight size={14} className="text-[#777777]" /> : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

import { Menu, Search } from 'lucide-react'
import { cx } from './utils'
import { IconButton } from './icon-button'
import { Avatar } from './avatar'

export function TopNavigation() {
  return (
    <div className="flex h-14 min-w-[620px] items-center overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
      <div className="flex h-full items-center gap-2 border-r border-[#E5E7EB] px-4">
        <IconButton label="菜单" icon={<Menu size={14} />} />
        <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#0067D1] text-[10px] font-bold text-white">OD</div>
        <div>
          <div className="text-[14px] font-bold leading-5 text-[#101828]">Octo Designer</div>
          <div className="text-[10px] leading-none text-[#777777]">Design System</div>
        </div>
      </div>
      <div className="flex h-full flex-1 items-center gap-8 px-4">
        {['组件库', 'Token 管理', '检查报告'].map((item, index) => (
          <div key={item} className={cx('relative flex h-full items-center text-[14px] leading-5 text-[#101828]', index === 0 ? 'font-medium' : 'font-normal')}>
            {item}
            {index === 0 ? <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0067D1]" /> : null}
          </div>
        ))}
      </div>
      <div className="flex h-full items-center gap-1 border-l border-[#E5E7EB] px-3">
        <IconButton label="搜索" icon={<Search size={14} />} />
        <Avatar label="王" size="s" />
      </div>
    </div>
  )
}

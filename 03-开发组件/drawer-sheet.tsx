import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './button'
import { IconButton } from './icon-button'

export function DrawerPreview() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative h-[260px] overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#F5F6F8]">
      <div className="flex h-full items-center justify-center">
        <Button onClick={() => setOpen(true)}>打开抽屉</Button>
      </div>
      {open ? (
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" onClick={() => setOpen(false)}>
          <div className="absolute bottom-0 right-0 top-0 flex w-[380px] flex-col bg-white shadow-lg" onClick={(event) => event.stopPropagation()}>
            <div className="flex h-14 items-center justify-between border-b border-[#E5E7EB] px-6">
              <span className="text-[14px] font-semibold text-[#101828]">资产详情</span>
              <IconButton label="关闭" icon={<X size={14} />} onClick={() => setOpen(false)} />
            </div>
            <div className="flex-1 p-6 text-[12px] leading-5 text-[#777777]">
              抽屉内容区独立滚动，底部操作栏固定。点击遮罩或关闭按钮可关闭。
            </div>
            <div className="flex h-14 items-center justify-end gap-2 border-t border-[#E5E7EB] px-6">
              <Button variant="secondary" onClick={() => setOpen(false)}>取消</Button>
              <Button onClick={() => setOpen(false)}>保存</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

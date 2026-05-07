import { X } from 'lucide-react'

export function Toast({
  title = '这是一条普通的反馈提示',
  description,
  onClose,
}: {
  title?: string
  description?: string
  onClose?: () => void
}) {
  return (
    <div className="flex w-[269px] flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-[0px_8px_8px_rgba(0,0,0,0.16)]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#0067D1] text-[9px] font-bold italic text-white">i</span>
          <span className="text-[12px] leading-[20px] text-[#191919]">{title}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex shrink-0 items-center border-0 bg-transparent p-0 text-[#777777] hover:text-[#191919]"
        >
          <X size={10} />
        </button>
      </div>
      {description ? (
        <div className="pl-[22px] text-[12px] leading-[20px] text-[#777777]">{description}</div>
      ) : null}
    </div>
  )
}

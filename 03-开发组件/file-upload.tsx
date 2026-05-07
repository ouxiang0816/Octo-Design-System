import { Plus } from 'lucide-react'

export function FileUpload({
  accept = 'doc、xlsx、pdf',
  maxSize = '5M',
  onClick,
}: {
  accept?: string
  maxSize?: string
  onClick?: () => void
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="flex h-[200px] w-[375px] cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[#DFDFDF] bg-[rgba(25,25,25,0.05)] transition-colors hover:border-[#0067D1]"
    >
      <Plus size={20} className="text-[#191919]" />
      <div className="flex items-center gap-0.5 text-[14px] leading-[22px]">
        <span className="text-[#191919]">将文件拖到此处或</span>
        <span className="text-[#0067D1]">单击上传</span>
      </div>
      <span className="text-[12px] leading-[20px] text-[#777777]">不超过 {maxSize}，支持 {accept}</span>
    </div>
  )
}

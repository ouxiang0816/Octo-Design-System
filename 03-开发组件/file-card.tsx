import { FileText } from 'lucide-react'

export function FileCard({
  name = '文件名称.doc',
  size = '3.1 M',
  uploader = '张三',
  date = '2022.11.04',
  showIcon = true,
}: {
  name?: string
  size?: string
  uploader?: string
  date?: string
  showIcon?: boolean
}) {
  return (
    <div className="flex w-[300px] items-end justify-between rounded-lg border border-[#DFDFDF] p-3">
      <div className="flex items-center gap-2">
        {showIcon ? (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-[#0067D1]">
            <FileText size={32} strokeWidth={1.5} />
          </div>
        ) : null}
        <div className="flex flex-col gap-1">
          <span className="text-[14px] leading-normal text-[#191919]">{name}</span>
          <span className="text-[12px] leading-normal text-[#777777]">{size}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[12px] leading-normal text-[#777777]">
        <span>{uploader}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

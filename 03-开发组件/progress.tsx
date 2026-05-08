export type ProgressProps = {
  label?: string
  value?: number
  showActions?: boolean
  onPause?: () => void
  onCancel?: () => void
}

export function Progress({
  label = '安装进度',
  value = 30,
  showActions = true,
  onPause,
  onCancel,
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-center justify-between pr-8 text-[12px] leading-5">
        <span className="text-[#191919]">{label}</span>
        {showActions && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPause}
              className="cursor-pointer border-0 bg-transparent p-0 text-[12px] leading-5 text-[#0067D1]"
            >
              暂停
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="cursor-pointer border-0 bg-transparent p-0 text-[12px] leading-5 text-[#0067D1]"
            >
              取消
            </button>
          </div>
        )}
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-[#DFDFDF]">
          <div className="h-full rounded-full bg-[#0067D1] transition-all" style={{ width: `${clamped}%` }} />
        </div>
        <span className="shrink-0 whitespace-nowrap text-[12px] leading-5 text-[#191919]">{value}%</span>
      </div>
    </div>
  )
}

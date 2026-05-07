import { Minus, Plus } from 'lucide-react'

export function Stepper({
  value = 0,
  min = 0,
  max = 999,
  onChange,
}: {
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
}) {
  return (
    <div className="inline-flex w-fit items-center gap-3.5 rounded-sm border border-[#DFDFDF] bg-white px-3 py-2">
      <button
        type="button"
        disabled={value <= min}
        onClick={() => onChange?.(value - 1)}
        className="flex items-center justify-center border-0 bg-transparent p-0 text-[#191919] transition-colors hover:text-[#0067D1] disabled:cursor-not-allowed disabled:text-[#BFBFBF]"
      >
        <Minus size={14} />
      </button>
      <span className="h-[15px] w-px shrink-0 bg-[#DFDFDF]" />
      <span className="min-w-[2ch] text-center text-[14px] leading-[22px] text-[#191919]">{value}</span>
      <span className="h-[15px] w-px shrink-0 bg-[#DFDFDF]" />
      <button
        type="button"
        disabled={value >= max}
        onClick={() => onChange?.(value + 1)}
        className="flex items-center justify-center border-0 bg-transparent p-0 text-[#191919] transition-colors hover:text-[#0067D1] disabled:cursor-not-allowed disabled:text-[#BFBFBF]"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}

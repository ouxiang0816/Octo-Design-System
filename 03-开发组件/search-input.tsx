import { Search, X } from 'lucide-react'

export function SearchInput({ value = '', placeholder = '搜索组件名称' }: { value?: string; placeholder?: string }) {
  return (
    <div className="relative w-[280px]">
      <input
        value={value}
        readOnly
        placeholder={placeholder}
        className="h-8 w-full rounded-sm border border-[#C9C9C9] bg-white pl-3 pr-8 text-[12px] leading-[18px] text-[#191919] outline-none transition-all duration-100 placeholder:text-[#777777] hover:border-[#191919] focus:border-[#0067D1] focus:shadow-[0_0_0_2px_rgba(0,103,209,0.2)]"
      />
      {value
        ? <X size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777777]" />
        : <Search size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#777777]" />
      }
    </div>
  )
}

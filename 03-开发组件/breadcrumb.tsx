import { ChevronRight } from 'lucide-react'
import { TextLink } from './text-link'

export function Breadcrumb() {
  return (
    <div className="flex items-center gap-1 text-[12px] leading-5">
      <TextLink className="text-[#777777]">组件库</TextLink>
      <ChevronRight size={12} className="text-[#AEAEAE]" />
      <TextLink className="text-[#777777]">基础类</TextLink>
      <ChevronRight size={12} className="text-[#AEAEAE]" />
      <span className="text-[#191919]">Button 规范</span>
    </div>
  )
}

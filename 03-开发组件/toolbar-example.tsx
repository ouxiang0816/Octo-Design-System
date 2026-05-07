import { Download } from 'lucide-react'
import { Button } from './button'
import { SearchInput } from './search-input'
import { SelectBox } from './select-box'

export function ToolbarExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <SearchInput />
      <SelectBox label="原子组件" />
      <Button variant="secondary" icon={<Download size={14} />}>导出</Button>
      <Button>新建</Button>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { ExternalLink, FileText, Search } from 'lucide-react'
import {
  designSystemCategories,
  designSystemEntries,
  syncGeneratedAt,
  type DesignSystemEntry,
  type SyncStatus,
} from './generated/design-system-registry'
import { componentDemoMap, fallbackDemo } from './interactiveDemos'
import { Badge, Button, Tag } from '../../03-开发组件/components'

function App() {
  const [activeCategory, setActiveCategory] = useState('basic')
  const [query, setQuery] = useState('')

  const filteredEntries = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return designSystemEntries.filter((entry) => {
      const matchCategory = activeCategory === 'all' || entry.category === activeCategory
      const searchable = `${entry.id} ${entry.name} ${entry.cnName} ${entry.md?.title ?? ''}`.toLowerCase()
      return matchCategory && (!normalized || searchable.includes(normalized))
    })
  }, [activeCategory, query])

  const statusCounts = useMemo(() => {
    return designSystemEntries.reduce<Record<SyncStatus, number>>(
      (acc, entry) => {
        acc[entry.syncStatus] += 1
        return acc
      },
      { synced: 0, 'missing-figma': 0, 'missing-md': 0, 'missing-component': 0, 'missing-preview': 0, conflict: 0 },
    )
  }, [])

  return (
    <div className="grid min-h-screen grid-cols-[255px_minmax(0,1fr)] bg-[#F5F6F8] text-[#191919]">
      <aside className="sticky top-0 h-screen overflow-y-auto border-r border-[#E5E7EB] bg-white">
        <div className="border-b border-[#E5E7EB] px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#0067D1] text-[10px] font-bold text-white">OD</div>
            <div>
              <div className="text-[14px] font-bold leading-5 text-[#101828]">Octo Designer</div>
              <div className="text-[10px] leading-4 text-[#777777]">Design System v1</div>
            </div>
          </div>
        </div>

        <nav className="px-2 py-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={navClass(activeCategory === 'all')}
          >
            全部条目
            <span className="ml-auto text-[11px] text-[#777777]">{designSystemEntries.length}</span>
          </button>
          {designSystemCategories.map((category) => {
            const count = designSystemEntries.filter((entry) => entry.category === category.id).length
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={navClass(activeCategory === category.id)}
              >
                {category.label}
                <span className="ml-auto text-[11px] text-[#777777]">{count}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="min-w-0 px-8 py-7">
        <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="m-0 text-[24px] font-semibold leading-8 text-[#101828]">设计系统同步预览</h1>
            <p className="mt-1 text-[13px] leading-[22px] text-[#777777]">
              Excel 清单、Markdown 规范、React 组件和网页预览共用同一份 registry。
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge label={`已同步 ${statusCounts.synced}`} variant="green" />
            <Badge label={`待补全 ${statusCounts['missing-figma'] + statusCounts['missing-md'] + statusCounts['missing-component'] + statusCounts['missing-preview']}`} variant="orange" />
            <Badge label={`冲突 ${statusCounts.conflict}`} variant={statusCounts.conflict > 0 ? 'red' : 'gray'} />
          </div>
        </header>

        <section className="mb-6 grid grid-cols-4 gap-3">
          <Metric label="生成时间" value={new Date(syncGeneratedAt).toLocaleString()} />
          <Metric label="Registry 条目" value={`${designSystemEntries.length}`} />
          <Metric label="React 组件映射" value={`${designSystemEntries.filter((entry) => entry.component).length}`} />
          <Metric label="HTML 锚点映射" value={`${designSystemEntries.filter((entry) => entry.preview).length}`} />
        </section>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E7EB] pb-4">
          <div className="relative w-[320px]">
            <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#777777]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索系统 ID、组件名或文档标题"
              className="h-8 w-full rounded-sm border border-[#C9C9C9] bg-white pl-8 pr-3 text-[12px] leading-[18px] outline-none transition-all placeholder:text-[#777777] hover:border-[#191919] focus:border-[#0067D1] focus:shadow-[0_0_0_2px_rgba(0,103,209,0.2)]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" icon={<FileText size={14} />}>查看同步表</Button>
            <Button icon={<ExternalLink size={14} />}>打开预览</Button>
          </div>
        </div>

        <section className="space-y-4">
          {filteredEntries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
          {filteredEntries.length === 0 ? (
            <div className="border border-dashed border-[#C9C9C9] bg-white py-16 text-center text-[12px] text-[#777777]">
              没有匹配的设计系统条目
            </div>
          ) : null}
        </section>
      </main>
    </div>
  )
}

function navClass(active: boolean) {
  return [
    'mb-1 flex h-9 w-full items-center rounded-sm px-3 text-left text-[12px] leading-5 transition-colors',
    active ? 'bg-[#EFF6FF] text-[#191919]' : 'bg-transparent text-[#191919] hover:bg-[#F9FAFB]',
  ].join(' ')
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#E5E7EB] bg-white px-4 py-3">
      <div className="text-[11px] leading-4 text-[#777777]">{label}</div>
      <div className="mt-1 truncate text-[16px] font-medium leading-6 text-[#101828]">{value}</div>
    </div>
  )
}

function EntryCard({ entry }: { entry: DesignSystemEntry }) {
  const demo = componentDemoMap[entry.id] ?? (entry.component ? fallbackDemo : null)

  return (
    <article id={entry.preview?.anchor ?? entry.id.replace('.', '-')} className="border border-[#E5E7EB] bg-white">
      <div className="grid grid-cols-[minmax(0,1fr)_220px] gap-5 border-b border-[#E5E7EB] p-5">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h2 className="m-0 text-[18px] font-semibold leading-7 text-[#101828]">{entry.name} {entry.cnName}</h2>
            <SyncBadge status={entry.syncStatus} />
            {entry.status ? <Tag label={entry.status} variant="gray" /> : null}
          </div>
          <p className="m-0 text-[12px] leading-5 text-[#364153]">
            {entry.md?.summary || entry.syncError || '该条目尚未写入详细 Markdown 规范。'}
          </p>
        </div>
        <dl className="grid grid-cols-[72px_minmax(0,1fr)] gap-x-3 gap-y-1 text-[11px] leading-5">
          <dt className="text-[#777777]">系统ID</dt>
          <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[#0067D1]">{entry.id}</dd>
          <dt className="text-[#777777]">Markdown</dt>
          <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{entry.md ? `${entry.md.file}#${entry.md.anchor}` : '—'}</dd>
          <dt className="text-[#777777]">React</dt>
          <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{entry.component?.exportName ?? '—'}</dd>
          <dt className="text-[#777777]">Excel</dt>
          <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{entry.sheetName ? `${entry.sheetName} · Row ${entry.sheetRow}` : '—'}</dd>
        </dl>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-0">
        <div className="min-w-0 overflow-x-auto p-5">
          {demo ? demo : (
            <div className="flex h-24 items-center justify-center border border-dashed border-[#C9C9C9] text-[12px] text-[#777777]">
              待补全 React 组件映射
            </div>
          )}
        </div>
        <div className="border-l border-[#E5E7EB] p-5">
          <div className="mb-2 text-[12px] font-medium leading-5 text-[#364153]">轻量管理字段</div>
          <dl className="grid grid-cols-[72px_minmax(0,1fr)] gap-x-3 gap-y-1 text-[11px] leading-5">
            <dt className="text-[#777777]">Figma</dt>
            <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{entry.figmaUrl ? '已链接' : '未填写'}</dd>
            <dt className="text-[#777777]">节点</dt>
            <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{entry.figma?.nodeId || '—'}</dd>
            <dt className="text-[#777777]">备注</dt>
            <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{entry.management.note || '—'}</dd>
            <dt className="text-[#777777]">错误</dt>
            <dd className="m-0 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[#FF4D4F]">{entry.syncError || '—'}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

function SyncBadge({ status }: { status: SyncStatus }) {
  const config: Record<SyncStatus, { label: string; variant: 'blue' | 'orange' | 'red' | 'green' | 'gray' }> = {
    synced: { label: '已同步', variant: 'green' },
    'missing-figma': { label: '缺少 Figma 缓存', variant: 'orange' },
    'missing-md': { label: '缺少 MD', variant: 'orange' },
    'missing-component': { label: '缺少组件', variant: 'orange' },
    'missing-preview': { label: '缺少预览', variant: 'orange' },
    conflict: { label: '冲突', variant: 'red' },
  }
  const item = config[status]
  return <Badge label={item.label} variant={item.variant} />
}

export default App

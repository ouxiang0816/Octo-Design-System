import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '../..')
const dist = join(root, '04-预览网站/dist')
const htmlPath = join(dist, 'index.html')
const outPath = join(root, '04-预览网站/Design System Visual Guide.html')

let html = readFileSync(htmlPath, 'utf8')

html = html.replace(/<link rel="icon"[^>]*>\s*/g, '')
html = html.replace(
  /<link rel="stylesheet" crossorigin href="\.?\/?assets\/([^"]+\.css)">/g,
  (_match, file) => {
    const css = readFileSync(join(dist, 'assets', file), 'utf8')
    return `<style>\n${css}\n</style>`
  },
)
html = html.replace(
  /<script type="module" crossorigin src="\.?\/?assets\/([^"]+\.js)"><\/script>/g,
  (_match, file) => {
    const js = readFileSync(join(dist, 'assets', file), 'utf8')
    return `<script type="module">\n${js}\n</script>`
  },
)

writeFileSync(outPath, html, 'utf8')
console.log(`Inlined Vite build into ${outPath}`)

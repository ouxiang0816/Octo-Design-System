# Octo Designer 设计系统

B 端 Web 设计工具的 React + TypeScript 组件库与规范体系，覆盖 Figma 同步、Markdown 文档和可交互预览。

## 目录结构

```
01-excel表/          组件清单（数据源，驱动同步脚本）
02-markdown文档/     设计规范文档（BASE.md + 各组件 component.*.md）
03-开发组件/         React 组件源码（每个组件一个文件）
04-预览网站/         可交互预览站（Vite + React）
05-自动化工作流/     同步脚本 + 生成产物
```

## 快速上手

```bash
# 启动预览站（开发模式）
cd 05-自动化工作流
npm run ds:dev

# 完整构建（同步 → 构建 → 生成 HTML）
npm run ds:build

# 仅校验同步状态
npm run ds:check
```

## AI 使用入口

引用 `02-markdown文档/AI_REFERENCE.md`（自动生成，保持最新）。

详细维护流程见 [02-markdown文档/HOWTO.md](02-markdown文档/HOWTO.md)。

## Claude Code Skill 安装

团队成员在 Claude Code 中执行以下两条命令即可：

```shell
/plugin marketplace add ouxiang0816/Octo-Design-System
/plugin install octo-design-system@Octo-Design-System
```

安装后，让 Claude 生成 UI 时说「用 Octo 设计系统」即可自动触发，或直接输入：

```shell
/octo-design-system:use-octo-design-system
```

已安装过的成员，更新到最新版本：

```shell
/plugin marketplace update Octo-Design-System
```

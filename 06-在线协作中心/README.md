# Octo Design System Hub

`06-在线协作中心/` 是独立于现有设计系统结构的内部协作项目。

它解决的问题不是“如何生成组件”，而是“团队成员如何不再把 Excel 内容人工发给维护者”。新的协作路径是：

1. 团队成员在管理台维护组件状态和 Figma 信息
2. 系统自动或手动创建同步任务
3. worker 把数据库记录导出为现有脚本可消费的 Excel 结构
4. 调用 `05-自动化工作流/` 现有命令更新 Markdown、registry、AI Reference 和预览站
5. 如需代码改动，生成 `codegen_pr` 审核任务

## 目录

```text
web/        Next.js 管理台
worker/     同步任务执行器
shared/     共享类型与协议
supabase/   SQL migration 和 seed
docs/       部署、状态机、环境变量说明
```

## 命令

```bash
cd 06-在线协作中心
npm install
npm run dev
```

导入现有 Excel：

```bash
npm run worker:import-excel -- --owner your-name
```

手动执行一个任务：

```bash
npm run worker:run-job -- --job-id <uuid>
```

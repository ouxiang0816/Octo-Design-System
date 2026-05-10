# 部署说明

## 目标形态

- `web/` 部署到 Vercel
- Supabase 承担数据库和鉴权
- `worker/` 由 GitHub Actions 调用，也可本地轮询运行
- 现有设计系统仓库继续作为同步目标

## Vercel 项目

Root Directory 设为 `06-在线协作中心/web`。

需要注入的环境变量：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_OCTO_HUB_AUTH_ENABLED`
- `OCTO_HUB_ALLOWED_EMAIL_DOMAIN`

## GitHub Actions

工作流文件位于仓库根目录 `.github/workflows/octo-hub-sync.yml`。

Secrets 需要配置：

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_ANON_KEY`

如果未来要把 `codegen_pr` 任务升级成自动推分支和建 PR，还需要：

- `GH_TOKEN`

## 本地启动

```bash
cd 06-在线协作中心
npm install
npm run dev
```

worker 本地轮询：

```bash
cd 06-在线协作中心
npm run worker:poll
```

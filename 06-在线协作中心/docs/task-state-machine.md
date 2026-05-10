# 任务状态机

## 任务类型

- `auto_sync`
  - 由组件状态变更自动入队
- `manual_sync`
  - 由用户手动创建
- `codegen_pr`
  - 同步后判断需要代码改动时创建，默认等待维护者审核

## 状态

- `queued`
  - 已入队，等待 worker / GitHub Actions 拉取
- `running`
  - 正在执行 Excel 导出、同步脚本和预览构建
- `succeeded`
  - 规范、registry、AI Reference、预览构建完成
- `failed`
  - 执行失败，需查看日志并重试
- `needs_review`
  - 需要人工处理后续代码改动

## 当前 codegen_pr 约束

第一版中，`codegen_pr` 任务会被明确创建并展示，但不会直接生成 React 组件代码。它的职责是把“规范同步成功，但组件实现仍需评审”这个信号从口头沟通变成系统内任务。

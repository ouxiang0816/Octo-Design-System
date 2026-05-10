import { ComponentForm } from "../../components/forms/component-form";

export default function NewComponentPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">新增组件记录</h1>
          <p className="page-copy">先把团队协作入口搬到这里，再由 worker 负责把数据写回现有设计系统仓库。</p>
        </div>
      </div>
      <ComponentForm mode="create" />
    </>
  );
}

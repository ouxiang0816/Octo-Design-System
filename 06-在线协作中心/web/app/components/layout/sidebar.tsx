import Link from "next/link";

const links = [
  { href: "/", label: "总览" },
  { href: "/components", label: "组件维护" },
  { href: "/components/new", label: "新增组件" },
  { href: "/jobs", label: "同步任务" },
  { href: "/login", label: "登录配置" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">OH</div>
        <div>
          <div style={{ fontWeight: 700 }}>Octo Hub</div>
          <div className="muted" style={{ fontSize: 12 }}>在线协作中心</div>
        </div>
      </div>
      <div className="nav-group">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}

import "./global.css";
import { Sidebar } from "./components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octo Hub",
  description: "Octo Design System 在线协作中心",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="shell">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}

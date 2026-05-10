"use client";

import { useState } from "react";
import { getSupabaseBrowser } from "../lib/supabase-browser";

export default function LoginPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);
    const supabase = getSupabaseBrowser();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setMessage(error ? error.message : "正在跳转到 Google 登录...");
    if (error) {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">登录配置</h1>
          <p className="page-copy">当前项目已切到 Supabase Google 登录。团队成员通过 Google 账号进入管理台，后续如需限制公司域名，可再补一层应用侧校验。</p>
        </div>
      </div>
      <div className="panel panel-stack">
        <div className="field">
          <label>登录方式</label>
          <div className="help">使用已在 Supabase Authentication Providers 中配置好的 Google Provider。</div>
        </div>
        <div className="actions">
          <button type="button" className="button" onClick={handleGoogleLogin} disabled={loading}>
            {loading ? "跳转中..." : "使用 Google 登录"}
          </button>
        </div>
        {message ? <div className="help">{message}</div> : null}
      </div>
    </>
  );
}

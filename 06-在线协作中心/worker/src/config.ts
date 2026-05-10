import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

export const hubRoot = path.resolve(currentDir, "../..");
export const repoRoot = process.env.OCTO_REPO_ROOT || path.resolve(hubRoot, "..");
export const workflowRoot = path.join(repoRoot, "05-自动化工作流");
export const previewRoot = path.join(repoRoot, "04-预览网站");
export const excelPath = path.join(repoRoot, "01-excel表", "设计系统组件清单.synced.xlsx");
export const generatedRegistryPath = path.join(workflowRoot, "generated", "design-system-registry.json");
export const aiReferencePath = path.join(repoRoot, "02-markdown文档", "AI_REFERENCE.md");
export const previewHtmlPath = path.join(previewRoot, "Design System Visual Guide.html");
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
export const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || null;

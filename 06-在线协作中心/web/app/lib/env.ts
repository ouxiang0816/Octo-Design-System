export function readEnv(name: string): string | null {
  const value = process.env[name];
  return value && value.trim() ? value : null;
}

export function getRequiredEnv(name: string): string {
  const value = readEnv(name);
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const authConfig = {
  enabled: readEnv("NEXT_PUBLIC_OCTO_HUB_AUTH_ENABLED") === "true",
  allowedDomain: readEnv("OCTO_HUB_ALLOWED_EMAIL_DOMAIN"),
};

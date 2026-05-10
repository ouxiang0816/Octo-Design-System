interface StatusBadgeProps {
  label: string;
  tone: string;
}

export function StatusBadge({ label, tone }: StatusBadgeProps) {
  return <span className={`badge ${tone}`}>{label}</span>;
}

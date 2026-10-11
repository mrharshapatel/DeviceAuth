import { CheckCircle2, Clock3, ShieldAlert } from 'lucide-react';
export default function StatusBadge({ status }) {
  const map = { TRUSTED: { icon: CheckCircle2, label: 'Trusted' }, PENDING: { icon: Clock3, label: 'Pending' }, BLOCKED: { icon: ShieldAlert, label: 'Blocked' } };
  const item = map[status] || map.PENDING; const Icon = item.icon;
  return <span className={`status status-${(status || 'pending').toLowerCase()}`}><Icon size={14}/>{item.label}</span>;
}

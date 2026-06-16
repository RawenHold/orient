import { statusMeta, type ServiceStatus } from "@/data/services";

const toneClass: Record<ServiceStatus, string> = {
  functional: "border-teal-300 bg-teal-50 text-teal-800",
  assisted: "border-sky-300 bg-sky-50 text-sky-800",
  informational: "border-amber-300 bg-amber-50 text-amber-800",
  post: "border-violet-300 bg-violet-50 text-violet-800",
};

export function StatusBadge({ status }: { status: ServiceStatus }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs font-semibold ${toneClass[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {statusMeta[status].label}
    </span>
  );
}

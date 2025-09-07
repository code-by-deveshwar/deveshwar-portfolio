import { cn } from "@/lib/utils"

export function SectionHeader({
  label,
  className,
}: { label: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-sm font-medium", className)}>
      <span className="text-orange-500">•</span>
      <span>{label}</span>
    </div>
  )
}

export default SectionHeader


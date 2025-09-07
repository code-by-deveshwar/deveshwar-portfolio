import { cn } from "@/lib/utils"

export default function ShimmerText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-[length:200%_100%] bg-clip-text text-transparent transition-[background-position] duration-700 ease-out hover:bg-[position:100%_0]",
        className
      )}
    >
      {children}
    </span>
  )
}


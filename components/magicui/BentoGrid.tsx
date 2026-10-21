import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  onClick?: () => void;
  tag?: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  onClick,
  tag,
  ...props
}: BentoCardProps) {
  const content = (
    <div
      key={name}
      onClick={onClick}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151c] transition-all duration-300 hover:border-white/20 hover:bg-[#151922] shadow-xl",
        className
      )}
      {...props}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-1">
        {tag && (
          <span className="w-fit rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300 mb-1">
            {tag}
          </span>
        )}
        {Icon && (
          <Icon className="size-8 origin-left transform-gpu text-zinc-400 transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:text-white" />
        )}
        <h3 className="text-xl font-bold tracking-tight text-white mt-1">
          {name}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>

      {cta && (
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
            {cta}
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]" />
    </div>
  );

  return content;
}

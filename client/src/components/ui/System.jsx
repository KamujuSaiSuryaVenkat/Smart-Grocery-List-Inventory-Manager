/* eslint-disable react-refresh/only-export-components */

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Surface({ as: Component = "div", className, children, ...props }) {
  return (
    <Component
      className={cn(
        "glass-panel rounded-[28px] border border-white/10 bg-white/[0.05] shadow-[0_20px_80px_rgba(2,6,23,0.28)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const Component = to ? Link : href ? "a" : "button";

  const variantClasses = {
    primary:
      "bg-[linear-gradient(135deg,#b6ff5c_0%,#86e9ff_100%)] text-slate-950 shadow-[0_18px_50px_rgba(134,233,255,0.18)]",
    soft: "bg-white/8 text-slate-50 border border-white/12 hover:bg-white/12",
    ghost: "bg-transparent text-slate-200 border border-transparent hover:bg-white/8",
  };

  const sizeClasses = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-sm",
    lg: "h-14 px-6 text-base",
  };

  return (
    <Component
      to={to}
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Badge({ children, tone = "neutral", className }) {
  const toneClasses = {
    neutral: "bg-white/8 text-slate-200 border-white/10",
    emerald: "bg-emerald-400/12 text-emerald-200 border-emerald-400/20",
    blue: "bg-sky-400/12 text-sky-200 border-sky-400/20",
    amber: "bg-amber-400/12 text-amber-200 border-amber-400/20",
    rose: "bg-rose-400/12 text-rose-200 border-rose-400/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function MetricCard({ label, value, note, icon }) {
  return (
    <Surface className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</h3>
          <p className="mt-2 text-sm text-slate-400">{note}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-slate-100">
          {icon}
        </div>
      </div>
    </Surface>
  );
}

export function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{eyebrow}</p> : null}
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

export function ProgressBar({ value, className }) {
  return (
    <div className={cn("h-2 w-full rounded-full bg-white/8", className)}>
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,#b6ff5c_0%,#86e9ff_100%)]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function AvatarStack({ members }) {
  return (
    <div className="flex items-center">
      {members.map((member, index) => (
        <div
          key={member.name}
          className="-ml-3 first:ml-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/60 text-sm font-semibold text-slate-950 shadow-lg"
          style={{ backgroundColor: member.color, zIndex: members.length - index }}
          title={member.name}
        >
          {member.name.slice(0, 1)}
        </div>
      ))}
    </div>
  );
}

export function PageTransition({ children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

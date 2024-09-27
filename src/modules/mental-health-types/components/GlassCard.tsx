export default function GlassCard({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className: string }>) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

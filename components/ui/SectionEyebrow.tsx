import { clsx } from "clsx";

export default function SectionEyebrow({
  number,
  label,
  className,
  light = false,
}: {
  number?: string;
  label: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.12em]",
        light ? "text-cream-100/70" : "text-green-700",
        className,
      )}
    >
      {number ? (
        <span className={clsx("font-display text-base italic", light ? "text-rose-300" : "text-rose-900")}>
          {number}
        </span>
      ) : null}
      <span>{label}</span>
    </div>
  );
}

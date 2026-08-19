const WORDS = ["Social media", "Création", "Vidéo", "Web", "Print", "SEO", "Emailing", "Stratégie"];

export default function WordMarquee() {
  return (
    <div
      aria-hidden
      className="relative flex overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max shrink-0 animate-marquee items-center gap-14 pr-14 motion-reduce:animate-none">
        {[...WORDS, ...WORDS].map((word, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-green-900">
              {word}
            </span>
            <span className="h-[3px] w-[3px] rounded-full bg-rose-900" />
          </span>
        ))}
      </div>
    </div>
  );
}

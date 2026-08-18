const WORDS = ["Social", "Web", "Print", "Vidéo", "Stratégie", "Identité"];

export default function WordMarquee() {
  return (
    <div aria-hidden className="relative flex overflow-hidden border-y border-green-950/10 py-4">
      <div className="flex w-max shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
        {[...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl italic text-green-900/70 sm:text-3xl"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

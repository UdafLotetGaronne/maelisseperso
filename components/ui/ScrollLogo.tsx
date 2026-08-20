"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

type ScrollLogoProps = {
  className?: string;
  from?: number;
  to?: number;
  logoClassName?: string;
};

export default function ScrollLogo({ className, from = -80, to = 80, logoClassName }: ScrollLogoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} aria-hidden className={clsx("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        style={{ x }}
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          logoClassName ?? "w-[110vw] max-w-[1400px]",
        )}
      >
        <Image
          src="/images/logo-mae-comunique.png"
          alt=""
          width={1832}
          height={770}
          className="h-auto w-full opacity-[0.06]"
        />
      </motion.div>
    </div>
  );
}

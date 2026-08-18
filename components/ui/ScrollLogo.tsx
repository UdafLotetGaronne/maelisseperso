"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

type ScrollLogoProps = {
  className?: string;
  from?: number;
  to?: number;
};

export default function ScrollLogo({ className, from = -80, to = 80 }: ScrollLogoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} aria-hidden className={clsx("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div style={{ x }} className="absolute left-1/2 top-1/2 w-[110vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/logo-mae-comunique.png"
          alt=""
          width={1379}
          height={541}
          className="h-auto w-full opacity-[0.06]"
        />
      </motion.div>
    </div>
  );
}

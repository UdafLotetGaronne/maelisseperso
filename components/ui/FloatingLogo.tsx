"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingLogo() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -right-[10%] -top-[6%] -z-10 w-[55vw] max-w-[820px] opacity-[0.05] sm:w-[42vw]"
      initial={{ x: 0, y: 0, rotate: -3 }}
      animate={{
        x: [0, 18, -12, 0],
        y: [0, -14, 10, 0],
        rotate: [-3, 2, -4, -3],
      }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/images/logo-mae-comunique.png"
        alt=""
        width={1379}
        height={541}
        className="h-auto w-full"
      />
    </motion.div>
  );
}

"use client";

import { useId } from "react";
import Image from "next/image";
import { clsx } from "clsx";

const BLOB_PATH =
  "M20.9,-27.9C28.3,-21.4,36.7,-14.9,39.4,-6.5C42.1,1.9,39.1,12.3,32.6,20.1C26.1,27.9,16.1,33.1,5.4,35.3C-5.3,37.5,-16.7,36.7,-26.3,30.7C-35.9,24.7,-43.7,13.5,-44.5,1.5C-45.3,-10.5,-39.1,-23.3,-29.2,-30.1C-19.3,-36.9,-9.6,-37.7,-0.4,-37.2C8.9,-36.7,13.6,-34.4,20.9,-27.9Z";

type OrganicFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  accent?: "rose" | "green" | "mauve";
  priority?: boolean;
  sizes?: string;
  imageScale?: number;
};

export default function OrganicFrame({
  src,
  alt,
  width,
  height,
  className,
  accent = "rose",
  priority,
  sizes,
  imageScale = 1,
}: OrganicFrameProps) {
  const id = useId().replace(/[:]/g, "");
  const clipId = `blob-clip-${id}`;

  return (
    <div className={clsx("relative", className)}>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox" transform="scale(0.01)">
            <path d={BLOB_PATH} transform="translate(50,50)" />
          </clipPath>
        </defs>
      </svg>

      <div
        aria-hidden
        className={clsx(
          "absolute -inset-4 -z-10 sm:-inset-6",
          accent === "rose" && "bg-rose-300/70",
          accent === "green" && "bg-green-300/50",
          accent === "mauve" && "bg-rose-700/60",
        )}
        style={{ clipPath: `url(#${clipId})` }}
      />

      <div
        className={clsx(
          "relative overflow-hidden",
          imageScale < 1 &&
            (accent === "rose" ? "bg-rose-100" : accent === "mauve" ? "bg-rose-700/15" : "bg-green-100"),
        )}
        style={{ clipPath: `url(#${clipId})` }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover"
          style={imageScale < 1 ? { transform: `scale(${imageScale})` } : undefined}
        />
      </div>
    </div>
  );
}

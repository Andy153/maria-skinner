"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

export default function FadeInSection({
  children,
  className,
  as = "section",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionProps = {
    ref,
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    className,
  };

  if (as === "div") {
    return <motion.div {...motionProps}>{children}</motion.div>;
  }

  return <motion.section {...motionProps}>{children}</motion.section>;
}

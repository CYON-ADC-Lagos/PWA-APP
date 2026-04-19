"use client";

import { motion } from "framer-motion";

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: { opacity: 0 },
};

const item = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -18, transition: { duration: 0.2 } },
};

const StepShell = ({ eyebrow, title, subtitle, children }) => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      <div className="mb-7 space-y-2">
        {eyebrow && (
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-primary uppercase"
          >
            <span className="h-1 w-1 rounded-full bg-primary" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            variants={item}
            className="text-sm md:text-base text-ink-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <motion.div variants={item} className="space-y-5">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default StepShell;

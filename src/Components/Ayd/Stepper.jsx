"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
    aria-hidden="true"
  >
    <motion.path
      d="M20 6L9 17l-5-5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    />
  </svg>
);

const Stepper = ({ steps, current }) => {
  const total = steps.length;
  const progress =
    total > 1 ? Math.max(0, Math.min(1, (current - 1) / (total - 1))) : 0;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Step {current} of {total}
        </span>
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-sm font-medium text-ink"
        >
          {steps[current - 1]}
        </motion.span>
      </div>

      {/* Track + markers */}
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[3px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-primary-shade to-green"
            initial={false}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: progress < 1 ? 0.5 : 0 }}
          />
        </div>

        <ol className="relative flex justify-between">
          {steps.map((label, i) => {
            const stepNum = i + 1;
            const isDone = stepNum < current;
            const isActive = stepNum === current;
            return (
              <li key={label} className="flex flex-col items-center gap-2">
                <motion.div
                  initial={false}
                  animate={{
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                  }}
                  className={[
                    "relative flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-semibold transition-colors",
                    isDone
                      ? "border-green bg-green text-white"
                      : isActive
                      ? "border-primary bg-surface-raised text-primary shadow-glow-primary"
                      : "border-line bg-surface-raised text-ink-subtle",
                  ].join(" ")}
                >
                  {isActive && (
                    <motion.span
                      layoutId="step-ring"
                      className="absolute -inset-1 rounded-full border border-primary/40"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 28,
                      }}
                    />
                  )}
                  {isDone ? <CheckIcon /> : <span>{stepNum}</span>}
                </motion.div>
                <span
                  className={[
                    "hidden md:block text-[11px] tracking-wide transition-colors",
                    isActive
                      ? "text-ink font-semibold"
                      : isDone
                      ? "text-ink-muted"
                      : "text-ink-subtle",
                  ].join(" ")}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Stepper;

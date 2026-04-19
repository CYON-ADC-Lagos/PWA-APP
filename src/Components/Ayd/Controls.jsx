"use client";

import React from "react";
import { motion } from "framer-motion";

const baseBtn =
  "relative inline-flex items-center justify-center gap-2 min-w-[120px] md:min-w-[150px] " +
  "px-6 py-3 rounded-xl font-semibold text-sm tracking-wide overflow-hidden " +
  "transition-all duration-200 focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

const primaryBtn =
  `${baseBtn} bg-gradient-to-br from-green to-green-shade text-white ` +
  `shadow-lg shadow-green/30 hover:shadow-green/50 focus-visible:ring-green ` +
  `disabled:from-ink-subtle disabled:to-ink-subtle disabled:shadow-none ` +
  `disabled:cursor-not-allowed disabled:text-white/70`;

const ghostBtn =
  `${baseBtn} bg-white/5 text-ink border border-line ` +
  `hover:bg-white/10 hover:border-line-strong focus-visible:ring-white/40`;

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-90"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const Controls = ({
  goBack,
  next,
  loading,
  start,
  end,
  handleSubmit,
  disable,
}) => {
  const active = !disable && !loading;

  return (
    <div className="flex justify-center md:justify-end gap-3 mt-8">
      {!start && !loading && (
        <motion.button
          type="button"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.96 }}
          className={ghostBtn}
          onClick={goBack}
        >
          <motion.svg
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            initial={false}
            whileHover={{ x: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.24a.75.75 0 010-1.06l4.25-4.24a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </motion.svg>
          Back
        </motion.button>
      )}
      <motion.button
        type="button"
        whileHover={active ? { y: -2 } : {}}
        whileTap={active ? { scale: 0.96 } : {}}
        className={primaryBtn}
        onClick={end ? handleSubmit : next}
        disabled={disable || loading}
      >
        {active && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "40%" }}
          />
        )}
        {loading ? (
          <>
            <Spinner />
            <span>Submitting</span>
          </>
        ) : (
          <>
            <span>{end ? "Submit" : "Continue"}</span>
            {!end && (
              <motion.svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                initial={false}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z"
                  clipRule="evenodd"
                />
              </motion.svg>
            )}
          </>
        )}
      </motion.button>
    </div>
  );
};

export default Controls;

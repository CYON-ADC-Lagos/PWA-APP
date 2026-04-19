"use client";

import { motion } from "framer-motion";

function Title({ title, text, bg, border }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <h2
        className={`text-center ${text} font-extrabold text-[1.7rem] md:text-[2.2rem] tracking-tight`}
      >
        {title}
      </h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className={`w-[90px] mx-auto border-b mt-3 border-4 ${bg} ${border} origin-center`}
      />
    </motion.div>
  );
}

export default Title;

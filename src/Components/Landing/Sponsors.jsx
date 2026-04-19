"use client";

import { motion } from "framer-motion";
import { clientLogos } from "../../helpers/data";

function Sponsors() {
  return (
    <section className="relative max-w-[90%] lg:max-w-[80%] mx-auto my-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-primary-shade font-extrabold text-[1.7rem] md:text-[2rem] tracking-tight"
      >
        SPONSORS
      </motion.h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-[90px] mx-auto border-b mt-3 border-4 border-green bg-green origin-center"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        className="mt-10 flex flex-wrap items-center justify-evenly md:justify-between gap-6"
      >
        {clientLogos?.slice(0, 7).map(({ name, source }, i) => (
          <motion.img
            key={i}
            src={source}
            alt={name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.06 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="max-h-16 md:max-h-20 cursor-pointer grayscale hover:grayscale-0 transition-[filter]"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Sponsors;

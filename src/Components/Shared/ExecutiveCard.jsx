"use client";

import { motion } from "framer-motion";

function ExecutivesCard({ item: { names, photo, title, position, lastName } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group text-center w-[80%] mb-6 mx-auto md:w-[22%]"
    >
      <div className="relative mx-auto mb-4 h-[220px] w-[220px] md:h-[240px] md:w-[240px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/0 to-green/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-black/5 shadow-lg">
          {photo === "" ? (
            <div className="h-full w-full bg-gradient-to-br from-green to-green-shade" />
          ) : (
            <motion.img
              src={photo}
              alt={title}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            />
          )}
        </div>
      </div>

      <p className="text-green font-semibold">
        {(title ? title + " " : "") + (names || "")}
      </p>
      <p className="text-primary-shade font-extrabold tracking-wide">
        {lastName}
      </p>
      <p className="text-[#A7A5A5] font-normal text-sm">{position}</p>
    </motion.div>
  );
}

export default ExecutivesCard;

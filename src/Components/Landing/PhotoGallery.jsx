"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import _img_Event from "../../Assests/Adc.jpeg";
import _img_Event1 from "../../Assests/Adc11.jpeg";
import _img_Event2 from "../../Assests/adc23.jpeg";
const Event =
  _img_Event && typeof _img_Event === "object" && "src" in _img_Event
    ? _img_Event.src
    : _img_Event;
const Event1 =
  _img_Event1 && typeof _img_Event1 === "object" && "src" in _img_Event1
    ? _img_Event1.src
    : _img_Event1;
const Event2 =
  _img_Event2 && typeof _img_Event2 === "object" && "src" in _img_Event2
    ? _img_Event2.src
    : _img_Event2;

const items = [
  { img: Event1, caption: "CYON LEP Leadership Seminar/Retreat 2023." },
  {
    img: Event,
    caption:
      "Lagos Archdiocesan Laity Council 25th Annual General Meeting (AGM) hosted by Ikorodu Deanery.",
  },
  { img: Event2, caption: "Deaneries Thanksgiving AYD 2023" },
];

function Gallery() {
  return (
    <section className="w-full py-16 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-primary-shade font-extrabold text-[1.7rem] md:text-[2rem] tracking-tight"
      >
        PHOTO GALLERY
      </motion.h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-[90px] mx-auto border-b mt-3 border-4 border-green bg-primary origin-center"
      />

      <div className="max-w-[90%] lg:max-w-[85%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((it, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg bg-white"
          >
            <div className="relative h-[260px] md:h-[340px] overflow-hidden">
              <motion.img
                src={it.img}
                alt={it.caption}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="text-sm md:text-[0.95rem] font-medium text-white/95 leading-snug drop-shadow">
                  {it.caption}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-shade px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25"
          >
            View more
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;

"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { sliderData } from "../../helpers/data";

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  const slides = sliderData || [];
  const [activeIdx, setActiveIdx] = useState(0);
  const active = slides[activeIdx] || {};

  // Belt-and-suspenders: even if the carousel state isn't clean, we drive
  // the animated text panel off a separate key so exit/enter runs crisply.
  useEffect(() => {
    if (!slides.length) return;
    const id = setInterval(
      () => setActiveIdx((i) => (i + 1) % slides.length),
      4500
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#fafaf6] to-white">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-[26rem] w-[26rem] rounded-full bg-primary/20 blur-[120px] animate-float-lg" />
        <div className="absolute -top-16 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-green/15 blur-[110px] animate-float" />
        <div className="absolute bottom-[-4rem] left-1/3 h-[18rem] w-[18rem] rounded-full bg-primary-shade/15 blur-[100px] animate-pulse-soft" />
      </div>

      <div className="relative z-10 mx-auto max-w-[90%] lg:max-w-[85%] py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Media column with carousel */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              {/* Decorative halo */}
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/30 via-primary/5 to-green/20 blur-2xl opacity-70 animate-pulse-soft" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
                <Carousel
                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  showThumbs={false}
                  showArrows={false}
                  showIndicators={false}
                  interval={4500}
                  swipeable
                  onChange={(i) => setActiveIdx(i)}
                  selectedItem={activeIdx}
                >
                  {slides.map((item, i) => (
                    <div
                      key={i}
                      className="relative h-[320px] md:h-[460px] w-full"
                    >
                      <motion.img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group relative h-1.5 w-8 overflow-hidden rounded-full bg-white/40"
                  >
                    <span
                      className={`absolute inset-y-0 left-0 rounded-full bg-white transition-all duration-500 ${
                        i === activeIdx ? "w-full" : "w-0 group-hover:w-1/3"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-shade mb-5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green animate-ping opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
              </span>
              CYON Archdiocese of Lagos
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                variants={textContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                className="space-y-4 max-w-xl"
              >
                <motion.h1
                  variants={textItem}
                  className="text-[2rem] md:text-[3.2rem] lg:text-[3.6rem] leading-[1.05] font-extrabold tracking-tight text-green-shade"
                >
                  {active.title}
                </motion.h1>
                <motion.p
                  variants={textItem}
                  className="text-[0.98rem] md:text-[1.05rem] leading-relaxed text-ink-inverse/75 max-w-prose"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  variants={textItem}
                  className="flex flex-wrap gap-3 pt-2"
                >
                  {active?.link && (
                    <motion.a
                      href={active.link}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-shade px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25"
                    >
                      Register now
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 010-1.06L10.94 10 7.21 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                  )}
                  <motion.a
                    href="#event"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/5 px-7 py-3 text-sm font-bold text-green-shade hover:bg-green/10"
                  >
                    View events
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Tiny stats row */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-sm"
            >
              {[
                { k: "Deaneries", v: "18+" },
                { k: "Parishes", v: "200+" },
                { k: "Youths", v: "10k+" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-black/5 bg-white/60 backdrop-blur px-3 py-3"
                >
                  <dt className="text-[10px] tracking-[0.18em] uppercase text-ink-subtle">
                    {s.k}
                  </dt>
                  <dd className="text-xl font-extrabold text-primary-shade mt-0.5">
                    {s.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>

      {/* Soft wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 64"
        className="block w-full h-8 md:h-10 text-white"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,64 L0,64 Z"
        />
      </svg>
    </section>
  );
}

export default Hero;

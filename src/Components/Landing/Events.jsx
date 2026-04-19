"use client";

import Title from "../Common/Title";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { motion } from "framer-motion";

function Events({ events = [], type }) {
  return (
    <section
      id="event"
      className="relative w-full overflow-hidden py-14 md:py-20"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary via-[#d4bd82] to-primary-shade"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay"
      />
      <div
        aria-hidden
        className="absolute -top-20 -left-16 h-80 w-80 rounded-full bg-white/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-green/20 blur-[100px]"
      />

      <div className="relative z-10">
        <Title title={type} text="text-white" bg="bg" border="border-green" />

        <div className="mt-10">
          <Carousel
            autoPlay={false}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showArrows
            showIndicators
            centerSlidePercentage={100}
            interval={5000}
          >
            {events.map((event, idx) => {
              const { eflier, title, description, date, url, venue } = event;
              return (
                <div key={idx} className="px-4 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center text-left"
                  >
                    <div className="md:col-span-2">
                      <div className="relative mx-auto w-full max-w-sm">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-white/20 blur-2xl" />
                        {eflier ? (
                          <motion.div
                            whileHover={{ scale: 1.015 }}
                            transition={{
                              type: "spring",
                              stiffness: 250,
                              damping: 22,
                            }}
                            className="overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-2xl"
                          >
                            <img
                              src={eflier}
                              alt={`${title} flier`}
                              className="h-[300px] md:h-[400px] w-full object-cover"
                            />
                          </motion.div>
                        ) : (
                          <div className="h-[200px] md:h-[400px] w-full rounded-2xl bg-green/60" />
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-3 text-white">
                      <h3 className="font-extrabold text-[1.65rem] md:text-[2.2rem] leading-tight tracking-tight">
                        {title}
                      </h3>
                      <p className="mt-3 text-[0.98rem] md:text-[1.05rem] leading-relaxed text-white/90">
                        {description}
                      </p>
                      <div className="mt-5 flex flex-col sm:flex-row gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm">
                          <CalendarIcon className="w-4" />
                          <span className="font-semibold">{date}</span>
                        </div>
                        {venue && (
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm">
                            <LocationMarkerIcon className="w-4" />
                            <span className="font-medium">{venue}</span>
                          </div>
                        )}
                      </div>
                      {url && (
                        <motion.a
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3 text-sm font-bold text-white shadow-lg shadow-green-shade/40"
                        >
                          Register
                          <svg
                            className="h-4 w-4"
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
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Events;

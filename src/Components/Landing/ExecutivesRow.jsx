"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Title from "../Common/Title";
import { executives } from "../../helpers/data";
import ExecutivesCard from "../Shared/ExecutiveCard";

function ExecutivesRow() {
  const pathname = usePathname() || "/";
  const isExecutivesPage = pathname === "/executives";
  const list = isExecutivesPage ? executives : executives?.slice(0, 4);

  return (
    <section className="relative w-full py-14 md:py-20">
      <Title
        text="text-primary"
        title="MEET THE EXECUTIVES"
        bg="bg"
        border="border-green"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
        className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%] justify-center md:justify-between gap-y-4 py-10"
      >
        {list?.map((item, i) => (
          <ExecutivesCard key={i} item={item} />
        ))}
      </motion.div>

      {!isExecutivesPage && (
        <div className="w-full flex justify-center">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Link
              href="/executives"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-shade to-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25"
            >
              View more
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
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default ExecutivesRow;

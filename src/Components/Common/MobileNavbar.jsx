"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { XIcon } from "@heroicons/react/outline";
import { deaneries, navLinks } from "../../helpers/data";
import _img_Logo from "../../Assests/cyonlogo.png";
const Logo = _img_Logo && typeof _img_Logo === 'object' && 'src' in _img_Logo ? _img_Logo.src : _img_Logo;

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  const [, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  return (
    <aside className="flex flex-col gap-6 py-8 px-6  h-full">
      <div className="px-2 flex justify-between items-center  mt-2 mb-4">
        <Link href="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[30px] mr-8"
            onClick={() => setMenuOpen(false)}
          />
        </Link>
        <XIcon
          className="w-5 text-red-500 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          {navLinks?.map(({ path, title, sub }, i) =>
            sub ? (
              <details key={i}>
                <summary
                  className="flex  items-center cursor-pointer"
                  key={title}
                >
                  <h2 className="hover:text-primary font-normal capitalize">
                    {title}
                  </h2>
                </summary>
                <div className="flex flex-col gap-3 text-sm mt-2">
                  {deaneries?.map(({ title, value }) =>
                    sub ? (
                      <Link href={`/deaneries/${title}`} key={title}>
                        <span
                          className="ml-2 text-sm flex justify-between items-center cursor-pointer"
                          key={title}
                        >
                          <h2 className=" font-normal capitalize">{title}</h2>
                        </span>
                      </Link>
                    ) : (
                      <Link href={path} key={title}>
                        <span
                          className={`${
                            pageLink === path && "text-accent font-semibold"
                          } ml-2 text-sm text-white hover:text-accent capitalize`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {title}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </details>
            ) : (
              <Link
                href={path}
                key={i}
                className={`${
                  pageLink === path && "text-primary font-semibold"
                } text-black hover:text-primary capitalize`}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileNavBar;

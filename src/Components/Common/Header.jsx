"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import _img_Logo from "../../Assests/cyonlogo.png";
import { deaneries, navLinks } from "../../helpers/data";
import MobileNavbar from "./MobileNavbar";
const Logo = _img_Logo && typeof _img_Logo === 'object' && 'src' in _img_Logo ? _img_Logo.src : _img_Logo;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);

  const pageLink = usePathname() || "/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => setScroll(window.pageYOffset > 200);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <header
      className={`sticky uppercase top-0 z-[20] bg-white  shadow-sm  text-primary  ${
        scroll && "shadow"
      }`}
    >
      <div className="flex justify-between bg-white items-center py-5 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center w-full">
          <Link href="/" className="flex ">
            <img src={Logo} alt="Rasmin" className="max-h-7" />
            <p className="text-[.6rem] leading-3 ml-4 font-extrabold text-green  w-[250px]">
              Catholic Youth <br></br>
              Organisation of Nigeria [CYON]<br></br>
              <span className="text-primary font-light">
                Archdiocese of Lagos
              </span>
            </p>
          </Link>

          <nav className="hidden lg:block w-[90%]  ">
            <ul className="flex gap-6 justify-end items-center w-full">
              {navLinks?.map(({ path, title, sub }, i) => (
                <li className="" key={i}>
                  <Link href={title === "Deaneries" ? "#" : path}>
                    <span
                      className={`${
                        pageLink === path && "text-primary  font-semibold"
                      } flex gap-1  relative ${
                        sub && "dropdown dropdown-hover"
                      }`}
                      onMouseEnter={() => setHover(sub && true)}
                      onMouseLeave={() => setHover(sub && false)}
                    >
                      <label
                        tabIndex="0"
                        className={`${
                          pageLink === path && "text-primary font-extrabold"
                        } cursor-pointer hover:text-primary  text-primary text-[1rem] font-medium`}
                      >
                        {title}
                      </label>

                      {title === "Deaneries" && (
                        <ChevronDownIcon className="w-2" />
                      )}
                      {title === "Deaneries" && sub && hover ? (
                        <motion.ul
                          whileInView={{ y: [-20, 0] }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          tabIndex="0"
                          className="bg-white dropdown-content absolute -left-[50%] top-5 menu rounded px-3 py-2 w-[175px] z-[1000] border shadow-md bg-base-100 divide-y"
                        >
                          {deaneries?.map(({ value, title }, i) => (
                            <li key={title}>
                              <Link href={`/deaneries/${title}`}>
                                <p className="p-2 hover:text-primary dropdown dropdown-hover dropdown-right active:bg-primary active:bg-opacity-10">
                                  {title}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      ) : (
                        pageLink === path && (
                          <motion.span
                            whileInView={{ y: [20, 0] }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute -bottom-3 left-1/2 bg-green rounded-full w-[5px] h-[5px]"
                          ></motion.span>
                        )
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <MenuAlt3Icon
          className="lg:hidden w-8 text-primary cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 bg-[#f9f9f9] h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

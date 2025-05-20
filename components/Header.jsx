/**
 * @copyright 2025 bardan-g
 * @license Apache2.0
 */

import { header } from "motion/react-client";
import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 h-20 w-full  flex items-center justify-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0   ">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex  justify-between items-center md:px-6   ">
        <h1>
          <a href="" className="">
            <img
              src="../src/images/logo.svg"
              width={40}
              height={40}
              alt=" logo"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn "
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded fixed ">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a href=" #contact" className="hidden lg:flex max-w-max h-9  items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] bg-zinc-50 text-zinc-900 active:bg-zinc-50/80 
 } ">
          
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header ; 

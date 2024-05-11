import React from "react";
import { styles } from "../style";
import { navLinks } from "../data";
import logo from "../assets/Hero/1.png";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} overflow-hidden w-full px-[0.5rem] sm:px-[2rem]`}>
      <div
        className={`${styles.flexBetween} flex-col overflow-hidden text-gray-500 w-full px-[1rem] py-[0.75rem] rounded-t-lg  bg-black/80 footer-shadow`}
      >
        <a
          href="/about"
          className={`${styles.flexCenter} font-semibold my-[0.5rem]`}
        >
          <img
            src={logo}
            className="w-[2.5rem] h-[2.5rem] mr-[1rem] rounded-full"
            alt="Logo"
          />
          Purely
        </a>

        <div
          className={`${styles.flexCenter} my-[0.5rem]`}
        >
          {navLinks.map((item) => (
            <a
              className={`${styles.navtext} sm:mx-[1rem] hidden sm:flex`}
              key={item.id}
              href={item.navLink}
            >
              {item.navText}
            </a>
          ))}
        </div>
        <div className={`my-[0.5rem] mt-0 ${styles.text3} text-center`}>
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { navLinks } from "../data";
import logo from "../assets/Hero/1.png";
import menu from "../assets/Nav/menu.svg";
import close from "../assets/Nav/close.svg";
import menuScrolled from "../assets/Nav/menuScrolled.svg";
import closeScrolled from "../assets/Nav/closeScrolled.svg";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});

  const toggleMenu = () => {
    if (!toggle) {
      setMenuStyle({
        opacity: 0,
        visibility: "hidden",
      });
      document.body.style.overflow = "hidden";
      setToggle(true);
      setTimeout(() => {
        setMenuStyle({
          opacity: 1,
          visibility: "visible",
        });
      }, 10);
    } else {
      setMenuStyle({
        opacity: 0,
        visibility: "visible",
      });
      document.body.style.overflow = "visible";
      setTimeout(() => {
        setToggle(false);
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setScrolled(position > viewportHeight / 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div
      className={`${styles.flexCenter} fixed z-40 top-[1rem] ss:top-[1.5rem] md:top-[2rem] w-full`}
    > 
      <nav
        style={{
          backgroundColor: scrolled ? "white" : "transparent",
          backdropFilter: scrolled ? "blur(64px)" : "none",
          transition:
            "background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out",
        }}
        className={`${styles.flexBetween} ${
          scrolled ? "bg-yellow" : "bg-primary"
        } w-[90%] sm:w-[90%] xl:w-[80%] px-[0.5rem] ss:px-[1rem] py-[0.3rem]  ss:py-[0.75rem] rounded-full`}
      >
        <a
          href="/about"
          className={`font-semibold ${
            scrolled ? "text-[#000]" : "text-[#fff]"
          }`}
        >
          {!scrolled && (
            <img
              src={logo}
              className="w-[2.5rem] h-[2.5rem] lg:hidden rounded-full"
              alt="Logo"
            />
          )}

          {scrolled ? (
            <img
              src={logo}
              className="w-[2.5rem] h-[2.5rem] rounded-full"
              alt="Logo"
            />
          ) : (
            <p className={`hidden lg:flex`}>Purely</p>
          )}
        </a>

        <div
          className={`${styles.flexBetween} hidden md:flex ss:basis-[65%] sm:basis-[50%] md:basis-[60%] `}
        >
          {navLinks.map((item) => (
            <a
              className={`${styles.navtext} hover:font-semibold active:font-black  active: hover:text-primary `}
              key={item.id}
              href={item.navLink}
              style={{ color: scrolled ? "#000" : "#fff" }}
            >
              {item.navText}
            </a>
          ))}
        </div>
        <div className={`${styles.flexCenter} flex-row`}>
        <LoginButton />
        {/* Mobile View */}
        <div className={`flex md:hidden sm:ml-[1rem]`}>
          <img
            src={
              toggle
                ? scrolled
                  ? closeScrolled
                  : close
                : scrolled
                ? menuScrolled
                : menu
            }
            className="w-[1.7rem] cursor-pointer  z-20"
            alt={toggle ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          />
        </div>
        </div>
      </nav>
      {/* Mobile View toggle */}
      {toggle && (
        <div
          className={`${styles.flexCenter} md:hidden flex-col text-white bg-white/5 backdrop-blur-xl fixed top-0 right-0 w-full min-h-[100vh] overflow-hidden menu-transition`}
          style={menuStyle}
        >
          <div
            className={`${styles.flexCenter} flex-col mb-[1rem] sm:mb-[1.75rem]`}
          >
            {navLinks.map((item) => (
              <a
                className={`${styles.navtext} hover:font-semibold active:font-black hover:text-white/80 my-[0.2rem] `}
                key={item.id}
                href={item.navLink}
              >
                {item.navText}
              </a>
            ))}
          </div>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Navbar;

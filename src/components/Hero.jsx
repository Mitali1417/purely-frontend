import React, { useState, useEffect } from "react";
import { styles } from "../style";
import { heroSlider, heroTextSlider } from "../data";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitionIn, setTransitionIn] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [nextTextIndex, setNextTextIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitionIn(false); // Start fade-out for images
      setTimeout(() => {
        setCurrentIndex(nextIndex); // Update to the next image
        setNextIndex((nextIndex + 1) % heroSlider.length); // Calculate the following image
        setCurrentTextIndex(nextTextIndex); // Update to the next text
        setNextTextIndex((nextTextIndex + 1) % heroTextSlider.length); // Calculate the following text
        setTransitionIn(true); // Reset to start fade-in
      }, 700); // Duration of the fade-out effect
    }, 4000); // Interval includes both fade-in and fade-out durations

    return () => clearInterval(intervalId);
  }, [nextIndex, nextTextIndex]);

  return (
    <>
      <div className={`${styles.flexCenter} relative w-full h-full p-[1rem]`}>
        <div
          className={`${styles.flexBetween} flex-row z-10 bg-white/40 backdrop-blur-2xl w-full h-[96vh] rounded-2xl ${styles.xPaddings} overflow-hidden`}
        >
          <div className={`${styles.flexStart} block z-10 flex-col w-full`}>
            <h1
              className={`block z-20 ${styles.heroHeading} font-Kalnia text-primary w-full`}
            >
              pure
              <span className={` ${styles.heroHeading} text-white`}>ly.</span>
            </h1>
            {/* Dynamic text slider with transition */}
            <div
              className={`${styles.flexStart} block z-20 text-left rounded-r-full rounded-l-lg bg-[#AA7CC7]/20  border-[2px] w-full xl:w-[70%] pt-[1rem] ss:pt-0 pb-[1rem] px-[1rem] overflow-hidden `}
            >
              <div
                className={` ${
                  styles.text2
                } font-Quicks text-white ss:mt-[1rem] ${
                  transitionIn ? "fadeInUp" : "fadeOutUp"
                } h-full w-full sm:leading-3`}
              >
                {heroTextSlider[currentTextIndex].para}
              </div>
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`${styles.flexCenter} flex-col`}
            >
              <a
                href="/about"
                className={`${styles.flexCenter} hidden ss:block z-20 mt-[2rem] text-white hero-btn1 hero-btn-glow1 rounded-full py-[0.6rem] ss:py-[1rem] px-[1.5rem] ss:px-[2rem]`}
              >
                Find Your Best Care
              </a>
              <a
                href="/about"
                className={`${styles.flexCenter} block ss:hidden z-20 mt-[1rem] ss:mt-[2rem] text-white hero-btn1 hero-btn-glow1 rounded-full py-[0.6rem] ss:py-[1rem] px-[1.5rem] ss:px-[2rem]`}
              >
                Best Care
              </a>
            </div>
          </div>
          {/* Hero Image Slider with Transition */}
          <div className={`${styles.flexCenter} mt-[2rem] w-full h-full`}>
            <div
              className={`absolute -right-[7rem] w-[50rem] h-[50rem] object-cover rounded-full`}
            >
              <img
                src={heroSlider[currentIndex].image}
                alt="Current Hero"
                className={`absolute -right-[7rem] top-[20rem] ss:top-[22rem] sm:top-0 w-[20rem] sm:w-[35rem] lg:w-[50rem] h-[20rem] sm:h-[35rem] lg:h-[50rem] opacity-[0.7]  object-cover rounded-full hero-slider-shadow ${
                  transitionIn ? "fadeIn" : "fadeOut"
                }`}
                style={{
                  animation: `${
                    transitionIn
                      ? "fadeInRight 1.5s ease-out"
                      : "fadeOutLeft 1.5s ease-in"
                  }`,
                  right: "0%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

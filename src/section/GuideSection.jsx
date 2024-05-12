import React, { useState } from "react";
import { styles } from "../style";
import AOS from "../utils/index";

const GuideSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={`${styles.flexCenter} flex-col w-full h-full p-[1rem] `}>
      <div
        className={`${styles.flexCenter} relative flex-col w-full h-full ${styles.yPaddings} lg:min-h-[96vh] xl:min-h-[60vh]`}
      >
        <div
          data-aos="fade-up"
          className={`bg-black shadow-2xl block z-10 relative ${styles.flexBetween} ${styles.xInnerPaddings} ${styles.yPaddings} flex-col lg:flex-row w-full rounded-2xl`}
        >
          <div
            className={` ${styles.text1} w-full leading-tight lg:w-[70%] px-[2rem] font-Quicks text-white `}
          >
            <h3 className={`${styles.head1} `}>
              Not sure where to start? <br />
            </h3>
            <p className={`pt-[1rem]`}>
              To understand how best to care for your skin to be glowing healthy
              and supple, you need to know the steps &nbsp;
            </p>
          </div>

          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`block z-10 mt-[2.5rem] lg:mt-0 text-[0.8rem] ss:text-[1rem] font-semibold hero-btn text-white py-[1rem] px-[2rem] rounded-full  `}
          >
            <a href="/guide">Know your roots</a>
          </div>
          <div className={`hidden lg:absolute -right-[2rem] top-[7rem]  `}>
            <div
              style={{
                transform: hover && "rotate(-0.9turn)",
                transition: "transform 0.5s ease-in-out",
              }}
              className={`hidden lg:absolute z-0 w-[2rem] h-[1rem] right-[24rem] border-[0px] bg-gradient-to-tr from-white/60 to-transparent  border-white/40 -rotate-[47deg]`}
            />
            <div
              style={{
                transform: hover && "rotate(0.9turn)",
                transition: "transform 0.5s ease-in-out",
              }}
              className={`hidden lg:absolute z-0 w-[7rem] h-[3rem] right-[18rem] border-[0px] bg-gradient-to-tr from-white/60 to-transparent  border-white/40 rotate-[30deg]`}
            />
            <div
              style={{
                transform: hover && "rotate(-0.9turn)",
                transition: "transform 0.5s ease-in-out",
              }}
              className={`hidden lg:absolute z-0 w-[6rem] h-[5rem] right-[15rem] border-[0px] bg-gradient-to-tr from-white/60 to-transparent  border-white/40 -rotate-[37deg]`}
            />
            <div
              style={{
                transform: hover && "rotate(0.9turn)",
                transition: "transform 0.5s ease-in-out",
              }}
              className={`hidden lg:absolute z-0 w-[9rem] h-[5.6rem] right-[7rem] border-[0px] bg-gradient-to-tr from-white/60 to-transparent  border-white/40 rotate-[27deg]`}
            />
            <div
              style={{
                transform: hover && "rotate(-0.9turn)",
                transition: "transform 0.5s ease-in-out",
              }}
              className={`hidden lg:absolute z-0 w-[4rem] h-[2rem] right-[3rem] border-[0px] bg-gradient-to-tr from-white/60 to-transparent  border-white/40 -rotate-[47deg]`}
            />
            <div
              style={{
                transform: hover && "rotate(0.9turn)",
                transition: "transform 0.5s ease-in-out",
              }}
              className={`hidden lg:absolute z-0 w-[6rem] h-[4rem] right-[3rem] border-[0px] bg-gradient-to-tr from-white/60 to-transparent  border-white/40 rotate-[57deg]`}
            />
          </div>
        </div>
        <div
          className={`absolute z-0 -left-10 bg-white/90 rounded-full w-[29rem] h-[17rem] blur-2xl -rotate-[25deg] `}
        />
        <div
          className={`absolute z-0 left-[10rem] top-[20rem] bg-coolPink/80  rounded-full w-[16rem] h-[12rem] blur-2xl rotate-[35deg] `}
        />
        <div
          className={`absolute z-0 left-[1rem] top-[20rem] bg-warmPink/80  rounded-full w-[18rem] h-[6rem] blur-2xl -rotate-[15deg] `}
        />
        <div
          className={`absolute z-0 -right-[6rem] top-[8rem] bg-white/60 rounded-full w-[26rem] h-[9rem] blur-2xl rotate-[13deg] `}
        />
      </div>
    </div>
  );
};

export default GuideSection;

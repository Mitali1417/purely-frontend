import React from "react";
import { styles } from "../style";
import { brandList } from "../data";
import musthave from "../assets/Hero/musthave.jpg";

const MustHave = () => {
  return (
    <div
      className={`${styles.flexCenter} ${styles.yPaddings} ${styles.xPaddings} relative w-full h-full`}
    >
      <div
        className={` block z-10 relative bg-[#ccb0dd] text-white w-full sm:w-[95%] xl:w-[90%] h-full rounded-3xl ${styles.xInnerPaddings} ${styles.yPaddings}`}
      >
        <h2 className={` ${styles.head1} mt-[12rem] md:mt-[10rem] lg:mt-0 xl:w-[50%] font-Quicks font-semibold  px-[1rem] sm:px-[2rem]`}>
          Must Haves
        </h2>
        <p className={` lg:w-[40%] xl:w-[50%] ${styles.text2} font-Quicks font-medium  px-[1rem] sm:px-[2rem]`}>
          Whether you're a skincare novice or a seasoned enthusiast, our
          <span className={`italic`}>
            &nbsp;Must-Have Skincare Essentials&nbsp;
          </span>
          section is curated just for you.
        </p>

        <img data-aos="fade-left"
          src={musthave}
          className={`absolute -right-4 -top-[2rem] w-[20rem] lg:w-[28rem] xl:w-[34rem] h-[14rem] lg:h-[20rem] xl:h-[25rem] object-fill rounded-3xl shadow-2xl shadow-primary `}
          alt=""
        />

        <div
          className={`${styles.flexCenter} block z-20 flex-wrap mt-[2rem] lg:mt-[5rem] xl:mt-[10rem] w-full `}
        >
          {brandList.map((item) => (
            <div data-aos="fade-up"
              key={item.id}
              className={`category-container relative w-full ss:w-[80%] sm:w-[46%] md:w-[13rem] xl:w-[18rem] sm:h-[22rem] md:h-[18rem] xl:h-[25rem] my-[0.5rem] md:my-[1rem] mx-[0.5rem] bg-gradient-to-tr from-[#d5bee3] to-[#bb96d2] backdrop-blur-xl  p-[0.5rem] rounded-2xl`}
            >
              <a
                href={item.ProductLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.ProductImage}
                  alt={item.ProductName}
                  className={`rounded-xl w-full h-[65%] xl:h-[75%]`}
                />
                <span
                  className={`absolute text-center p-[1rem] z-0 bottom-0 left-0 w-full h-full flex items-center justify-center bg-[#aa7cc7] bg-opacity-85  text-white font-DM transition-all category-span`}
                >
                  {item.ProductName}
                </span>
              </a>
              <a
                className={`block z-10 ${styles.text3} font-medium font-Quicks w-full my-[1rem] px-[1rem]`}
                href={item.ProductLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.ProductName}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute z-0 right-[30rem] top-0 bg-white/70 rounded-full w-[29rem] h-[17rem] blur-2xl -rotate-[25deg] `}
      />
      <div
        className={`absolute z-0 right-[20rem] top-7 bg-yellow/50 rounded-full w-[29rem] h-[17rem] blur-2xl -rotate-[25deg] `}
      />
      <div
        className={`absolute z-0 left-[2rem] top-[42rem] bg-white/50 rounded-full w-[29rem] h-[23rem] blur-2xl -rotate-[19deg] `}
      />
      <div
        className={`absolute z-0 left-[7rem]  top-[53rem] bg-coolPink/50 rounded-full w-[20rem] h-[17rem] blur-2xl -rotate-[25deg] `}
      />
      <div
        className={`absolute z-0 right-[13rem] bottom-0 bg-white/50 rounded-full w-[29rem] h-[17rem] blur-2xl -rotate-[25deg] `}
      />
      <div
        className={`absolute z-0 right-[2rem] bottom-[8rem] bg-warmPink/30 rounded-full w-[29rem] h-[17rem] blur-2xl -rotate-[25deg] `}
      />
      <div
        className={`absolute z-0 right-[3rem] bottom-[2rem] bg-yellow/50 rounded-full w-[29rem] h-[17rem] blur-2xl -rotate-[25deg] `}
      />
    </div>
  );
};

export default MustHave;

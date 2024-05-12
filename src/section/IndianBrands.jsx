import React from "react";
import brandsData from "../brands.json";
import { styles } from "../style";
import Marquee from "react-fast-marquee";

const IndianBrands = () => {
  return (
    <div className={` px-[1rem] py-[5rem]`}>
      <div
        data-aos="fade-in"
        className={`${styles.flexCenter} relative overflow-hidden shadow-2xl py-[2rem] sm:py-[4rem] pb-0 sm:pb-[2rem] flex-col w-full h-full bg-black rounded-3xl`}
      >
        <div className={` ${styles.xPaddings} ${styles.flexCenter} w-full`}>
          <h2
            className={` ${styles.head2} text-center leading-[2rem] ss:leading-[3rem] sm:leading-[4rem] z-20 font-Kalnia text-white`}
          >
            <span
              className={`bg-gradient-to-tr text-[2.2rem] ss:text-[2.8rem] sm:text-[3.5rem] mb-[0.5rem] ss:mb-0 uppercase bg from-coolPurple via-warmPink to-yellow text-transparent bg-clip-text  font-semibold`}
            >
              Indian
            </span>
            <br />
            Brands to Know!
          </h2>
        </div>
        <div className={` ${styles.flexCenter} h-[10rem] w-full`}>
          <Marquee
            pauseOnHover={true}
            play={true}
            delay={0}
            loop={100}
            gradientWidth={100}
            className={`bg-black`}
          >
            {brandsData.AffordableSkincare.map((item) => (
              <a
                key={item.id}
                href={item.URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="flex justify-center items-center m-[0.5rem] w-[19rem] h-fit hover:shadow-2xl border-[2px] border-white hover:border-[#BB96D2] transition-all duration-700 ease-in-out bg-white rounded-lg p-[1rem]" // Simplified and specific flex styling
                >
                  <img
                    src={item.Logo}
                    className="w-fit h-[3rem]"
                    alt={item.Brand}
                  />
                </div>
              </a>
            ))}
          </Marquee>
        </div>
        <div
          className={`w-[30rem] h-[2rem] absolute bg-warmPink blur-[36px] top-5 right-[7rem] rounded-full rotate-[18deg]`}
        />
        <div
          className={`w-[15rem] h-[2.5rem] absolute bg-yellow  blur-[37px] top-3 right-[8rem] rounded-full rotate-[22deg]`}
        />
        <div
          className={`w-[12rem] h-[2.5rem] absolute bg-coolPurple blur-[37px] top-16  right-[2rem] rounded-full rotate-[9deg]`}
        />
        <div
          className={`w-[22rem] h-[5rem] absolute bg-blue blur-[42px] -left-[1rem] bottom-[5rem] rounded-full -rotate-[18deg]`}
        />
        <div
          className={`w-[27rem] h-[5rem] absolute bg-coolPink/80  blur-[39px] left-5 bottom-[4rem] rounded-full -rotate-[38deg]`}
        />
      </div>
    </div>
  );
};

export default IndianBrands;

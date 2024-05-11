import React from "react";
import { brandList } from "../data";
import { styles } from "../style";
import arrow from "../assets/arrow.svg";
import brandsData from "../brands.json";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div
      className={` ${styles.flexCenter} text-white w-full min-h-[100vh] h-full overflow-y-scroll `}
    >
      <div
        className={` ${styles.flexCenter}  flex-wrap bg-[#ddcbe9] absolute left-0 sm:left-[15rem] lg:left-[22rem] overflow-y-scroll right-0 top-0 z-0 brand-list h-[100vh]`}
      >
        <div className={` ${styles.xInnerPaddings}`}>
          <a
            href="/"
            className={`absolute top-[1.6rem] ss:top-[2rem] right-[2rem] md:right-[4rem] w-fit ${styles.flexCenter} cursor-pointer ${styles.text3} font-Quicks font-medium hover:font-semibold`}
          >
            <img src={arrow} className={`w-[1.5rem] h-[1.5rem]`} alt="arrow" />{" "}
            Home
          </a>
          <div 
            className={`bg-black shadow-2xl block z-10 relative ${styles.flexBetween}  px-[1rem] ss:px-[2rem] flex-col lg:flex-row w-full rounded-2xl py-[1.5rem] ss:py-[4rem] mt-[3.5rem] ss:mt-[5rem]`}
          >
            <div className={` ${styles.text1} font-Quicks text-white `}>
              <p className={`${styles.head1} `}>
                Indian Brands to know <br />
              </p>
              <p className={` mt-[0.5rem] ss:mt-[1rem]`}>
                Your skin can change with the seasons or even with age, so check
                in on it now and then!
              </p>
            </div>
          </div>
        </div>
        {/* -----------------------------Mobile view--------------------------------- */}
        <div className={` sm:hidden ${styles.flexCenter} h-[10rem] w-full`}>
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
                  className="flex justify-center items-center m-[0.5rem] sm:w-[19rem] h-fit hover:shadow-2xl border-[2px] border-white hover:border-[#BB96D2] transition-all duration-700 ease-in-out bg-white rounded-lg p-[1rem]" // Simplified and specific flex styling
                >
                  <img
                    src={item.Logo}
                    className="w-fit h-[2rem] sm:h-[3rem]"
                    alt={item.Brand}
                  />
                </div>
              </a>
            ))}
          </Marquee>
        </div>
        <div className={` ${styles.xInnerPaddings} ${styles.flexCenter} flex-wrap w-full`}>
          {brandList.map((item) => (
            <div 
              key={item.id}
              className={`category-container  relative w-full ss:w-[80%] sm:w-[55%] md:w-[40%] xl:w-[16rem] h-[17rem] md:h-[20rem] xl:h-[25rem] my-[1rem] md:m-[1rem] bg-gradient-to-tr from-[#d5bee3] to-[#bb96d2] p-[0.5rem] rounded-2xl`}
            >
              <a
                href={item.ProductLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.ProductImage}
                  alt={item.ProductName}
                  className={`rounded-xl w-full h-[65%] md:h-[60%] xl:h-[75%] object-cover`}
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
    </div>
  );
};

export default Brands;
